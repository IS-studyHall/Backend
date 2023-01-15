const axios = require("axios");
require('dotenv').config()
const request = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 5000,
    headers: {},
})
test("studyroom update - success", async () => {
    const studyroom = {
        name: 'Scienze 1',
        seats: 25,
        floor: 3,
        building: 'efereoet', //id building
        image: 'defreofejofoer' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    const {data} = await request.post('organization/login', { email, password })
    request.defaults.headers.common.Authorization = data['data']['token']
    await request.patch('<id>', studyroom)
});
test("studyroom update - nome mancante", async () => {
    const studyroom = {
        name: '',
        seats: 25,
        floor: 3,
        building: 'efereoet', //id building
        image: 'defreofejofoer' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.patch('<id>', studyroom)
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
        building: 'efereoet', //id building
        image: 'defreofejofoer' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.patch('<id>', studyroom)
    }catch(e){
        if(e['response']['status'] != 400)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("studyroom update - edificio mancante", async () => {
    const studyroom = {
        name: 'Scienze 1',
        seats: 25,
        floor: 3,
        building: '',
        image: 'defreofejofoer' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.patch('<id>', studyroom)
    }catch(e){
        if(e['response']['status'] != 400)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("studyroom update - edificio inesistente", async () => {
    const studyroom = {
        name: 'Scienze 1',
        seats: 25,
        floor: 3,
        building: 'efereoet', //id building
        image: 'defreofejofoer' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.patch('<id>', studyroom)
    }catch(e){
        if(e['response']['status'] != 200)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("studyroom update - formato piano errato", async () => {
    const studyroom = {
        name: 'Scienze 1',
        seats: 25,
        floor: '',
        building: 'efereoet', //id building
        image: 'defreofejofoer' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.patch('<id>', studyroom)
    }catch(e){
        if(e['response']['status'] != 200)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("studyroom update - numero piano non valido", async () => {
    const studyroom = {
        name: 'Scienze 1',
        seats: 25,
        floor: 30,
        building: 'efereoet', //id building
        image: 'defreofejofoer' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.patch('<id>', studyroom)
    }catch(e){
        if(e['response']['status'] != 200)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("studyroom update - formato posti non valido", async () => {
    const studyroom = {
        name: 'Scienze 1',
        seats: '',
        floor: 3,
        building: 'efereoet', //id building
        image: 'defreofejofoer' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.patch('<id>', studyroom)
    }catch(e){
        if(e['response']['status'] != 200)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("studyroom update - numero posti non valido", async () => {
    const studyroom = {
        name: 'Scienze 1',
        seats: 100,
        floor: 3,
        building: 'efereoet', //id building
        image: 'defreofejofoer' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.patch('<id>', studyroom)
    }catch(e){
        if(e['response']['status'] != 200)
            throw new Error('Richiesta andata a buon fine');
    }
});
test("studyroom update - immagine mancante", async () => {
    const studyroom = {
        name: 'Scienze 1',
        seats: 10,
        floor: 3,
        building: 'efereoet', //id building
        image: '' //base64 image
    }
    const email = 'iperuranio@mailinator.com'
    const password = 'test1234!'
    try{
        const {data} = await request.post('organization/login', { email, password })
        request.defaults.headers.common.Authorization = data['data']['token']
        await request.patch('<id>', studyroom)
    }catch(e){
        if(e['response']['status'] != 200)
            throw new Error('Richiesta andata a buon fine');
    }
});