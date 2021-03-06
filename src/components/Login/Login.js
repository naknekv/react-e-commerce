import React, { useEffect } from 'react'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import useInputState from '../../hooks/useInputState'
import './Login.scss'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'

export default function Login() {
    const [email, setEmail] = useInputState("")
    const [password, setPassword] = useInputState("")
    
    useEffect(() => {
        return () => {
            setTimeout(() => {
                // whatever here
            }, 3000)
        }
    }, [])

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            await auth.signInWithEmailAndPassword(email, password)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="Login">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" name="email" value={email} handleChange={setEmail} required />
                <FormInput label="Password" type="password" name="password" value={password} handleChange={setPassword} required />
                <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    )
}
