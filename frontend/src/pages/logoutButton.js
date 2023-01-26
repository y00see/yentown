const LogoutButton = () => {
    const handleClick = (e) => {
        localStorage.removeItem("user");
    }
    return(
        <>
        <a href="/">
            <button className='Logoutbutton' onClick={handleClick}>Logout</button>
        </a>
        </>
    );
};

export default LogoutButton;