import requests
import json

import student as st
import organization as org
import studyroom as strm

if __name__ in '__main__':
    data=st.login()
    user = "iperuranio@mailinator.com" #input('inserisci email associazione:\t')
    pwd = "test1234!" #getpass.getpass('Password:')
    #data=org.login(user, pwd)
    token = data['data']['token']
    #org.checkAuth(token)
    #strm.create(token)
    '''
    if  'message' in data:
        print(data['message'])
    else:
        st.checkAuth(data['data']['token'])
    '''