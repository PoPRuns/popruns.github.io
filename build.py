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
build_resp = build(env)
if build_resp and env == "local":
    webbrowser.open(f"http://127.0.0.1:{PORT}")
    run_web_server()