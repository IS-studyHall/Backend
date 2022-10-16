import requests
import json

import student as st

if __name__ in '__main__':
    data=st.login()
    print(data['data']['token'])
    st.checkAuth(data['data']['token'])