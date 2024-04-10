import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import tg from "../img/tg.png";
import twitter from "../img/twitter.png";

const Home = () => {
    return (
        <section>
            <div className="container">
                <img src={logo} alt="logo" />
                <p>$KOT on TON</p>
                <NavLink to="/game" className={"button active"}>
                    play
                </NavLink>
                <NavLink to="/leaderboard" className={"button"}>
                    leaderboard
                </NavLink>
                <NavLink to="/rules" className={"button"}>
                    rules
                </NavLink>
                <a
                    href="#!"
                    target="_blank"
                    className="button"
                    style={{ pointerEvents: "none" }}
                >
                    buy $kot
                </a>
                <div className="socials">
                    <a href="#!" target="_blank">
                        <img src={tg} alt="ico" />
                    </a>
                    <a href="#!" target="_blank">
                        <img src={twitter} alt="ico" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
