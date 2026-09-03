import { useContext } from "react";
import { AuthContext } from "./AuthContext";

//LA FUNCION QUE ESTARE UTILIZANDO EN TODOS LOS COMPONENTES DONDE QUIERA UTILIZAR
//TOKEN USUARIO ETC
export function useAuth(){
    const context= useContext(AuthContext)
    if(!context) throw new Error("useAuth debe usarse dentro de AuthProvider")
    return context
}