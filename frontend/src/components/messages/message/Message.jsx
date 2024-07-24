import { useContext, useEffect, useRef } from "react"
import "./Message.css"
import { GlobalContext } from "../../../context/GlobalContext"
import useListenMessages from "../../../hooks/useListenMessages"
import timeAgo  from "../../../utils/extractTime"

const Message = ({ message }) => {
    const endRef = useRef(null)

    const {authUser, selectedConversation} = useContext(GlobalContext)
    
    useListenMessages()

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" })
    })

    const myMessage = message.senderId === authUser._id

    return (
        <div className="center">
        

            <div className={myMessage ? "message own" : "message"}>
                {/* <img src={selectedConversation.profilePic} alt="" /> */}
                <div className="texts">
                    {/* <img src="./photo.jpg" alt="" /> */}
                    <p>{message.message}</p>
                    <span>{timeAgo(message.createdAt)}</span>
                </div>
            </div>

            <div ref={endRef}></div>
        </div>
    )
}

export default Message
