import axios from "axios";
import authHeader from './auth.header'

const API_URL = "http://localhost:4040/api/data/";

class DataService {
    load(username) {
        return axios.get(API_URL + "get", { 
            headers: authHeader(),
            username   
        })
    }

    update() {

    }
}

export default new DataService();