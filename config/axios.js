const axios = require("axios")
require('dotenv').config()

class Axios {
    constructor() {
        this.instance = axios.create({
            baseURL: process.env.ESSE3_URL,
            timeout: 1000,
            headers: {},
        })
    }
}

module.exports = new Axios()