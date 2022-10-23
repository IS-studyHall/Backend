export interface Result<T> {
    data: T
}

export interface Esse3login {
    token: string
    user: User
}

export interface User {
    firstName: string
    lastName: string
    codFis: string
    userId: string
}

export interface Esse3checkLogon {
    ok: boolean
}