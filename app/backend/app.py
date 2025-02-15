from flask import Flask, jsonify
import socket
import os

app = Flask(__name__)

@app.route('/api/data')
def get_data():
    return jsonify({
        'message': 'Hello from Python Backend!',
        'hostname': socket.gethostname(),
        'version': '1.0.0'
    })

@app.route('/health')
def health():
    return jsonify({'status': 'healthy'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
