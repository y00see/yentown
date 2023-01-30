const LoginButton = ({ to }) => {
    return(
        <>
        <a href={`/${to}`}>
            <button className='btn'>Login</button>
        </a>
        </>
    );
};

export default LoginButton;