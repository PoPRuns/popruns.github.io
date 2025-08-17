import http.server
import os
import os.path
import shutil
import subprocess
import sys
import webbrowser

PORT = 8080

def get_env(args):
    if len(args) >= 2 and args[1] == "deploy":
        env = "deploy"
    else:
        env = "local"
    print(f"environment: {env}")
    return env

def build(env):
    if env == "local":
        shutil.rmtree(path("_framework"), ignore_errors=True)
        shutil.rmtree(path("__blazor"), ignore_errors=True)
    subprocess.run(["dotnet", "publish", path("blazor/PoprunsBlazorPages"), "-c", "Release", "-o", path("blazor/publish")])
    if env == "deploy":
        os.remove(path("blazor/publish/wwwroot/index.html"))
    (shutil.copytree if env == "local" else shutil.move)(path("blazor/publish/wwwroot/_framework"), path("_framework"))
    shutil.copytree(path("blazor/publish/wwwroot"), path("__blazor/wwwroot")) 
    if env == "deploy":
        shutil.rmtree(path("blazor"))

def path(p):
    return os.path.normpath(p)

def run_web_server():
    try:
        with http.server.ThreadingHTTPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
            print(f"Serving at port {PORT} (Ctrl+C to stop)")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("Keyboard interrupt detected")

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def send_error(self, code, message=None, explain=None):
        if code == 404:
            with open("404.html") as htmlFile:
                self.error_message_format = htmlFile.read()
        http.server.BaseHTTPRequestHandler.send_error(self, code, message, explain)

env = get_env(sys.argv)
build(env)
if env == "local":
    webbrowser.open(f"http://127.0.0.1:{PORT}")
    run_web_server()