const axios = require("axios");
require('dotenv').config()
const request = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 5000,
    headers: {},
})
test("login student - success", async () => {
    const username = '' //to test, insert esse3 credentials
    const password = ''
    //await request.post('student/login', { username, password })
});
test("login student - username mancante", async () => {
    const password = 'test1234!'
    try{
        await request.post('student/login', { password })
    }catch(e){
        if(e['response']['status'] != 401)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("login student - utente non registrato su esse3", async () => {
    const username = 'G.GIORDANO3'
    const password = 'test1234!'
    try{
        await request.post('student/login', { username, password })
    }catch(e){
        if(e['response']['status'] != 401)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("login student - password errata", async () => {
    const username = 'M.MATTIELLO6'
    const password = 'test1234!'
    try{
        await request.post('student/login', { username, password })
    }catch(e){
        if(e['response']['status'] != 401)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("login student - password mancante", async () => {
    const username = 'M.MATTIELLO6'
    const password = ''
    try{
        await request.post('student/login', { username, password })
    }catch(e){
        if(e['response']['status'] != 401)
            throw new Error('Richiesta andata a buon fine');
    }
});
