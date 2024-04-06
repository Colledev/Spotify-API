import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Player from "../components/Player";

const Home = () => {
    return (
        

        <div className="bg-neutral-800 h-screen">
            <Header />
            <Sidebar />
            <Player />
        </div>
    );
};

export default Home;
