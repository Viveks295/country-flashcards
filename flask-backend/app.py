from audioop import cross
from flask import (Flask, abort, jsonify)
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin


app = Flask(__name__, static_folder='../react-frontend/build', static_url_path='')
CORS(app)


from model import db, save_db


@app.route("/cards")
@cross_origin()
def api_card_list():
  return jsonify(db)

@app.route('/')
@cross_origin
def serve():
  return send_from_directory(app.static_folder, 'index.html')


if __name__ == "__main__":
  app.run(host='127.0.0.1', port=5001)
