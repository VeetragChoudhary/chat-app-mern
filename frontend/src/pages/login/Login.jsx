import React, { useState } from "react"
import "./Login.css"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin"

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {loading, login}= useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(username, password)
    }

    return (
        <div className="login">
            <div className="items">
                <h1>
                    Login <span>ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="veetrag" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="123456"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Link to="/signup">Don't have an account?</Link>
                    <button>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login
