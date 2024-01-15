import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import "./cartWidgetStyled.scss";

function CartWidget ({number, haciendoClick}){

    return (
        <div className='containerCart' >
            <ShoppingCartCheckoutIcon className="cartIcon" onClick={(event) => {haciendoClick(event);}} />
            <span className="cartNumber">{number}</span>
        </div>
    );
}

export default CartWidget;
