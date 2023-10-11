import './OrderButton.css';

const OrderButton = ({ children }) => {
    return(
        <button className='order-button'> 
          {children} 
        </button>
    );
}

export default OrderButton;