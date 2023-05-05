import { useRef, useState } from "react";
import urls from '../URL/Urls';
import RequestClassObject from '../URL/FetchDetail'
import { useDispatch, useSelector } from "react-redux";
import { Changelogin } from '../reduxdata.js/UserSlice'
import { useNavigate } from "react-router-dom";
import Input from "./Input";
const Login=()=>{
    const ob = useSelector(state => state.Userdata.value)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const emailBox = useRef();
    const passBox = useRef();
    const [status, changeState] = useState(true);
    const UserLogin = async (event) => {
        changeState(undefined)
        event.preventDefault();
        var login = await RequestClassObject.PostRequest(urls.USER_LOGIN, {
            email: emailBox.current.value,
            password: passBox.current.value,
        })
        if (login.data.status == false) {
            changeState(false)
        }
        else {
            dispatch(Changelogin({isLogin:true ,token: login.data.token, username: login.data.username }))
            navigate('/')
        }
    }
    return <>
        <div className="container">
            <div className="page-header text-center" style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}>
                <div className="container">
                    <h1 className="page-title">Login</h1>
                </div>
            </div>
            <form onSubmit={UserLogin}>
                <div className="form-group">
                    <label for="singin-email">Username or email address *</label>
                    <input type="text" className="form-control" ref={emailBox} name="singin-email" required />
                </div>
                {/* <!-- End .form-group --> */}
                <div className="form-group">
                    <label for="singin-password">Password *</label>
                    <input type="password" className="form-control" ref={passBox} name="singin-password" required />
                </div>
                {/* <!-- End .form-group -->*/}

                <div className="form-footer">
                    <button type="submit" className="btn btn-outline-primary-2">
                        <span>LOG IN</span>
                        <i className="icon-long-arrow-right"></i>
                    </button>
                    {status === undefined ? <div className="col-sm-2 text-center">
                        <div className="loader4"></div>
                    </div> :
                        <div className="custom-control custom-checkbox mx-5">
                            <input type="checkbox" className="custom-control-input" id="signin-remember" />
                            <label className="custom-control-label" for="signin-remember">Remember Me</label>
                        </div>}

                    <div className="custom-control custom-checkbox">
                        {status == false ? <h3 className="fw-bolder text-danger">User Doesn't exist</h3> : ""}
                    </div>
                    {/* <!-- End .custom-checkbox --> */}

                    <a href="#" className="forgot-link">Forgot Your Password?</a>
                </div>
                {/* <!-- End .form-footer --> */}
            </form>
        </div>
    </>
}

export default Login