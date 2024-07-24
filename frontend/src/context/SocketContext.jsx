import { createContext, useContext, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import io from "socket.io-client";

export const SocketContext = createContext() 

export const SocketContextProvider = ({children}) => {
    
    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const {authUser} = useContext(GlobalContext)

    useEffect(() => {
        if(authUser) {
            const socket = io("https://veetrag-chat-app.onrender.com", {
                query: {userId: authUser._id}
            })
            setSocket(socket)

            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users)
            })
            
            // clean up function from performence reasons
            return () => socket.close()
        } else {
            if(socket) {
                socket.close()
                setSocket(null)
            }

        }
    }, [authUser])
    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    )
}