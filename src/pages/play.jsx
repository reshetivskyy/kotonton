import { useState } from "react";
import Game from "../components/Game";

import axios from "axios";

import Defeat from "../components/Defeat";
import Finished from "../components/Finish";

const Play = ({ chatId }) => {
    const [score, setScore] = useState(0);
    const [isPlay, setIsPlay] = useState(true);
    const [highScore, setHighScore] = useState();
    const [mode, setMode] = useState(false);

    const getHighScore = async () => {
        const data = await axios.post(
            "http://kotbotapi-5a61261d58d9.herokuapp.com/api/setScore",
            {
                chatId,
                score,
            },
            {
                "Content-Type": "application/json",
            }
        );
        setHighScore(data.data.best_score);
    };

    const handleFinished = () => {
        setMode("finished");
        getHighScore();
        setIsPlay(false);
    };

    const handleDefeat = () => {
        setMode("defeat");
        getHighScore();
        setIsPlay(false);
    };

    const handlePlayAgain = () => {
        setMode(false);
        setScore(0);
        setHighScore(0);
        setIsPlay(true);
    };

    return (
        <section>
            <div className="container">
                {isPlay ? (
                    <Game
                        score={score}
                        setScore={setScore}
                        handleFinished={handleFinished}
                        handleDefeat={handleDefeat}
                    />
                ) : (
                    <>
                        {mode === "defeat" ? (
                            <Defeat
                                score={score}
                                highScore={highScore}
                                handlePlayAgain={handlePlayAgain}
                            />
                        ) : mode === "finished" ? (
                            <Finished
                                score={score}
                                highScore={highScore}
                                handlePlayAgain={handlePlayAgain}
                            />
                        ) : (
                            ""
                        )}
                    </>
                )}
            </div>
        </section>
    );
};

export default Play;
