import { useSelector } from "react-redux"
import { addItem } from '../reduxdata.js/CartSlice'
import { removeWishItem } from "../reduxdata.js/WishlistSlice";
import { useDispatch } from "react-redux";
export default function WishList() {
    const ob = useSelector((state) => state.wishData.value);
    var cart = useSelector(state => state.cartData.value)
    var dispatch = useDispatch()
    const add = (obj) => {
        const currentProduct = cart.find(prod => prod.product._id == obj._id);
        if(currentProduct==undefined){
            dispatch(addItem(obj))
        }
        dispatch(removeWishItem(obj._id))
    }

    return <>
        {/* Heading start */}
        <div className="page-header text-center" style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}>
            <div className="container">
                <h1 className="page-title text-danger">Your Wishlist<span className="text-danger">Shop</span></h1>
            </div>
        </div>
        {/*  Heading end*/}
        <div className="page-content">
            <div className="cart">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <table className="table table-cart table-mobile">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Add</th>
                                        <th>Remove</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ob.map((object) => {
                                        console.log(object)
                                        return <tr>
                                            <td className="product-col">
                                                <div className="product">
                                                    <figure className="product-media">
                                                        <span>
                                                            <img src={"data:image/png;base64," + object.prod_image} alt="Product image" />
                                                        </span>
                                                    </figure>
                                                    <h3 className="product-title">
                                                        <a href="#">{object.prod_name}</a>
                                                    </h3>
                                                </div>
                                            </td>
                                            <td className="price-col">₹ {object.prod_price}</td>
                                            <td>
                                                <button className="btn-product btn-cart" onClick={() => {add(object)}}><span>Move to cart</span></button>
                                            </td>
                                            <td className="remove-col"><button className="btn-remove" onClick={()=>dispatch(removeWishItem(object._id))}><i className="icon-close"></i></button></td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}