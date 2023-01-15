const axios = require("axios");
require('dotenv').config()
const request = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 5000,
    headers: {},
});
test("studyroom update - success", async () => {
    const studyroom = {
        name: 'Scienze 1',
        seats: 25,
        floor: 3,
        building: '63c45b82b7f6c8c688b9119c', //id building
        image: 'data:image/png;base64,fjrhgergheogrogieorieggurh' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    const {data} = await request.post('organization/login', { email, password })
    request.defaults.headers.common.Authorization = data['data']['token']
    await request.patch('studyroom/63c45cb6cb5f3d03f85cb5c8', studyroom)
});
test("studyroom update - nome mancante", async () => {
    const studyroom = {
        seats: 25,
        floor: 3,
        building: '63c45b82b7f6c8c688b9119c', //id building
        image: 'data:image/png;base64,fjrhgergheogrogieorieggurh' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.patch('studyroom/63c45cb6cb5f3d03f85cb5c8', studyroom)
    }catch(e){
        if(e['response']['status'] != 400)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("studyroom update - nome esistente", async () => {
    const studyroom = {
        name: 'Scienze 1',
        seats: 25,
        floor: 3,
        building: '63c45b82b7f6c8c688b9119c', //id building
        image: 'data:image/png;base64,fjrhgergheogrogieorieggurh' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.patch('studyroom/63c45cb6cb5f3d03f85cb5c8', studyroom)
    }catch(e){
        if(e['response']['status'] != 400)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("studyroom update - edificio mancante", async () => {
    const studyroom = {
        name: 'Scienze 2',
        seats: 25,
        floor: 3,
        building: '',
        image: 'data:image/png;base64,fjrhgergheogrogieorieggurh' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.patch('studyroom/63c45cb6cb5f3d03f85cb5c8', studyroom)
    }catch(e){
        if(e['response']['status'] != 400)
            throw new Error('Richiesta andata a buon fine');
    }
});

test("studyroom update - formato piano errato", async () => {
    const studyroom = {
        name: 'Scienze 1',
        seats: 25,
        floor: '',
        building: '63c45b82b7f6c8c688b9119c', //id building
        image: 'data:image/png;base64,fjrhgergheogrogieorieggurh' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.patch('studyroom/63c45cb6cb5f3d03f85cb5c8', studyroom)
    }catch(e){
        if(e['response']['status'] != 400)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("studyroom update - numero piano non valido", async () => {
    const studyroom = {
        name: 'Scienze 1',
        seats: 25,
        floor: 30,
        building: '63c45b82b7f6c8c688b9119c', //id building
        image: 'data:image/png;base64,fjrhgergheogrogieorieggurh' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.patch('studyroom/63c45cb6cb5f3d03f85cb5c8', studyroom)
    }catch(e){
        if(e['response']['status'] != 400)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("studyroom update - formato posti non valido", async () => {
    const studyroom = {
        name: 'Scienze 1',
        seats: '',
        floor: 3,
        building: '63c45b82b7f6c8c688b9119c', //id building
        image: 'data:image/png;base64,fjrhgergheogrogieorieggurh' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.patch('studyroom/63c45cb6cb5f3d03f85cb5c8', studyroom)
    }catch(e){
        if(e['response']['status'] != 400)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("studyroom update - numero posti non valido", async () => {
    const studyroom = {
        name: 'Scienze 1',
        seats: 100,
        floor: 3,
        building: '63c45b82b7f6c8c688b9119c', //id building
        image: 'data:image/png;base64,fjrhgergheogrogieorieggurh' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.patch('studyroom/63c45cb6cb5f3d03f85cb5c8', studyroom)
    }catch(e){
        if(e['response']['status'] != 400)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("studyroom update - immagine mancante", async () => {
    const studyroom = {
        name: 'Scienze 1',
        seats: 10,
        floor: 3,
        building: '63c45b82b7f6c8c688b9119c', //id building
        image: '' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.patch('studyroom/63c45cb6cb5f3d03f85cb5c8', studyroom)
    }catch(e){
        if(e['response']['status'] != 400)
            throw new Error('Richiesta andata a buon fine');
    }
});