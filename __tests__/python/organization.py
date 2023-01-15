import requests
import json
from dotenv import dotenv_values
import getpass
config = dotenv_values("../.env")
url = config['URL'] + 'organization'

def login(user: str, pwd: str):
    obj = {
        "email":user,
        "password":pwd,
    }
    r = requests.post(url + "/login/", json=obj)
    return json.loads(r.text)

def checkAuth(token: str):
    headers = {
        "Authorization": token
    }
    r = requests.get(url + "/example/", headers=headers)
    print(r.text)