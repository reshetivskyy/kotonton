import { NavLink } from "react-router-dom";

import kots from "../img/rules/kots.png";
import tokens from "../img/rules/tokens.png";
import medalions from "../img/rules/medalions.png";

const rules = () => {
    return (
        <section>
            <div className="container">
                <p className="title">rules</p>
                <div className="rules">
                    <div className="rules__item">
                        <img src={kots} alt="kots" className="rules__img" />
                        <p className="rules__text text">
                            your goal is to click on $kot tokens
                        </p>
                    </div>
                    <div className="rules__item">
                        <img src={tokens} alt="kots" className="rules__img" />
                        <p className="rules__text text">
                            don't click on any other assets
                        </p>
                    </div>
                    <div className="rules__item">
                        <img
                            src={medalions}
                            alt="kots"
                            className="rules__img"
                        />
                        <p className="rules__text text">
                            get into top-100 to win $kot tokens
                        </p>
                    </div>
                </div>
                <NavLink to={"/game"} className={"button active"}>
                    start
                </NavLink>
            </div>
        </section>
    );
};

export default rules;
