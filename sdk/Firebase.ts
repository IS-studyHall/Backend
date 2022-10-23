import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from "../config/firebase";
import { FirebaseLogin, Result } from './types';

class Firebase{
    auth: any
    constructor() {
        this.auth = getAuth(app)
    }

    async login(email:string, password:string): Promise<Result<FirebaseLogin> | undefined>{
        try{
            const { user } = await signInWithEmailAndPassword(this.auth, email, password)
            console.log(user.uid, user.email)
            const result = {
                data: {
                    token: await user.getIdToken(),
                    refreshToken: user.refreshToken,
                    user: user
                }
            }
            return result
        }catch(e){
            return undefined
        }
    }

    async verifyToken(token: string) {
        try{
            const result = await this.auth.verifyIdToken(token)
            console.log('firebase:',result)
        }catch(e){
            return undefined
        }
    }
}

export default new Firebase()