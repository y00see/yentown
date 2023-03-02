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

    update(value, name, username) {
        return axios.post(API_URL + "update", {
            username: username,
            name: name,
            value: value
        }, {
            headers: authHeader()
        })
    }

    order(
        username,
        date,
        product_url,
        product_weight,
        product_x,
        product_y,
        product_z,
        product_price,
        shipping_cost) {
            return axios.post(API_URL + "order", {
                username: username,
                date: date,
                product_url: product_url,
                product_weight: product_weight,
                product_x: product_x,
                product_y: product_y,
                product_z: product_z,
                product_price: product_price,
                shipping_cost: shipping_cost
            }, {
                headers: authHeader()
            })
        }

    getOrders(username) {
        return axios.post(API_URL + "getorders", {
            username: username
        }, {
            headers: authHeader()
        })
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new DataService();