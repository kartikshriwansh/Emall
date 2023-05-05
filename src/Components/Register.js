import { useRef, useState } from "react";
import urls from '../URL/Urls';
import RequestClassObject from '../URL/FetchDetail'
import { useDispatch, useSelector } from "react-redux";
import { Changelogin, addUserData } from '../reduxdata.js/UserSlice'
import { useNavigate } from "react-router-dom";
export default function Register() {
    const navigate=useNavigate()
    const nameBox = useRef();
    const emailBox = useRef();
    const phoneBox = useRef();
    const passBox = useRef();
    const [status, changeState] = useState(true);
    const dispatch = useDispatch();
    const registerUser = async (event) => {
        changeState(undefined)
        event.preventDefault();
        var register = await RequestClassObject.PostRequest(urls.USER_REGISTER, {
            name: nameBox.current.value,
            phone: phoneBox.current.value,
            email: emailBox.current.value,
            password: passBox.current.value,
        })
        console.log(register.data)
        if (register.data.status == false) {
            console.log(register.data.msg)
            changeState(false);
        }else{
            event.target.reset();
            navigate('/login')
        }
    }
    return <div className="container">
        <div className="page-header text-center" style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}>
            <div className="container">
                <h1 className="page-title">Register</h1>
            </div>
        </div>
        <form onSubmit={registerUser}>
            <div className="form-group">
                <label htmlFor="register-name" className="fw-bolder fs-2">Name *</label>
                <input type="text" className="form-control" ref={nameBox} name="register-name" required />
            </div>
            <div className="form-group">
                <label htmlFor="register-phone" className="fw-bolder fs-2">Phone</label>
                <input type="number" className="form-control" ref={phoneBox} name="register-phone" required />
            </div>
            <div className="form-group">
                <label htmlFor="register-email" className="fw-bolder fs-2">Your email address *</label>
                <input type="email" className="form-control" ref={emailBox} name="register-email" required />
            </div>

            <div className="form-group">
                <label htmlFor="register-password" className="fw-bolder fs-2">Password *</label>
                <input type="password" className="form-control" ref={passBox} name="register-password" required />
            </div>

            <div className="form-footer">
                <button type="submit" className="btn btn-outline-primary-2">
                    <span>SIGN UP</span>
                    <i className="icon-long-arrow-right"></i>
                </button>
                {status === undefined ? <div className="col-sm-2 text-center">
                    <div className="loader4"></div>
                </div> :
                    <div className="custom-control custom-checkbox mx-5">
                        <input type="checkbox" className="custom-control-input" id="register-policy" required />
                        <label className="custom-control-label" htmlFor="register-policy">I agree to the <a href="#">privacy policy</a> *</label>
                    </div>}
                <div className="custom-control custom-checkbox">
                    {status == false ? <h3 className="fw-bolder text-danger">User already exist</h3> : ""}
                </div>
            </div>
        </form>
    </div >
}