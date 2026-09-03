import type { UserResponse } from "../models/user"

//GRABAR LA INFORMACION    "GRABAR": Unknown word.
const TOKEN_KEY = "auth_token"
const USER_KEY = "auth_user"

export function saveAuth(token:string,user:UserResponse,remember=true){
    const storage = remember ? localStorage : sessionStorage
    storage.setItem(TOKEN_KEY,token)
    storage.setItem(USER_KEY,JSON.stringify(user))
}

//TRAER LA INFORMACION    "TRAER": Unknown word.
export function getAuth(){
    const token = localStorage.getItem(TOKEN_KEY) ?? sessionStorage.getItem(TOKEN_KEY)
    const userRaw = localStorage.getItem(USER_KEY) ?? sessionStorage.getItem(USER_KEY)

    if(!token || !userRaw) return null

    try {
        const user = JSON.parse(userRaw) as UserResponse
        return {token,user}
    } catch (error) {
        console.error("Error parsing user data:", error)
        return null
    }
}

//LIMPIAR LA INFORMACION    "LIMPIAR": Unknown word.

export function clearAuth(){ 
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
    sessionStorage.removeItem(TOKEN_KEY)
    sessionStorage.removeItem(USER_KEY)
}