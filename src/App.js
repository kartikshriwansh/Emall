import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Cart from './Components/Cart'
import WishList from './Components/Wishlist'
import { Route, Routes } from 'react-router-dom';
import { AddBrand, AddCategory, AddProduct } from './reduxdata.js/slicer';
import { useEffect } from 'react';
import RequestClassObject from './URL/FetchDetail'
import urls from './URL/Urls'
import { useDispatch } from 'react-redux';
import Login from './Components/Login';
import Register from './Components/Register';
function App() {
  var dispatch=useDispatch()
  var LoadAll = async() => {
    var cate=await  RequestClassObject.GetRequest(urls.LOAD_CATEGORY);
    dispatch(AddCategory(cate.data))
    
    var brand=await  RequestClassObject.GetRequest(urls.LOAD_BRAND);
    dispatch(AddBrand(brand.data))

    var prod=await  RequestClassObject.GetRequest(urls.LOAD_PRODUCT);
    dispatch(AddProduct(prod.data))
  }
  useEffect(() => {
    LoadAll()
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/carts' element={<Cart />}></Route>
        <Route path='/wishlist' element={<WishList />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}
export default App;