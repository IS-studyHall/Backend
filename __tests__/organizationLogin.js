const axios = require("axios");
require('dotenv').config()
const request = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 5000,
    headers: {},
})
test("login organization - success", async () => {
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    await request.post('organization/login', { email, password })
});
test("login organization - email inesistente su firebase", async () => {
    const email = 'coscienze@mailinator.com'
    const password = 'test1234!'
    try{
        await request.post('organization/login', { email, password })
    }catch(e){
        if(e['response']['status'] != 401)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("login organization - formato email non valido", async () => {
    const email = 'iperuranioòmailinator.com'
    const password = 'test1234!'
    try{
        await request.post('organization/login', { email, password })
    }catch(e){
        if(e['response']['status'] != 401)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("login organization - email mancante", async () => {
    const password = 'test1234!'
    try{
        await request.post('organization/login', { password })
    }catch(e){
        if(e['response']['status'] != 401)
            throw new Error('Richiesta andata a buon fine');
    }
});