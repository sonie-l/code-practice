from flask import Flask, jsonify
from flask_cors import CORS

app = Flask (__name__)
CORS(app)

items = [
    {"id": 1,"name": "Chanel Bag", "price": 2500},
    {"id": 2,"name": "Rolex Watch", "price": 8000},
]

@app.route("/api/items")
def get_items():
    return jsonify(items)

if __name__ == "__main__":
  app.run(debug=True, port=5001)