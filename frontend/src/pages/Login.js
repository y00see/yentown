import axios from 'axios';
import React from 'react';

const Login = props => {
    
    const [formValue, setformValue] = React.useState({
        username: '',
        password: ''
      });

    const [responseValue, setresponseValue] = React.useState({
        ticker: ''
    })

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
            setresponseValue({ticker: "Succesfully logged in"})
        }}, error =>
            setresponseValue({ticker: JSON.stringify(error.response.data.message)})
        )
        props.setuserValue(JSON.parse(localStorage.getItem('user')));
    }

    return (
        <>
            <div className="section">
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
                    <div>
                        {responseValue.ticker}
                    </div>
                </form>
            </div>
        </>

    )
}

export default Login;