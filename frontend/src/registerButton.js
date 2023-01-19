const RegisterButton = ({ to }) => {
    return(
        <>
        <a href={`/${to}`}>
            <button className='Registerbutton'>Register</button>
        </a>
        </>
    );
};

export default RegisterButton;