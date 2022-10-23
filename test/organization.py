import requests
import json
from dotenv import dotenv_values
import getpass
config = dotenv_values("../.env")
url = config['URL'] + 'organization'

def login():
    user = input('inserisci email associazione:\t')
    pwd = getpass.getpass('Password:')
    obj = {
        "email":user,
        "password":pwd,
    }
    r = requests.post(url + "/login/", json=obj)
    return json.loads(r.text)