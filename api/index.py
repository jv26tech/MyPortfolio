from flask import Flask, request, jsonify, render_template, redirect
from dataclasses import dataclass
import os
from pathlib import Path

DIR = Path(os.getcwd())
template_dir = os.path.abspath(DIR / "templates")
static_dir = os.path.abspath(DIR / "static")
print(template_dir)
app = Flask(__name__, template_folder=template_dir, static_folder=static_dir)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)