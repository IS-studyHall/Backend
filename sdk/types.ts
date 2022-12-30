export interface Result<T> {
    data: T
}

export interface Esse3login {
    username: string //username unisa
    token: string
    firstName?: string
    lastName?: string
    codFis?: string
}

export interface FirebaseLogin {
    username: string
    email: string
    token: string
    refreshToken: string
}


export interface Esse3checkLogon {
    ok: boolean
}

export interface FirebaseVerifyToken {
    email: string
}

export interface Studyroom {
    name: string
    seats: number
    floor: number
    image: string
    isactive?: boolean
    building: any
    owner: any
}
