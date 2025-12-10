export async function signIn(credentials) {

    if(credentials.email==process.env.USERNAME_ADMIN && credentials.password==process.env.PASSWORD_ADMIN){
        return { success: true }
    }
    else{
        throw new Error('CredentialsSignin')
    }

}