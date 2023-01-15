const axios = require("axios");
require('dotenv').config()
const request = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 5000,
    headers: {},
})
test("verify token organization - success", async () => {
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    const {data} = await request.post('organization/login', { email, password })
    request.defaults.headers.common.Authorization = data['data']['token']
    await request.get('organization/')
});
test("verify token organization - token non presente", async () => {
    try{
        await request.get('organization')
    }catch(e){
        if(e['response']['status'] != 403)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("verify token organization - token non valido", async () => {
    request.defaults.headers.common.Authorization = 'ciao'
    try{
        await request.get('organization')
    }catch(e){
        if(e['response']['status'] != 401)
            throw new Error('Richiesta andata a buon fine');
    }
});