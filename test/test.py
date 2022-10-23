import requests
import json

import student as st

if __name__ in '__main__':
    data=st.login()
    if  'message' in data:
        print(data['message'])
    else:
        st.checkAuth(data['data']['token'])