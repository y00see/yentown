import axios from "axios";
import authHeader from './auth.header'

const API_URL = "http://localhost:4040/api/data/";

class DataService {
    
    load(username) {
        console.log(username);
        return axios.post(API_URL + "get",{
            username: username
        }, {
            headers: authHeader()
        })
    }

    update() {

    }
}

export default new DataService();