import requests
import json

import student as st
import organization as org
if __name__ in '__main__':
    #data=st.login()
    data=org.login()
    org.checkAuth(data['data']['token'])
    '''
    if  'message' in data:
        print(data['message'])
    else:
        st.checkAuth(data['data']['token'])
    '''