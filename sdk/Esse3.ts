import axios from "axios"
import { Result, Esse3login, Esse3checkLogon } from "./types"

require('dotenv').config()

class Esse3 {
    instance: any
    constructor() {
        this.instance = axios.create({
            baseURL: process.env.ESSE3_URL,
            timeout: 3000,
            headers: {},
        })
    }

    async login(username: string, password: string): Promise<Result<Esse3login> | undefined> {
        const tokenAuth = Buffer.from(`${username}:${password}`).toString('base64')
        try{
            const resp = await this.instance.get('/e3rest/api/login', {
                headers: {
                    'Authorization': `Basic ${tokenAuth}`,
                    "X-Esse3-User-Profile": "STUDENTE"
                }
            })
            const result = {
                data: {
                    firstName: resp['data']['user']['firstName'],
                    lastName: resp['data']['user']['lastName'],
                    codFis: resp['data']['user']['codFis'],
                    username: resp['data']['user']['userId'],
                    token: tokenAuth,
                }
            }
            return result
        }catch(e: any) {
            return {
                data: undefined
            }
        }
    }

    async checkLogon(token: string): Promise<Result<Esse3checkLogon>> {
        const resp = await this.instance.get('/e3rest/api/checkLogon', {
            headers: {
              'Authorization': `Basic ${token}`
            }
        })
        const result = {
            data: {
                ok: resp['data']['ok']
            }
        }
        return result
    }
}

export default new Esse3()