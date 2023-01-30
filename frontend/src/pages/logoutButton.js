const LogoutButton = props => {
    const handleClick = (e) => {
        localStorage.removeItem("user");
        props.setuserValue(JSON.parse(localStorage.getItem('user')));
    }
    return(
        <>
        <button className='Logoutbutton' onClick={handleClick}>Logout</button>
        </>
    );
};

export default LogoutButton;