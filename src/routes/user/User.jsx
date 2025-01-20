import { useEffect, useState } from 'react'
import './user.css'
import { getUser, updateUser } from '../../api'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../reducers'

const User = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [edit, setEdit] = useState(false)
    
    const userFirstName = useSelector((state) => state.user.firstName)
    const userLastName = useSelector((state) => state.user.lastName)
    const dispatch = useDispatch()

    useEffect(() => {
      getUser(localStorage.getItem('token')).then((res) => {
        dispatch(setUser(res.body))
        setFirstName(res.body.firstName)
        setLastName(res.body.lastName)
      })
    }, [])

    const onSave = async (e) => {
      e.preventDefault()
      await updateUser({
        firstName, lastName
      }, localStorage.getItem('token'))
      dispatch(setUser({firstName, lastName}))
      setEdit(false)
    }

    const onCancel = () => {
      setFirstName(userFirstName)
      setLastName(userLastName)
      setEdit(false)
    }

  



    return <main className="main bg-dark">
    <div className="header">
      <h1>Welcome back</h1>
      {(!edit) ?  
        <div className="welcome-title">
          <div>{userFirstName} {userLastName}!</div>
          <button className="edit-button" onClick={() => setEdit(true)}>Edit Name</button>
        </div> : 
        <div >
          <form>
            <div className='welcome-title-edit'>
              <input type="text" value={firstName} name="firstName" onChange={e => setFirstName(e.target.value)} />
              <input type="text" value={lastName} name="lastName" onChange={e => setLastName(e.target.value)}/>
            </div>
            <div>
              <button className="edit-button btn-save" onClick={onSave}>Save</button>
              <button className="edit-button" onClick={onCancel}>Cancel</button>
            </div>            
          </form>          
        </div>   
      }                       
    </div>
    <h2 className="sr-only">Accounts</h2>
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
        <p className="account-amount">$2,082.79</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
        <p className="account-amount">$10,928.42</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
        <p className="account-amount">$184.30</p>
        <p className="account-amount-description">Current Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  </main>
}

export default User