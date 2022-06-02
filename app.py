from email import header
from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
from fake_useragent import UserAgent
import requests

app = Flask(__name__)

@app.route('/api')
def api():
    ua = UserAgent()
    req = requests.get('https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product', headers={'User-Agent': ua.random})
    return jsonify(req.json())

@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
