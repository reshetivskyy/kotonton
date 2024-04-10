import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useInitData } from "@vkruglikov/react-telegram-web-app";

import Home from "./pages/home";
import Play from "./pages/play";
import Rules from "./pages/rules";
import LeaderBoard from "./pages/leaderboard";

import "./style.css";

function App() {
    const [initDataUnsafe] = useInitData();
    const chatId = initDataUnsafe.user.id;

    return (
        <div className="App" style={{ position: "relative", height: "100vh" }}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/game" element={<Play chatId={chatId} />} />
                    <Route path="/rules" element={<Rules />} />
                    <Route
                        path="/leaderboard"
                        element={<LeaderBoard chatId={chatId} />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
