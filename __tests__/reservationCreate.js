test("reservation create - success", async () => {
    const date = new Date();
    const data = {
        date: date.toUTCString(),
        start: '9:00',
        end: '11:00',
        studyroom: '63c45cb6cb5f3d03f85cb5c8',
        user: '',
    }
    const username = ''
    const password = ''
    //const {data} = await request.post('student/login', { username, password })
    //request.defaults.headers.common.Authorization = data['data']['token']
    //await request.get('') aggiungere route prenotazione
});
test("reservation create - error data non valida", async () => {
    const date = new Date();
    const data = {
        date: date.toISOString(),
        start: '9:00',
        end: '11:00',
        studyroom: '63c45cb6cb5f3d03f85cb5c8',
        user: '',
    }
    //const {data} = await request.post('student/login', { username, password })
    //request.defaults.headers.common.Authorization = data['data']['token']
    //await request.get('') aggiungere route prenotazione e try catch per l errore
});
test("reservation create - error fascia oraria non valida", async () => {
    const date = new Date();
    const data = {
        date: date.toUTCString(),
        start: '10:00',
        end: '11:00',
        studyroom: '63c45cb6cb5f3d03f85cb5c8',
        user: '',
    }
    //const {data} = await request.post('student/login', { username, password })
    //request.defaults.headers.common.Authorization = data['data']['token']
    //await request.get('') aggiungere route prenotazione e try catch per l errore
});
test("reservation create - errore giorno passato", async () => {
    const date = new Date();
    const data = {
        date: date.toUTCString(),
        start: '9:00',
        end: '11:00',
        studyroom: '63c45cb6cb5f3d03f85cb5c8',
        user: '',
    }
    //const {data} = await request.post('student/login', { username, password })
    //request.defaults.headers.common.Authorization = data['data']['token']
    //await request.get('') aggiungere route prenotazione e try catch per l errore
});