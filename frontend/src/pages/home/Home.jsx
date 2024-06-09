import "./Home.css"
import Sidebar from "../../components/sidebar/Sidebar"
import MessageContainer from "../../components/messages/MessageContainer"

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <MessageContainer />
        </div>
    )
}

export default Home
