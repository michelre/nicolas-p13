import { Link, Outlet, useNavigate } from "react-router"
import './layout.css'
import ArgentBankLogo from '../../assets/img/argentBankLogo.png'
import { useDispatch, useSelector } from "react-redux"
import { setToken } from "../../reducers"


const Layout = () => {


    const userFirstName = useSelector((state) => state.user.firstName)
    const userLastName = useSelector((state) => state.user.lastName)
    const userToken = useSelector((state) => state.user.token)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSignout = () => {
        localStorage.removeItem('token')
        dispatch(setToken({token: undefined}))
        navigate('/signin')
    }


    return <>
        <header>
        <nav className="main-nav">
            <Link className="main-nav-logo" to='/'>
                <img
                className="main-nav-logo-image"
                src={ArgentBankLogo}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>   

            {! userToken ?
                <div>
                    <Link to='/signin'>
                        <i className="fa fa-user-circle"></i>
                        Signin
                    </Link>                    
                </div>                 
            :
                <div>
                    <i className="fa fa-user-circle"></i>
                    {userFirstName} {userLastName}

                    <button className="signout-btn" onClick={onSignout}>
                        <i className="fa fa-sign-out"></i>
                        Signout
                    </button>  
                </div>                              
            }
            </div>            
            </nav>
        </header>
        <Outlet/>
        <footer className="footer">
            <p className="footer-text">Copyright 2020 Argent Bank</p>
        </footer>
    </>
}

export default Layout