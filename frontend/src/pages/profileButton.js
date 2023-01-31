const ProfileButton = ({ to }) => {
    return(
        <>
        <a href={`/${to}`}>
            <button className='btn'>Profile</button>
        </a>
        </>
    );
};

export default ProfileButton;