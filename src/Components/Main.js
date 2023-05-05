import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { addItem } from '../reduxdata.js/CartSlice'
import { addWishItem, removeWishItem } from '../reduxdata.js/WishlistSlice';
import './main.css';
import { combineReducers } from '@reduxjs/toolkit';
export default function Main() {
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var masterob = useSelector(state => state.masterData.value);
    var cart = useSelector(state => state.cartData.value)
    var wish = useSelector(state => state.wishData.value)
    var userInfo = useSelector(state => state.Userdata.value)
    var ob = masterob.Product
    var cate = masterob.Category
    console.log(cate)
    var brand = masterob.Brand
    const add = (obj) => {
        if (userInfo.isLogin) {
            dispatch(addItem(obj))
        } else {
            navigate('/login')
        }
    }
    const addWish = (obb) => {
        if (userInfo.isLogin) {
            dispatch(addWishItem(obb))
        } else {
            navigate('/login')
        }
    }
    const removeWish = (obb) => {
        dispatch(removeWishItem(obb._id))
    }
    useEffect(() => { window.owlCarousels() }, [])
    return <>
        <div className="header-bottom sticky-header">
            <div className="container">
                <div className="header-left"></div>
                <div className="header-center">
                    <nav className="main-nav">
                        <ul className="menu sf-arrows">
                            <li className="megamenu-container active">
                                <a className="sf-with-ul">Home</a>
                            </li>
                            <li>
                                <a className="sf-with-ul">Category</a>
                                <div className="megamenu megamenu-sm">
                                    <div className="row no-gutters">
                                        <div className="col-md-6">
                                            <div className="menu-col">
                                                {cate.map(ob => {
                                                    return <div className="menu-title">{ob.cate_name}</div>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className="sf-with-ul">Brand</a>

                                <div className="megamenu megamenu-sm">
                                    <div className="row no-gutters">
                                        <div className="col-md-6">
                                            <div className="menu-col">
                                                {brand.map(ob => {
                                                    return <div className="menu-title">{ob.brand_name}</div>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header-right">
                </div>
            </div>
        </div>
        <main className="main">
            <div className="intro-slider-container">
                <div className="owl-carousel owl-simple owl-light owl-nav-inside" data-toggle="owl" data-owl-options='{"nav": false}'>
                    <div className="intro-slide" style={{ backgroundImage: 'url(assets/images/demos/demo-2/slider/slide-1.jpg)' }}>
                        <div className="container intro-content">
                            <h3 className="intro-subtitle">Bedroom Furniture</h3>
                            <h1 className="intro-title">Find Comfort <br />That Suits You.</h1>

                            <a href="category.html" className="btn btn-primary">
                                <span>Shop Now</span>
                                <i className="icon-long-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                    <div className="intro-slide" style={{ backgroundImage: 'url(assets/images/demos/demo-2/slider/slide-2.jpg)' }}>
                        <div className="container intro-content">
                            <h3 className="intro-subtitle">Deals and Promotions</h3>
                            <h1 className="intro-title">Ypperlig <br />Coffee Table <br /><span className="text-primary"><sup>$</sup>49,99</span></h1>

                            <a href="category.html" className="btn btn-primary">
                                <span>Shop Now</span>
                                <i className="icon-long-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                    <div className="intro-slide" style={{ backgroundImage: 'url(assets/images/demos/demo-2/slider/slide-3.jpg)' }}>
                        <div className="container intro-content">
                            <h3 className="intro-subtitle">Living Room</h3>
                            <h1 className="intro-title">
                                Make Your Living Room <br />Work For You.<br />
                                <span className="text-primary">
                                    <sup className="text-white font-weight-light">from</sup><sup>$</sup>9,99
                                </span>
                            </h1>

                            <a href="category.html" className="btn btn-primary">
                                <span>Shop Now</span>
                                <i className="icon-long-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-6"></div>
            <div className="heading heading-center mb-3">
                <h2 className="title">Top Selling Products</h2>
            </div>

            <div className="tab-content">
                <div className="tab-pane p-0 fade show active">
                    <div className="products">
                        <div className="row justify-content-center">
                            {ob.map((obb) => {
                                const currentProduct = cart.find(prod =>prod.product._id == obb._id);
                                const currentWish = wish.find(prod => prod._id == obb._id)
                                return <div className="col-6 col-md-4 col-lg-3 col-xl-5col m-2 shadow">
                                    <div className="product product-11 text-center">
                                        <figure className="product-media">
                                            <img src={"data:image/png;base64," + obb.prod_image} alt='loading' className=" product-image" style={{ objectFit: "contain" }} />
                                            <div className="product-action-vertical">
                                                {currentWish == undefined ?
                                                    <button className="btn-product-icon btn-wishlist" onClick={() => addWish(obb)}><span>add to wishlist</span></button> : <button className="btn-product-icon btn-wishlist bg-danger" onClick={() => removeWish(obb)}><span>remove from wishlist</span></button>}
                                            </div>
                                        </figure>
                                        <div className="product-body">
                                            <h3 className="product-title"><a>{obb.prod_name}</a></h3>
                                            <div className="product-price">
                                                <span>₹ {obb.prod_price}</span>
                                            </div>
                                        </div>
                                        <div className="product-action">
                                            {currentProduct == undefined ? <button className="btn-product btn-cart" onClick={() => { add(obb) }}><span>add to cart</span></button> : <Link to='/carts' className='btn-product btn-cart'>Go to cart</Link>}
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <hr className="mt-1 mb-6" />
            </div>
        </main>
    </>
}