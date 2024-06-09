import React, { useState } from "react"
import "./Signup.css"
import useSignup from "../../hooks/useSignup"

const Signup = () => {
    
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "male",
	})

    const { loading, signup } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(inputs)
        await signup(inputs)
    }

    return (
        <div className="signup">
            <div className="items">
                <h1>
                    Sign Up <span>ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        value={inputs.fullName} 
                        onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                    />
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={inputs.username} 
                        onChange={(e) => setInputs({...inputs, username: e.target.value})}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={inputs.password} 
                        onChange={(e) => setInputs({...inputs, password: e.target.value})}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={inputs.confirmPassword} 
                        onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                    />


                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup

