import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice} from "../../redux/cartSlice";
import EveryCartItem from "./EveryCartItem";

export const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(
        <div>
            <img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png" alt="cartImg"/> 
            <h3>TOTAL: $ {totalPrice}</h3>
            <div className="cartItems_mobile">
                {cartItems.map( (cartItem, id) =>  <EveryCartItem cartItem={cartItem} key={id}/>)}
            </div>
        </div>
    )
}