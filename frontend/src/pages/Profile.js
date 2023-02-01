import axios from 'axios';
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default class Profile extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        redirect: null,
        userReady: false,
        currentUser: { username: "" }
      };
    }
  
    componentDidMount() {
      const currentUser = AuthService.getCurrentUser();
  
      if (!currentUser) this.setState({ redirect: "/" });
      this.setState({ currentUser: currentUser, userReady: true })
    }
  
    render() {
      if (this.state.redirect) {
        return <Navigate to={this.state.redirect} />
      }
  
      const { currentUser } = this.state;
    return (
        <>
            <div className="main-content">
               <h1>Profile</h1>
            </div>
        </>

    )
}}