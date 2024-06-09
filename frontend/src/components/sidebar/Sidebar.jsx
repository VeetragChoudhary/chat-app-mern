import "./Sidebar.css"
import UserInfo from "./userInfo/UserInfo"
import ChatList from "./chatList/ChatList"

const Sidebar = () => {
    return (
        <div className="list">
            <UserInfo />
            <ChatList />
        </div>
    )
}

export default Sidebar
