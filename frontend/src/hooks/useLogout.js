import { useContext, useState } from "react"
import toast from "react-hot-toast"
import { GlobalContext } from "../context/GlobalContext"

const useLogout = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useContext(GlobalContext)

    const logout = async () => {
        setLoading(true)

        try {
            const res = await fetch("api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            })

            const data = await res.json()

            if (data.error) throw new Error(data.error)

            localStorage.removeItem("chat-user")
            setAuthUser(null)
        } catch (error) {
            toast.error(error)
        } finally {
            setLoading(false)
        }
    }

    return { loading, logout }
}

export default useLogout
