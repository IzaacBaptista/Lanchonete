import http from "../http-common";

class ProductService {
    create(data){
        return http.post("/produtos",data);
    }
    getAll(){
        return http.get("/produtos");
    }
    get(id){
        return http.get(`/produtos/${id}`);
    }
    update(id, data){
        return http.put(`/produtos/${id}`,data);
    }
    delete(id){
        return http.delete(`/produtos/${id}`);
    }
    deleteAll(){
        return http.delete("/produtos");
    }
}
export default new ProductService();