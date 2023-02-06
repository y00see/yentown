import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import DataService from "../services/data.service";

export default class Profile extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        redirect: null,
        userReady: false,
        currentUser: { username: "" },
        email: "",
        country: "",
        city: "",
        address: "",
        zip_code: "",
        first_name: "",
        last_name: "",
        ticker: ""
      };
    }
  
    componentDidMount() {
      const currentUser = AuthService.getCurrentUser();
  
      if (!currentUser) this.setState({ redirect: "/" });
      this.setState({ currentUser: currentUser, userReady: true })

      DataService.load(currentUser.username).then(
        response => {
          this.setState({
            email: response.data.email,
            country: response.data.country,
            city: response.data.city,
            address: response.data.address,
            zip_code: response.data.zip_code,
            first_name: response.data.first_name,
            last_name: response.data.last_name
          })
        }, error => {
          this.setState({ ticker: JSON.stringify(error.response.data.message)})
        }
      )
    }

  
    render() {
      if (this.state.redirect) {
        return <Navigate to={this.state.redirect} />
      }
      
    return (
        <>
            <div className="main-content">
               <h1>Profile</h1>
               <h2>Account information</h2>
                {this.state.ticker}
                <div>
                  Username: {this.state.currentUser.username}
                </div>
                <div>
                  Email: {this.state.email}
                </div>
               <h2>Personal information</h2>
                <div>
                  First name: {this.state.first_name}
                </div>
                <div>
                  Last name: {this.state.last_name}
                </div>
                <div>
                  Country: {this.state.country}
                </div>
                <div>
                  City: {this.state.city}
                </div>
                <div>
                  Address: {this.state.address}
                </div>
                <div>
                  ZIP Code: {this.state.zip_code}
                </div>
            </div>
        </>

    )
}}