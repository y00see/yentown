const RegisterButton = ({ to }) => {
    return(
        <>
        <a href={`/${to}`}>
            <button className='btn'>Register</button>
        </a>
        </>
    );
};

export default RegisterButton;