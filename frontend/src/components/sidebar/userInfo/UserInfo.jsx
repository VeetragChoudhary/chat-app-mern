import React, { useContext } from "react"
import "./UserInfo.css"
import useLogout from "../../../hooks/useLogout"
import { GlobalContext } from "../../../context/GlobalContext"

const UserInfo = () => {
    const { authUser } = useContext(GlobalContext)

    const { loading, logout } = useLogout()

    return (
        <div className="userInfo">
            <div className="user">
                <img src={authUser.profilePic} alt="" />
                <h2>{authUser.fullName}</h2>
            </div>

            <div className="icon">
                <img src="./logout.png" alt="" onClick={logout} />
            </div>
        </div>
    )
}

export default UserInfo
