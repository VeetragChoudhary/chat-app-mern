import {Server} from 'socket.io'
import http from "http"
import express from "express"

const app = express()

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["POST", "GET"],
    }
})

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId]
}

const userSocketMap = {} // {useId: socketId}

io.on("connection", (socket) => {
    console.log("a new user conneted", socket.id)

    const userId = socket.handshake.query.userId
    if(userId != "undefined") userSocketMap[userId] = socket.id

    // io.emit used to send events to all the connected clients 
    io.emit("getOnlineUsers", Object.keys(userSocketMap))


    // socket.on is used to listen to the events. can be used both on client and server side    
    socket.on("disconnet", () => {
        console.log("use disconneted", socket.id)
        delete userSocketMap[userId]
        io.emit("getOnlineUsers", Object.keys(userSocketMap))
    })
})

export {app, io, server}