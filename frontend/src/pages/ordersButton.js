const OrdersButton = ({ to }) => {
    return(
        <>
        <a href={`/${to}`}>
            <button className='btn'>Orders</button>
        </a>
        </>
    );
};

export default OrdersButton;