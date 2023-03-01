import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import DataService from "../services/data.service";
import Table from "./Table";

export default class Orders extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        redirect: null,
        userReady: false,
        currentUser: { username: "" },
        product_url: "",
        product_weight: "",
        product_x: "",
        product_y: "",
        product_z: "",
        product_price: "",
        shipping_cost: "",
        ticker: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
  
    componentDidMount() {
      const currentUser = AuthService.getCurrentUser();
  
      if (!currentUser) this.setState({ redirect: "/" });
      this.setState({ currentUser: currentUser, userReady: true })
    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      console.log(AuthService.getCurrentUser());
      console.log(this.product_url);
      DataService.order(
        AuthService.getCurrentUser().username,
        new Date(),
        this.product_url,
        this.product_weight,
        this.product_x,
        this.product_y,
        this.product_z,
        this.product_price,
        this.shipping_cost
      ).then(response => {
        this.setState({ticker: JSON.stringify(response.data.message)});
    }, error => {
        this.setState({ticker: JSON.stringify(error.response.data.message)});
    });
    }
  
    render() {
      if (this.state.redirect) {
        return <Navigate to={this.state.redirect} />
      }
      
    return (
        <>
            <div className="main-content">
               <h1>Orders</h1>
               <h2>Current orders</h2>
               <Table />
               <h2>Create order</h2>
               {this.ticker}
               <form onSubmit={this.handleSubmit}>
                <div>
               <input type="text" placeholder="URL for product" name="product_url" value={this.product_url} onChange={this.handleChange}></input>
               </div>
               <div>
               <input type="number" placeholder="Product weight in grams" name="product_weight" value={this.product_weight} onChange={this.handleChange}></input>
               </div>
               <div>
               <input type="number" placeholder="Product length in millimeters" name="product_x" value={this.product_x} onChange={this.handleChange}></input>
               </div>
               <div>
               <input type="number" placeholder="Product height in millimiters" name="product_y" value={this.product_y} onChange={this.handleChange}></input>
               </div>
               <div>
               <input type="number" placeholder="Product depth in millimiters" name="product_z" value={this.product_z} onChange={this.handleChange}></input>
               </div>
               <div>
               <input type="number" placeholder="Product price (Yen)" name="product_price" value={this.product_price} onChange={this.handleChange}></input>
               </div>
               <div>
               <input type="number" placeholder="Shipping cost in Japan" name="shipping_cost" value={this.shipping_cost} onChange={this.handleChange}></input>
               </div>
               <button type="submit">Create order</button>
               </form>
            </div>
        </>

    )
}}