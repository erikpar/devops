import SimpleHTTPServer
import SocketServer
import os

PORT = 8000
web_dir = os.path.join(os.path.dirname(__file__), 'resources')
os.chdir(web_dir)

Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

httpd = SocketServer.TCPServer(("", PORT), Handler)

print "running on port", PORT
httpd.serve_forever()
