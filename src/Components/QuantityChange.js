import { useDispatch } from "react-redux"
import { removeItem, increaseQuantity, decreaseQuantity } from "../reduxdata.js/CartSlice"

export default function (props) {
    const dispatch = useDispatch();
    const increaseQty = (ob) => dispatch(increaseQuantity(ob.product._id))
    const decreaseQty = (ob) => {
        if (ob.qty > 1) dispatch(decreaseQuantity(ob.product._id))
        else dispatch(removeItem(ob.product._id))
    }
    return <>
        <div class="cart-product-quantity border p-3">
            <button className='btn-sm btn-outline-success mr-3' onClick={()=>increaseQty(props.object)}>+</button>
            <span>{props.object.qty}</span>
            <button className='btn-sm btn-outline-success ml-3' onClick={()=>decreaseQty(props.object)}>-</button>
        </div>
    </>
}