import React from 'react'
import { Auth } from './Styled'
import Link from "next/link"

const SignIn = () => {
  return (
    <Auth>
            <h3>Sign In</h3>
            <p>Ready to get started? Sign in here.</p>

            <form action="">
                <input type="email" placeholder='youremail@email.com'/>
                <input type="password" placeholder='yourpassword'/>
                <div className="submit">Sign In</div>
                <p>
                    I don't have an account yet, <Link href="/sign-up">
                    Sign Up</Link>
                </p>
            </form>
    </Auth>
  )
}

export default SignIn