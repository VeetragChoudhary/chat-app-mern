import { useContext, useEffect, useRef } from "react"
import "./Message.css"
import { GlobalContext } from "../../../context/GlobalContext"

const Message = ({ message }) => {
    const endRef = useRef(null)

    const {authUser, selectedConversation} = useContext(GlobalContext)
    
    console.log("hello from message")

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
                    <span>{"1 min ago"}</span>
                </div>
            </div>

            <div ref={endRef}></div>
        </div>
    )
}

export default Message
