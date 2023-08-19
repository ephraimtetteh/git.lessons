import React from 'react'
import './LogInSignUp.css'

export const LogInSignUp = () => {

  const [action,SetAction] = useState("Sign Up");

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="login"?<div></div>:   <div className="input">
          <img src="" alt="" />
          <input type="text" placeholder='Name'/>
        </div>}
     
        <div className="input">
          <img src="" alt="" />
          <input type="email" placeholder='Email ' />
        </div>
        <div className="input">
          <img src="" alt="" />
          <input type="password" placeholder='Password'/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here</span></div>}
      
      <div className="submit-container">
        <div className={action==="Login"?"submit grey":"submit"} onClick={()=>{SetAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit grey":""} onClick={()=>{SetAction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default LogInSignUp