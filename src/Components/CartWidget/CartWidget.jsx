import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import "./cartWidgetStyled.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../Context/CartContext";

function CartWidget () {
    const navigate = useNavigate();
    const { quantity } = useContext(CartContext);

    const handleClick = () => {
        navigate("/cart");
    };

    return (
        <div className='containerCart' onClick={handleClick}>
            <ShoppingCartCheckoutIcon className="cartIcon" />
            <span className="cartNumber">{quantity}</span>
        </div>
    );
}

export default CartWidget;
