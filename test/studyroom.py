from dotenv import dotenv_values
import requests
import json

config = dotenv_values("../.env")
url = config['URL'] + 'studyroom'

def create(token: str):
    headers = {
        "Authorization": token
    }
    obj = {
        "name": "",
        "seats": "",
        "floor": "",
        "building": "",
    }
    r = requests.post(url + "/create", headers=headers, json=obj)
    print(r.text)
    return r.text