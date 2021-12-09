import http from "../http-common";
import decode from "jwt-decode";

class AuthService {
    signIn(data){
        return http.post("/signin", data);
    }
    setUserData(data){
        localStorage.setItem("user-token", data.accessToken);
        localStorage.setItem("user-type", data.tipo);
    }
    isSigedIn(){
        const token = localStorage.getItem("user-token");
        if (!token)
            return false;
        try{
            const { exp: expiration } = decode(token); //pegaar a data de expiração
            if (!!expiration && Date.now() > expiration * 1000){
                return false;
            } else {
                return true;
            }
        }catch(_) {
            return false;
        }    
    }
    logOut(){
        localStorage.removeItem("user-token");
        localStorage.removeItem("user-type");
    }
    isAdmin(){
        return localStorage.getItem("user-type") == 1;
    }
    isBalcao(){
        return localStorage.getItem("user-type") == 2;
    }
    isCozinha(){
        return localStorage.getItem("user-type") == 3;
    }
}
export default new AuthService();