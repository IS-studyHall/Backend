const axios = require("axios");
require('dotenv').config()
const request = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 5000,
    headers: {},
})
test("verify token student - success", async () => {
    const username = ''
    const password = ''
    //const {data} = await request.post('student/login', { username, password })
    //request.defaults.headers.common.Authorization = data['data']['token']
    //await request.get('student')
});
test("verify token student - token non presente", async () => {
    try{
        await request.get('student')
    }catch(e){
        if(e['response']['status'] != 403)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("verify token student - token non valido", async () => {
    request.defaults.headers.common.Authorization = 'ciao'
    try{
        await request.get('student')
    }catch(e){
        if(e['response']['status'] != 401)
            throw new Error('Richiesta andata a buon fine');
    }
});