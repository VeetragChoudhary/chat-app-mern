import { createContext, useState } from "react"

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
    
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null)

    const [selectedConversation, setSelectedConversation] = useState(null)

    const [messages, setMessages] = useState([])

    return (
        <GlobalContext.Provider
            value={{
                authUser,
                setAuthUser,

                selectedConversation,
                setSelectedConversation,

                messages,
                setMessages,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
