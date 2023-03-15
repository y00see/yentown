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
        ticker: "",
        orders: []
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
  
    componentDidMount() {
      const currentUser = AuthService.getCurrentUser();
  
      if (!currentUser) this.setState({ redirect: "/" });
      this.setState({ currentUser: currentUser, userReady: true })
      DataService.getOrders(currentUser.username).then(response => {
        this.setState({orders: response.data.orders});
    }, error => {
        this.setState({ticker: JSON.stringify(error)});
    });
      };

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      DataService.order(
        this.state.currentUser.username,
        new Date(),
        this.state.product_url,
        this.state.product_weight,
        this.state.product_x,
        this.state.product_y,
        this.state.product_z,
        this.state.product_price,
        this.state.shipping_cost
      ).then(response => {
        this.setState({ticker: JSON.stringify(response.data.message)});
    }, error => {
        this.setState({ticker: JSON.stringify(error.message)});
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
               <Table orders={this.state.orders} />
               <h2>Create order</h2>
               {this.state.ticker}
               <form onSubmit={this.handleSubmit}>
                <div>
               <input type="text" placeholder="URL for product" name="product_url" value={this.product_url} onChange={(e) => this.handleChange(e)}></input>
               </div>
               <div>
               <input type="number" placeholder="Product weight in grams" name="product_weight" value={this.product_weight} onChange={(e) => this.handleChange(e)}></input>
               </div>
               <div>
               <input type="number" placeholder="Product length in millimeters" name="product_x" value={this.product_x} onChange={(e) => this.handleChange(e)}></input>
               </div>
               <div>
               <input type="number" placeholder="Product height in millimiters" name="product_y" value={this.product_y} onChange={(e) => this.handleChange(e)}></input>
               </div>
               <div>
               <input type="number" placeholder="Product depth in millimiters" name="product_z" value={this.product_z} onChange={(e) => this.handleChange(e)}></input>
               </div>
               <div>
               <input type="number" placeholder="Product price (Yen)" name="product_price" value={this.product_price} onChange={(e) => this.handleChange(e)}></input>
               </div>
               <div>
               <input type="number" placeholder="Shipping cost in Japan" name="shipping_cost" value={this.shipping_cost} onChange={(e) => this.handleChange(e)}></input>
               </div>
               <button type="submit">Create order</button>
               </form>
            </div>
        </>

    )
}}