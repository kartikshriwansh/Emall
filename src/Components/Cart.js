import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import QuantityChange from "./QuantityChange"
import emptyPic from '../images/Empty-cart.jpeg';
import { removeItem } from "../reduxdata.js/CartSlice";
export default function Cart() {
    const ob = useSelector(state => state.cartData.value)
    const dispatch=useDispatch()
    return <>
        {/* Heading start */}
        <div className="page-header text-center" style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}>
            <div className="container">
                <h1 className="page-title">Shopping Cart<span>Shop</span></h1>
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
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ob.map(obb => {
                                        return <tr>
                                            <td className="product-col">
                                                <div className="product">
                                                    <figure className="product-media">
                                                        <span>
                                                            <img src={"data:image/png;base64," + obb.product.prod_image} alt="Product image" />
                                                        </span>
                                                    </figure>
                                                    <h3 className="product-title">
                                                        <a href="#">{obb.product.prod_name}</a>
                                                    </h3>
                                                </div>
                                            </td>
                                            <td className="price-col">₹ {obb.product.prod_price}</td>
                                            <td class="quantity-col">
                                                <QuantityChange object={obb} />
                                            </td>
                                            <td className="total-col">₹ {obb.product.prod_price * obb.qty}</td>
                                            <td className="remove-col"><button className="btn-remove" onClick={()=>dispatch(removeItem(obb.product._id))}><i className="icon-close"></i></button></td>
                                        </tr>
                                    })}
                                </tbody>
                                {ob.length == 0 ? <div className="d-flex flex-column-reverse justify-content-around">
                                    <h4 className="text-danger fw-bolder fs">Oops ! Your cart is empty !</h4><br/>
                                    <div className="text-center d-flex justify-content-center">
                                        <img src={emptyPic} alt="Product image" style={{width:300,height:200}} />
                                    </div>
                                </div> : ""}
                            </table>
                        </div>
                        <aside className="col-lg-3">
                            <div className="summary summary-cart">
                                <h3 className="summary-title">Cart Total</h3>

                                <table className="table table-summary">
                                    <tbody>
                                        <tr className="summary-subtotal">
                                            <td>Subtotal:</td>
                                            <td> ₹ {ob.reduce((x, ob) => ob.product.prod_price * ob.qty + x, 0)}</td>
                                        </tr>
                                        <tr className="summary-total">
                                            <td>Total:</td>
                                            <td> ₹ {ob.reduce((x, ob) => ob.product.prod_price * ob.qty + x, 0)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link to="/" className="btn btn-outline-primary-2 btn-order btn-block">PROCEED TO CHECKOUT</Link>
                            </div>

                            <Link to="/" className="btn btn-outline-primary-2 btn-order btn-block mb-3"><span>CONTINUE SHOPPING</span><i className="icon-refresh"></i></Link>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </>
}