import axios from "axios"
class RequestClass{   
    GetRequest(URL){
        return axios.get(URL)
    }
    PostRequest(URL,data){
        return axios.post(URL,data)
    }
}
export default new RequestClass();