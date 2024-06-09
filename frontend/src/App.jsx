import { useContext } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import { GlobalContext } from "./context/GlobalContext"
import { Toaster } from "react-hot-toast"

function App() {
    const { authUser } = useContext(GlobalContext)

    return (
        <div className="container">
            <Routes>
                <Route
                    path="/"
                    element={authUser ? <Home /> : <Navigate to={"/login"} />}
                />
                <Route
                    path="/login"
                    element={authUser ? <Navigate to="/" /> : <Login />}
                />
                <Route
                    path="/signup"
                    element={authUser ? <Navigate to="/" /> : <Signup />}
                />
            </Routes>
            <Toaster />
        </div>
    )
}

export default App
