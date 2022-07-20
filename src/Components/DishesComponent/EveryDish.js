import ChangeQuantity from "../CartComponent/ChangeQuantity";
import { useState } from "react";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const EveryDish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return(
    <div>
        <h2>{dish.name}</h2>
        <img className="dishesImages" src={`${dish.img}.jpeg` } alt="dish"/>
        <h3>${dish.price} / portion</h3>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button onClick={() => {dispatch(addItemToCart({dish, quantity}))}} className="addToCart_btn">Add To Cart</button>
    </div>
    )
}

export default EveryDish;