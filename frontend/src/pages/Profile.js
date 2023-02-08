import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import DataService from "../services/data.service";
import { EditText } from 'react-edit-text';
/*
const handleSave = (e) => {
  console.log(e);
  this.setState({ [e.target.name] : e.target.value})
}
*/

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
      this.handleSave = this.handleSave.bind(this);
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

    handleSave = (e, setFn, name) => {
      DataService.update(e.value, name, this.state.currentUser.username).then(
        response => {
          setFn({[name]: e.value})
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
                  <b>Username:</b> {this.state.currentUser.username}
                </div>
                <div>
                  <b>Email:</b> {this.state.email}
                </div>
               <h2>Personal information</h2>
                <div>
                  <b>First name:</b><EditText defaultValue={this.state.first_name} onSave={(e) => this.handleSave(e, this.setState, "first_name")} inline />
                </div>
                <div>
                  <b>Last name:</b><EditText defaultValue={this.state.last_name} onSave={(e) => this.handleSave(e, this.setState, "last_name")} />
                </div>
                <div>
                  <b>Country:</b> {this.state.country}
                </div>
                <div>
                  <b>City:</b><EditText defaultValue={this.state.city} onSave={(e) => this.handleSave(e, this.setState, "city")} />
                </div>
                <div>
                  <b>Address:</b><EditText defaultValue={this.state.address} onSave={(e) => this.handleSave(e, this.setState, "address")} />
                </div>
                <div>
                  <b>ZIP Code:</b><EditText defaultValue={this.state.zip_code} onSave={(e) => this.handleSave(e, this.setState, "zip_code")} />
                </div>
            </div>
        </>

    )
}}