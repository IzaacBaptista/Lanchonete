import http from "../http-common";

class UserService {
    signup(data){
        return http.post("/signup", data);
    }
}
export default new UserService();