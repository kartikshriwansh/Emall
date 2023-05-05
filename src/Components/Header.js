import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { removeUser } from "../reduxdata.js/UserSlice"
export default function Header() {
    var dispatch=useDispatch()
    var cartLength = useSelector(state => state.cartData.value.length)
    var wishLength = useSelector(state => state.wishData.value.length)
    var userInfo = useSelector(state => state.Userdata.value)
    
    const logout=()=>{
        if(window.confirm("Are you sure "))
        dispatch(removeUser())
    }
    return <header className="header header-2 header-intro-clearance">
        <div className="header-middle">
            <div className="container">
                <div className="header-left">
                    <button className="mobile-menu-toggler">
                        <span className="sr-only">Toggle mobile menu</span>
                        <i className="icon-bars"></i>
                    </button>

                    <Link to="/" className="logo">
                        <h1 className="font-monospace Emall-gradient">EMall</h1>
                    </Link>
                </div>
                <div className="header-right">
                    {/* Login Registration section  */}
                    {!userInfo.isLogin ? <>
                        <div className="login">
                            <Link to='/login'>
                                <div className="icon"><i className="la la-sign-in"></i></div>
                                <p>Login</p>
                            </Link>
                        </div>
                        <div className="register">
                            <Link to='/Register'>
                                <div className="icon"><i className="la la-user-plus"></i></div>
                                <p>Register</p>
                            </Link>
                        </div>
                    </> : <>
                    <div className="register">
                        <Link onClick={logout} title="Log Out">
                            <div className="icon"><i className="la la-sign-out"></i></div>
                            <p>{userInfo.username}</p>
                        </Link>
                    </div>
                    <div className="account">
                        <Link to="/" title="My account">
                            <div className="icon"><i className="la la-user"></i></div>
                            <p>Account</p>
                        </Link>
                    </div>
                    </>
                    }
                    {/* Wishlist section */}
                    <div className="wishlist">
                        <Link to="/wishlist" title="Wishlist">
                            <div className="icon">
                                <i className="icon-heart-o"></i>
                                <span className="wishlist-count badge">{wishLength}</span>
                            </div>
                            <p>Wishlist</p>
                        </Link>
                    </div>
                    {/* Cart section  */}
                    <div className="dropdown cart-dropdown">
                        <Link to="/carts" className="dropdown-toggle">
                            <div className="icon">
                                <i className="la la-cart-plus"></i>
                                <span className="cart-count">{cartLength}</span>
                            </div>
                            <p>Cart</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
}