const axios = require("axios");
require('dotenv').config()
const request = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 5000,
    headers: {},
});

test("reservation create - success", async () => {
    const date = new Date();
    const reservation = {
        date: date.toUTCString(),
        start: '9:00',
        end: '11:00',
        studyroom: '63c45cb6cb5f3d03f85cb5c8',
        user: '',
    }
    const username = ''
    const password = ''
    const {data} = await request.post('student/login', { username, password })
    request.defaults.headers.common.Authorization = data['data']['token']
    await request.post('reservation/create', data);
});

test("reservation create - error fascia oraria non valida", async () => {
    const date = new Date();
    const reservation = {
        date: date.toUTCString(),
        start: '10:00',
        end: '11:00',
        studyroom: '63c45cb6cb5f3d03f85cb5c8',
        user: '',
    }
    const username = ''
    const password = ''
    try{
        const {data} = await request.post('student/login', { username, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.post('reservation/create', reservation);
    }catch(e){
        if(e['response']['status'] != 400)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("reservation create - errore giorno passato", async () => {
    const date = new Date();
    const reservation = {
        date: 'Wed, 14 Jun 2017 07:00:00 GMT',
        start: '9:00',
        end: '11:00',
        studyroom: '63c45cb6cb5f3d03f85cb5c8',
        user: 'M.',
    }
    const username = ''
    const password = ''
    try{
        const {data} = await request.post('student/login', { username, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.post('reservation/create', reservation);
    }catch(e){
        if(e['response']['status'] != 400)
            throw new Error('Richiesta andata a buon fine');
    }
});