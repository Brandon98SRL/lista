import './Button.css';

const Button = ({ children , handleClick }) => {
    return(
        <button onClick={handleClick} className='order-button'> 
          {children} 
        </button>
    );
}

export default Button;