import React from 'react'

function Form() {



  return (
    <div>
        <form action="" style={{display:'flex',flexDirection:'column'}}>
            <label htmlFor="">Welcome Back</label><br/>
            <label htmlFor="">Sign In To Your Account</label>
            <label htmlFor="">Your Email</label>
            <input type="text"/>
            <label htmlFor="">Password</label>
            <input type="text" />
            <button>Continue</button>
            <label htmlFor="">Forgot Your Password</label>
        </form>
    </div>
  )
}

export default Form;