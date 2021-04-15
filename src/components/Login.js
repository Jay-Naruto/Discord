import { Button } from '@material-ui/core'
import React from 'react'
import { auth,provider } from '../firebase'
import "../Login.css"

/**
* @author
* @function Login
**/

const Login = (props) => {
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .catch(e=>{alert(e.message)})

    }
  return(
    <div className="login" >
        <div className="login__logo" >
        <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png"
        
        />
        </div>
        <Button onClick={signIn} >Sign in</Button>
    </div>
   )

 }

export default Login