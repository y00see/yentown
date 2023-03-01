import React from 'react';
import AuthService from '../services/auth.service'


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
        AuthService.login(formValue.username, formValue.password
            ).then(response => {
                if (response.accessToken) {
                    setresponseValue({ticker: "Succesfully logged in"});
                    props.setuserValue(JSON.parse(localStorage.getItem('user')));        
                }
            }, error => {
                setresponseValue({ticker: JSON.stringify(error.response.data.message)});
            });
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