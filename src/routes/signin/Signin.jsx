import { useState } from 'react';
import './signin.css'
import { signin } from '../../api';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setToken } from '../../reducers';


const Signin = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSignin = async (e) => {
      e.preventDefault();
      const data = await signin(username, password)
      localStorage.setItem('token', data.body.token)
      dispatch(setToken({token: data.body.token}))
      navigate('/user')

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
          <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
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