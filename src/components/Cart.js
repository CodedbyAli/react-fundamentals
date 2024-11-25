import { useDispatch, useSelector } from "react-redux"
import NestedItemList from "./NestedItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleDeleteCart = () => {
    dispatch(clearCart());
  }

  return (
    <>
        <div className="flex justify-center">
        {cartItems.length === 0 ? <h2>Cart is Empty. Please Add Items Into the Cart</h2>
        :
        <button 
            className="bg-black text-white p-2 rounded-lg"
            onClick={handleDeleteCart}>
            Clear Cart
        </button>
        }
            
        </div>
        <div>
            {<NestedItemList itemCards={cartItems} />}
        </div>
    </>
  )
}

export default Cart