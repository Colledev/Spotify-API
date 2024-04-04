import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SongTrack from "../components/SongTrack";

const Home = () => {
    return (
        <div className="bg-neutral-800 h-screen">
            <Header />
            <Sidebar />
            <SongTrack />
        </div>
    );
};

export default Home;
