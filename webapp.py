from flask import Flask, url_for, render_template, request
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
  return render_template('home.html')

    

if __name__ == "__main__":
    app.run(port=5000)
