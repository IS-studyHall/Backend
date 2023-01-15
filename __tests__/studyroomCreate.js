const axios = require("axios");
require('dotenv').config()
const request = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 5000,
    headers: {},
});
test("studyroom create - success", async () => {
    const studyroom = {
        name: 'Scienze 2',
        seats: 25,
        floor: 3,
        building: '63c45b82b7f6c8c688b9119c', //id building
        image: 'data:image/png;base64,fjrhgergheogrogieorieggurh' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    const {data} = await request.post('organization/login', { email, password })
    request.defaults.headers.common.Authorization = data['data']['token']
    await request.post('studyroom/create', studyroom)
});
test("studyroom create - nome mancante", async () => {
    const studyroom = {
        name: '',
        seats: 25,
        floor: 3,
        building: '63c45b82b7f6c8c688b9119b', //id building
        image: 'data:image/png;base64,fjrhgergheogrogieorieggurh' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.post('studyroom/create', studyroom)
    }catch(e){
        if(e['response']['status'] != 400)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("studyroom create - nome esistente", async () => {
    const studyroom = {
        name: 'Scienze 1',
        seats: 25,
        floor: 3,
        building: '63c45b82b7f6c8c688b9119b', //id building
        image: 'data:image/png;base64,fjrhgergheogrogieorieggurh' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.post('studyroom/create', studyroom)
    }catch(e){
        if(e['response']['status'] != 400)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("studyroom create - edificio mancante", async () => {
    const studyroom = {
        name: 'Scienze 1',
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
        await request.post('studyroom/create', studyroom)
    }catch(e){
        if(e['response']['status'] != 400)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("studyroom create - edificio inesistente", async () => {
    const studyroom = {
        name: 'Scienze 1',
        seats: 25,
        floor: 3,
        building: '77c45b82b7f6c8c688b9119b', //id building
        image: 'data:image/png;base64,fjrhgergheogrogieorieggurh' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.post('studyroom/create', studyroom)
    }catch(e){
        if(e['response']['status'] != 400)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("studyroom create - formato piano errato", async () => {
    const studyroom = {
        name: 'Scienze 1',
        seats: 25,
        floor: '',
        building: '63c45b82b7f6c8c688b9119b', //id building
        image: 'data:image/png;base64,fjrhgergheogrogieorieggurh' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.post('studyroom/create', studyroom)
    }catch(e){
        if(e['response']['status'] != 400)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("studyroom create - numero piano non valido", async () => {
    const studyroom = {
        name: 'Scienze 1',
        seats: 25,
        floor: 38,
        building: '63c45b82b7f6c8c688b9119b', //id building
        image: 'data:image/png;base64,fjrhgergheogrogieorieggurh' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.post('studyroom/create', studyroom)
    }catch(e){
        if(e['response']['status'] != 400)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("studyroom create - formato posti non valido", async () => {
    const studyroom = {
        name: 'Scienze 1',
        seats: '',
        floor: 3,
        building: '63c45b82b7f6c8c688b9119b', //id building
        image: 'data:image/png;base64,fjrhgergheogrogieorieggurh' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.post('studyroom/create', studyroom)
    }catch(e){
        if(e['response']['status'] != 400)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("studyroom create - numero posti non valido", async () => {
    const studyroom = {
        name: 'Scienze 1',
        seats: 100,
        floor: 3,
        building: '63c45b82b7f6c8c688b9119b', //id building
        image: 'data:image/png;base64,fjrhgergheogrogieorieggurh' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.post('studyroom/create', studyroom)
    }catch(e){
        if(e['response']['status'] != 400)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("studyroom create - immagine mancante", async () => {
    const studyroom = {
        name: 'Scienze 1',
        seats: 10,
        floor: 3,
        building: '63c45b82b7f6c8c688b9119b', //id building
        image: null //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.post('studyroom/create', studyroom)
    }catch(e){
        if(e['response']['status'] != 400)
            throw new Error('Richiesta andata a buon fine');
    }
});