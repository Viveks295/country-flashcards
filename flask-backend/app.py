from flask import Flask, render_template, abort, jsonify, request, redirect, url_for

app = Flask(__name__)

from model import db, save_db

@app.route("/")
def welcome():
   return jsonify(db)


@app.route("/cards")
def api_card_list():
  return jsonify(db)
  abort(404)

if __name__ == "__main__":
  app.run(host='127.0.0.1', port=5001)