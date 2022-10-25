export interface Result<T> {
    data: T
}

export interface Esse3login {
    token: string
    user: Student
}

export interface Student {
    firstName: string
    lastName: string
    codFis: string
    userId: string
}

export interface FirebaseLogin {
    token: string
    refreshToken: string
    user: Organization
}

export interface Organization {
    uid: string
    email: string
}

export interface Esse3checkLogon {
    ok: boolean
}

export interface FirebaseVerifyToken {
    email: string
}