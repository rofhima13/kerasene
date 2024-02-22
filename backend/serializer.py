from flask import Flask
import json


app = Flask(__name__)

mod = '{"layerName" : "Dense", "layerNumber" : 1}'

i = json.loads(mod)

@app.route('/')
def index():
  return i #if you want to render a .html file, 
                        # import render_template from flask and use 
                        #render_template("index.html") here.

if __name__ == '__main__':
    app.debug = True
    app.run() #go to http://localhost:5000/ to view the page.