const Register = () => {
    return (
        <div className="registerform">
            <h1>Register account</h1>
            <form method="post" action="signup">
                <h3>Personal information</h3>
                <div class="form-container">
                    <input type="text" placeholder="First names" name="first_name"></input>
                </div>
                <div class="form-container">
                    <input type="text" placeholder="Last name" name="last_name"></input>
                </div>
                <div class="form-container">
                    <select name = "dropdown">
                        <option value = "Austria" selected>Austria</option>
                        <option value = "Belgium">Belgium</option>
                        <option value = "Bulgaria">Bulgaria</option>
                        <option value = "Croatia">Croatia</option>
                        <option value = "Cyprus">Cyprus</option>
                        <option value = "Czech Republic">Czech Republic</option>
                        <option value = "Denmark">Denmark</option>
                        <option value = "Estonia">Estonia</option>
                        <option value = "Finland">Finland</option>
                        <option value = "France">France</option>
                        <option value = "Germany">Germany</option>
                        <option value = "Greece">Greece</option>
                        <option value = "Hungary">Hungary</option>
                        <option value = "Ireland">Ireland</option>
                        <option value = "Italy">Italy</option>
                        <option value = "Latvia">Latvia</option>
                        <option value = "Lithuania">Lithuania</option>
                        <option value = "Luxembourg">Luxembourg</option>
                        <option value = "Malta">Malta</option>
                        <option value = "Netherlands">Netherlands</option>
                        <option value = "Poland">Poland</option>
                        <option value = "Portugal">Portugal</option>
                        <option value = "Romania">Romania</option>
                        <option value = "Slovakia">Slovakia</option>
                        <option value = "Slovenia">Slovenia</option>
                        <option value = "Spain">Spain</option>
                        <option value = "Sweden">Sweden</option>
                    </select>
                </div>
                <div class="form-container">
                    <input type="text" placeholder="City" name="city"></input>
                </div>
                <div class="form-container">
                    <input type="text" placeholder="Address" name="address"></input>
                </div>
                <div class="form-container">
                    <input type="text" placeholder="ZIP Code" name="zipcode"></input>
                </div>
                <h3>Account information</h3>
                <div class="form-container">
                    <input type="text" placeholder="Email" name="email"></input>
                </div>
                <div class="form-container">
                    <input type="text" placeholder="Account name" name="account_name"></input>
                </div>
                <div class="form-container">
                    <input type="password" placeholder="Password" name="password"></input>
                </div>
                <div class="form-container">
                    <input type="password" placeholder="Confirm password" name="confirm_password"></input>
                </div>
                <button type="submit">Register Now</button>
            </form>
        </div>
    )
}

export default Register;