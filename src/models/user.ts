export interface LoginPayLoad{
    
email:string
password:string

}

export interface Role{
    id:string
    name:string
    imagen:string
    route:string
}

export interface UserResponse{
    id:string
    email:string
    name:string
    lastName:string
    phone:string
    notification_token:string | null
    roles:Role[]
}

export interface LoginResponse{
    token:string
    userResponse:UserResponse
}