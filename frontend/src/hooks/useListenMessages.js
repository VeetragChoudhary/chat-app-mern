import { useContext, useEffect } from "react";
import { SocketContext } from "../context/SocketContext";
import { GlobalContext } from "../context/GlobalContext";

// import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
	const { socket } = useContext(SocketContext);
	const { messages, setMessages } = useContext(GlobalContext);

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			// const sound = new Audio(notificationSound);
			// sound.play();
			setMessages([...messages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
};
export default useListenMessages;