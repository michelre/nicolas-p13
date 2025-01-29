import { useEffect, useState } from 'react';
import './signin.css'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { signinAction } from '../../actions';


const Signin = () => {

    const userToken = useSelector((state) => state.user.token)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
      if(userToken){
        localStorage.removeItem('token')
        if(remember){
          localStorage.setItem('token', userToken)
        }
        navigate('/user')
      }      
    }, [userToken])

    const onSignin = async (e) => {
      e.preventDefault();
      dispatch(signinAction({email: username, password}))         
    }

    return <main className="main bg-dark">
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label
          ><input type="text" id="username" onChange={e => setUsername(e.target.value)}/>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label
          ><input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" value={remember} onChange={e => setRemember(e.target.checked)} /><label htmlFor="remember-me"
            >Remember me</label>
        </div>
        <button className="sign-in-button" onClick={onSignin}>
          Sign In
        </button>
      </form>
    </section>
  </main>
}

export default Signin