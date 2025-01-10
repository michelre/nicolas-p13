import { Link, Outlet } from "react-router"
import './layout.css'
import ArgentBankLogo from '../../assets/img/argentBankLogo.png'

const Layout = () => {
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
                <a className="main-nav-item" href="./sign-in.html">
                <i className="fa fa-user-circle"></i>
                Sign In
                </a>
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