import React , {useState} from 'react'
import './Auth.css'
import icon from '../../assets/icon.svg'
import AboutAuth from './AboutAuth'

const Auth = () => {

  const [isSignup, setIsSignup] = useState(false)

  const handleSwitch = () => {
    setIsSignup(!isSignup)

  }

  return (
    <section className='auth-section'>
      {isSignup && <AboutAuth />}
      <div className='auth-container-2'>
        {!isSignup && <img src={icon} width='80' alt='stack overflow' className='login-logo'/>}

          <form>
           {isSignup && 
              <label htmlFor='name'>
                <h4>Display Name</h4>
                <input type='text' name='name' id='name'  />
              </label>
            }
        
           
          <label htmlFor='email'>
            <h4>Email</h4>
            <input type="email" name='name' id='email'  />
          </label>
          <label htmlFor='password'>
            <div  style={{display:"flex" , justifyContent:"space-between"}}>
            <h4>Password</h4>
           {!isSignup && <p  style={{color:"blue" , fontSize:"13px"}} className='forgot'>forgot password?</p>}
            </div>
            <input type="password" name='password' id='password'   />
            {isSignup && <p style={{color:"#666767" , fontSize:"13px"}}>password must contain at least 8<br/> characters ,including atleast 1 letter and 1 <br/>number.</p>}
          </label>
          
            {isSignup && 
              <label htmlFor='check'>
                <input type="checkbox" id='check' />
                <p style={{ fontSize:"13px"}}>opt-in to receive occasionnal<br/> product updates user research invitations company announcements, and digests.</p>
              </label>
            }
              
          <button type='submit' className='auth-btn'>{isSignup ? "Signup" : "login"}</button>
          
          {isSignup  &&
             <p style={{color:"#666767" , fontSize:"13px"}}>
              By clicking "Sign up" , you agree to our 
              <span style={{color:"blue"}}> terms of<br/> service </span>,
              <span style={{color:"blue"}}> privacy policy </span> and 
              <span style={{color:"blue"}}> cookie policy</span>
             </p>
          }
        </form>
        <p>
          {isSignup ? 'already have an account?' : "don't have an account"}
          <button type='button'className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? 'Login' : 'Signup'}</button>
        </p>
      </div>
    </section>
  )
}

export default Auth
