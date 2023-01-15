import requests
import json
from dotenv import dotenv_values
import getpass
config = dotenv_values("../.env")
url = config['URL'] + 'student'

def login():
    user = input('inserisci nome utente unisa:\t')
    pwd = getpass.getpass('Password:')
    obj = {
        "username":user,
        "password":pwd,
    }
    headers = {
        "X-Esse3-User-Profile": "STUDENTE"
    }
    r = requests.post(url + "/login/", json=obj)
    return json.loads(r.text)

def checkAuth(token: str):
    headers = {
        "Authorization": token
    }
    r = requests.get(url + "/example/", headers=headers)
    print(r.text)
