import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Login from "../pages/Login"
import Auth from "../pages/Auth"
import { RecoilRoot } from 'recoil';

function AppRouter() {
    return (
        <RecoilRoot>
            <Router>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/Auth/*" element={<Auth />} />
                </Routes>
            </Router>
        </RecoilRoot>
    );
}

export default AppRouter;