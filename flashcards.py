from flask import Flask, render_template, abort, jsonify, request, redirect, url_for

app = Flask(__name__)

from model import db, save_db

@app.route("/")
def welcome():
  return render_template("welcome.html", cards=db)


@app.route("/card/<int:index>")
def cards(index):
  try: 
    card = db[index]
    return render_template("card.html", card=card, index=index, max_index=len(db)-1)
  except IndexError:
    abort(404)

@app.route('/add_card', methods=["GET", "POST"])
def add_card():
  if request.method == "POST":
    card = {"question": request.form['question'], "answer": request.form['answer']}
    db.append(card)
    save_db()
    return redirect(url_for('cards', index=len(db)-1))
  else: 
    return render_template("add_card.html")
       
@app.route("/remove_card/<int:index>", methods=["GET", "POST"])
def remove_card(index):
  try: 
    card = db[index]
    if request.method == "POST":
      db.remove(card)
      save_db()
      return redirect(url_for('welcome'))
    else: 
      return render_template("remove_card.html", card=card)
  except IndexError:
    abort(404)

@app.route("/api/cards")
def api_card_list():
  return jsonify(db)

@app.route("/api/cards/<int:index>")
def api_card_detail(index):
    try:
        return db[index]
    except IndexError:
        abort(404)
