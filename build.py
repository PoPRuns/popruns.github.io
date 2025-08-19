import datetime
import http.server
import os
import os.path
import re
import shutil
import subprocess
import sys

from xml.dom import minidom
from xml.etree.ElementTree import Element, SubElement, tostring

PORT = 8080
DEFAULT_BASE_URL = "https://popruns.github.io"
BLAZOR_PAGES_PATH = "blazor/PoprunsBlazorPages"
EXCLUDED_FOLDERS_FOR_STATIC = {"__blazor", "_framework", "blazor", ".github"}

def collect_routes():
    routes = []

    print("Collecting Blazor routes...")
    for root, dirs, files in os.walk(path(BLAZOR_PAGES_PATH)):
        razor = next((file for file in files if file.endswith(".razor")), None)
        if razor:
            with open(os.path.join(root, razor), "r", encoding="utf-8") as f:
                for line in f.readlines():
                    match = re.search(r"\s*@page\s+\"([^\"]*)\s*", line)
                    if match != None:
                        routes.append(match.group(1))

    print("Collecting Static HTML routes...")
    for root, dirs, files in os.walk(path("."), topdown=True):
        dirs[:] = [d for d in dirs if d not in EXCLUDED_FOLDERS_FOR_STATIC]
        if "index.html" in files:
            routes.append(root.lstrip(".").replace("\\", "/"))

    return sorted(routes)

def generate_sitemap_xml(routes, output="sitemap.xml", base_url=DEFAULT_BASE_URL):
    print("Generating sitemap.xml...")
    urlset = Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")

    for route in routes:
        url = SubElement(urlset, "url")
        loc = SubElement(url, "loc")
        loc.text = f"{base_url}{route}"
        lastmod = SubElement(url, "lastmod")
        lastmod.text = datetime.date.today().isoformat()
        changefreq = SubElement(url, "changefreq")
        changefreq.text = "weekly"
        priority = SubElement(url, "priority")
        priority.text = "0.8"

    xml_str = minidom.parseString(tostring(urlset)).toprettyxml(indent="  ")
    with open(output, "w", encoding="utf-8") as f:
        f.write(xml_str)

def generate_sitemap_html(routes, output="sitemap.html"):
    print("Generating sitemap.html...")
    html = Element("html", attrib={"lang": "en"})
    head = SubElement(html, "head")
    SubElement(head, "meta", charset="UTF-8")
    SubElement(head, "meta", name="viewport", content="width=device-width, initial-scale=1.0")
    SubElement(head, "title").text = "Site Map"

    style = SubElement(head, "style")
    style.text = """
        body { font-family: sans-serif; }
        ul { line-height: 1.8; }
    """

    body = SubElement(html, "body")
    SubElement(body, "h1").text = "Site Map"
    ul = SubElement(body, "ul")

    for route in routes:
        path = route or "/"
        li = SubElement(ul, "li")
        a = SubElement(li, "a", href=path)
        a.text = path

    doc_type = "<!DOCTYPE html>\n"
    pretty_html = minidom.parseString(tostring(html, encoding="utf-8")).toprettyxml(indent="  ")

    with open(output, "w", encoding="utf-8") as f:
        f.write(doc_type + pretty_html)

def get_env(args):
    if len(args) >= 2 and args[1] == "deploy":
        env = "deploy"
    else:
        env = "local"
    print(f"environment: {env}")
    return env

def build(env):
    if env == "local":
        print("Removing existing published data...")
        shutil.rmtree(path("_framework"), ignore_errors=True)
        shutil.rmtree(path("__blazor"), ignore_errors=True)

    print("Publishing PoprunsBlazorPages...")
    process_resp = subprocess.run(["dotnet", "publish", path("blazor/PoprunsBlazorPages"), "-c", "Release", "-o", path("blazor/publish")])
    if process_resp.returncode != 0:
        print("Dotnet build failed...")
        return False

    print("Moving published data...")
    (shutil.copytree if env == "local" else shutil.move)(path("blazor/publish/wwwroot/_framework"), path("_framework"))
    shutil.copytree(path("blazor/publish/wwwroot"), path("__blazor/wwwroot"))

    if env == "deploy":
        print("Removing blazor directory...")
        shutil.rmtree(path("blazor"))
    
    print("Build done.")
    return True

def path(p):
    return os.path.normpath(p)

def run_web_server():
    try:
        with http.server.ThreadingHTTPServer(("", PORT), http.server.SimpleHTTPRequestHandler) as httpd:
            with open("404.html") as html_file:
                httpd.RequestHandlerClass.error_message_format = html_file.read()
            print(f"Serving at http://127.0.0.1:{PORT}/ (Ctrl+C to stop)")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("Keyboard interrupt detected")

if __name__ == "__main__":
    routes = collect_routes()
    generate_sitemap_xml(routes)
    generate_sitemap_html(routes)

    env = get_env(sys.argv)
    build_resp = build(env)
    if not build_resp:
        sys.exit(1)
    if env == "local":
        run_web_server()