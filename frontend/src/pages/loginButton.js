const LoginButton = ({ to }) => {
    return(
        <>
        <a href={`/${to}`}>
            <button className='Loginbutton'>Login</button>
        </a>
        </>
    );
};

export default LoginButton;