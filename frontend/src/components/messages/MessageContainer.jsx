import { useContext, useEffect, useRef, useState } from "react"
import "./MessageContainer.css"
import EmojiPicker from "emoji-picker-react"
import useSendMessage from "../../hooks/useSendMessage"
import { GlobalContext } from "../../context/GlobalContext"
import Message from "./message/Message"
import toast from "react-hot-toast"
import useGetMessages from "../../hooks/useGetMessages"

const MessageContainer = () => {
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState("")

    const { selectedConversation, messages, setMessages } =
        useContext(GlobalContext)

    const { loading, sendMessage } = useSendMessage()

    useGetMessages()

    const handleEmoji = (e) => {
        setMessage((prev) => prev + e.emoji)
        setOpen(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!message) return

        sendMessage(message)
    }

    return (
        <div className={!selectedConversation ? "chat-1" : "chat-2"}>

            {!selectedConversation ? (<NoChatSelected />) : (
                <>
                    <div className="top">
                        <div className="user">
                            <img
                                src={selectedConversation?.profilePic}
                                alt=""
                            />
                            <div className="texts">
                                <span>{selectedConversation?.fullName}</span>
                            </div>
                        </div>

                        <div className="icons">
                            <img src="./phone.png" alt="" />
                            <img src="./video.png" alt="" />
                            <img src="./info.png" alt="" />
                        </div>
                    </div>

                    <div className="messages">
                        {messages.length > 0 &&
                            messages.map((message, index) => (
                                <div key={index}>
                                    
                                        <Message message={message} />
                                    
                                </div>
                            ))
                        }
                    </div>

                    <div className="bottom">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />

                        <div className="emoji">
                            <img
                                src="./emoji.png"
                                alt=""
                                onClick={() => setOpen((prev) => !prev)}
                            />

                            <div className="picker">
                                <EmojiPicker
                                    open={open}
                                    onEmojiClick={handleEmoji}
                                />
                            </div>
                        </div>

                        <button className="sendButton" onClick={handleSubmit}>
                            Send
                        </button>
                    </div>
                </>
            )}

        </div>
    )
}

export default MessageContainer

const NoChatSelected = () => {
    const { authUser } = useContext(GlobalContext)
    return (
        <div className="no-chat">
            <p>Welcome 👋 {authUser.fullName} </p>
            <p>Select a chat to start messaging</p>
            <img src="./message.png" alt="" />
        </div>
    )
}
