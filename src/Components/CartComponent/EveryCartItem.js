import { useDispatch } from 'react-redux';
import DataDishes from '../../data/DataDishes';
import { removeItemFromCart } from '../../redux/cartSlice';

const EveryCartItem = ({cartItem}) => {
    const dishes = DataDishes.find(item => item.id === cartItem.dishId);
    const dispatch = useDispatch();
    return(<div className='cartItem'>
        <div>
            <h4>{dishes.name}</h4>
            <p className='portions'>{cartItem.quantity} {cartItem.quantity >= 2 ? ` portions` : ` portion`}</p> 
            <p>Price: $ {dishes.price * cartItem.quantity} </p>
        </div>
        <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="cartIcon"/>
        </span>
    </div>
    )
}

export default EveryCartItem;