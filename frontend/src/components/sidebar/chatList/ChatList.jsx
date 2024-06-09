import { useContext, useState } from "react"
import "./ChatList.css"
import useGetConversations from "../../../hooks/useGetConversations"
import { GlobalContext } from "../../../context/GlobalContext"
import { SocketContext } from "../../../context/SocketContext"

const ChatList = () => {
    const [addMode, setAddMode] = useState(false)

    const { loading, conversations } = useGetConversations()

    const { selectedConversation, setSelectedConversation } = useContext(GlobalContext)
    const {onlineUsers} = useContext(SocketContext)
    let isOnline = undefined;

    return (
        <div className="chatList">
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt="" />
                    <input type="text" placeholder="Search" />
                </div>
                <img
                    src={addMode ? "./minus.png" : "./plus.png"}
                    alt=""
                    className="add"
                    onClick={() => setAddMode((prev) => !prev)}
                />
            </div>

            {conversations?.map((conversation) => {
                return (
                    <div key={conversation._id}>
                        {/* { isOnline = onlineUsers?.includes(conversation._id)} */}

                        <div
                            className="item"
                            key={conversation._id}
                            onClick={() => setSelectedConversation(conversation)}
                        >
                            <img src={conversation.profilePic} alt="" />
                            <div className="texts">
                                <span>{conversation.fullName}</span>
                                <p>{isOnline ? "online" : ""}</p>
                            </div>
                        
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ChatList
