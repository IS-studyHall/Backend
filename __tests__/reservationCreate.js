test("reservation create - success", async () => {
    const data = {
        date: '',
        start: '9:00',
        end: '11:00',
        studyroom: '',
        user: '',
    }
});
test("reservation create - error data non valida", async () => {
    const data = {
        date: '',
        start: '9:00',
        end: '11:00',
        studyroom: '',
        user: '',
    }
});
test("reservation create - error fascia oraria non valida", async () => {
    const data = {
        date: '',
        start: '10:00',
        end: '11:00',
        studyroom: '',
        user: '',
    }
});
test("reservation create - errore giorno passato", async () => {
    const data = {
        date: '',
        start: '',
        end: '',
        studyroom: '',
        user: '',
    }
});