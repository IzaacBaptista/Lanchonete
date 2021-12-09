import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-type" : "application/json", 
        "x-access-token" : localStorage.getItem("user-token")
    }
});