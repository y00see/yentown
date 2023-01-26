import axios from 'axios';
import React from 'react';

const Login = () => {
    const [formValue, setformValue] = React.useState({
        username: '',
        password: ''
      });

    const handleChange = (event) => {
        setformValue({
          ...formValue,
          [event.target.name]: event.target.value
        });
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4040/api/auth/signin',
        {
            username: formValue.username,
            password: formValue.password
        }
        ).then(response => {
        if (response.data.accessToken) 
        {
            localStorage.setItem("user", JSON.stringify(response.data));
        }})};

    return (
        <>
            <div className="loginform">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <h2>Username</h2>
                    <div>
                        <input type="text" name="username" value={formValue.username} onChange={handleChange}></input>
                    </div>
                    <h2>Password</h2>
                    <div>
                        <input type="password" name="password" value={formValue.password} onChange={handleChange}></input>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </>

    )
}

export default Login;