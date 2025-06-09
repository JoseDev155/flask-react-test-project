from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app=app) # enable CORS on all routes

@app.route('/')
def hello_world():
    return 'Hello, world'

@app.route('/api/users')
def get_users():
    return {
        'users': [
            {
                'id': 0,
                'name': 'Alice'
            },
            {
                'id': 1,
                'name':'Bob'
            },
            {
                'id': 2,
                'name': 'Charlie'
            }]
    }

@app.route('/api/fruits')
def get_fruits():
    return {
        'fruits': [
            {
                'id': 0,
                'name': 'Apple'
            },
            {
                'id': 1,
                'name': 'Banana'
            },
            {
                'id': 2,
                'name': 'Cherry'
            }]
    }

if __name__ == '__main__':
    app.run(debug=True) # by default, Flask runs on port 5000