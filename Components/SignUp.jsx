import React from 'react'
import { Auth } from './Styled'
import Link from "next/link"
import { details } from '../utilities/details'

const SignUp = () => {
  return (
    <Auth>
            <h3>Sign Up</h3>
            <p>Sign up and start making the most of {details.name}.</p>

            <form action="">
                <input type="text" placeholder='your name'/>
                <input type="email" placeholder='youremail@email.com'/>
                <input type="password" placeholder='yourpassword'/>
                <div className="submit">Sign In</div>
                <p>
                    I have an account already, <Link href="/sign-in">
                    Sign In</Link>
                </p>
            </form>
    </Auth>
  )
}

export default SignUp