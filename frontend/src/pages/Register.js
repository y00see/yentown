import React from 'react';
import AuthService from '../services/auth.service'

const Register = () => {
    const [formValue, setformValue] = React.useState({
        email: '',
        password: '',
        confirm_password: '',
        city: '',
        country: '',
        zip_code: '',
        address: '',
        first_name: '',
        last_name: '',
        account_name: ''
      });

    const [responseValue, setresponseValue] = React.useState({
        ticker: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        AuthService.register(
            formValue.email,
            formValue.account_name,
            formValue.password,
            formValue.confirm_password,
            formValue.city,
            formValue.country,
            formValue.zip_code,
            formValue.address,
            formValue.first_name,
            formValue.last_name
        ).then(response => {
            setresponseValue({ticker: JSON.stringify(response.data.message)});
        }, error => {
            setresponseValue({ticker: JSON.stringify(error.response.data.message)})
        });
    }

    const handleChange = (event) => {
        setformValue({
          ...formValue,
          [event.target.name]: event.target.value
        });
      }

    return (
        <div className="section">
            <h1>Register account</h1>
            <form onSubmit={handleSubmit}>
                <h3>Personal information</h3>
                <div>
                    <input type="text" placeholder="First names" name="first_name" value={formValue.first_name} onChange={handleChange}></input>
                </div>
                <div>
                    <input type="text" placeholder="Last name" name="last_name" value={formValue.last_name} onChange={handleChange}></input>
                </div>
                <div>
                    <select name = "country" onChange={handleChange}>
                        <option value = "Austria" selected>Austria</option>
                        <option value = "Belgium" >Belgium</option>
                        <option value = "Bulgaria" >Bulgaria</option>
                        <option value = "Croatia" >Croatia</option>
                        <option value = "Cyprus" >Cyprus</option>
                        <option value = "Czech Republic" >Czech Republic</option>
                        <option value = "Denmark" >Denmark</option>
                        <option value = "Estonia" >Estonia</option>
                        <option value = "Finland" >Finland</option>
                        <option value = "France" >France</option>
                        <option value = "Germany" >Germany</option>
                        <option value = "Greece" >Greece</option>
                        <option value = "Hungary" >Hungary</option>
                        <option value = "Ireland" >Ireland</option>
                        <option value = "Italy" >Italy</option>
                        <option value = "Latvia" >Latvia</option>
                        <option value = "Lithuania" >Lithuania</option>
                        <option value = "Luxembourg" >Luxembourg</option>
                        <option value = "Malta" >Malta</option>
                        <option value = "Netherlands" >Netherlands</option>
                        <option value = "Poland" >Poland</option>
                        <option value = "Portugal" >Portugal</option>
                        <option value = "Romania" >Romania</option>
                        <option value = "Slovakia" >Slovakia</option>
                        <option value = "Slovenia" >Slovenia</option>
                        <option value = "Spain" >Spain</option>
                        <option value = "Sweden" >Sweden</option>
                    </select>
                </div>
                <div>
                    <input type="text" placeholder="City" name="city" value={formValue.city} onChange={handleChange}></input>
                </div>
                <div>
                    <input type="text" placeholder="Address" name="address" value={formValue.address} onChange={handleChange}></input>
                </div>
                <div>
                    <input type="text" placeholder="ZIP Code" name="zip_code" value={formValue.zip_code} onChange={handleChange}></input>
                </div>
                <h3>Account information</h3>
                <div>
                    <input type="text" placeholder="Email" name="email" value={formValue.email} onChange={handleChange}></input>
                </div>
                <div>
                    <input type="text" placeholder="Account name" name="account_name" value={formValue.account_name} onChange={handleChange}></input>
                </div>
                <div>
                    <input type="password" placeholder="Password" name="password" value={formValue.password} onChange={handleChange}></input>
                </div>
                <div>
                    <input type="password" placeholder="Confirm password" name="confirm_password" value={formValue.confirm_password} onChange={handleChange}></input>
                </div>
                <button type="submit">Register Now</button>
                <div>
                    {responseValue.ticker}
                </div>
            </form>
        </div>
    )
}

export default Register;