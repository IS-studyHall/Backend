import requests
import json
from dotenv import dotenv_values

config = dotenv_values("../.env")
url = config['URL'] + 'student'

def login():
    user = input('inserisci nome utente unisa:\t')
    pwd = input('inserisci password unisa:\t')
    obj = {
        "username":user,
        "password":pwd,
    }
    headers = {
        "X-Esse3-User-Profile": "STUDENTE"
    }
    r = requests.post(url + "/login/", json=obj)
    if(r.status_code==200):
        return json.loads(r.text)
    else:
        return ""

def checkAuth(token: str):
    headers = {
        "Authorization": token
    }
    r = requests.get(url + "/example/", headers=headers)
    print(r.text)
