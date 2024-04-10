import axios from "axios";
import { useEffect, useState } from "react";

const LeaderBoard = ({ chatId }) => {
    const [leaderBoard, setLeaderBoard] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.post(
                "http://127.0.0.1:5000/api/getScoreBoard",
                {
                    limit: 10,
                }
            );
            setLeaderBoard(data.data.leaderboard);
        };
        fetchData();
    }, []);

    return (
        <section>
            <div className="container">
                <p className="title">leaderboard</p>
                <p className="text">the best 100 users will get $kot airdrop</p>
                {leaderBoard && (
                    <div className="leaderboard">
                        {leaderBoard.map((user, i) => {
                            return (
                                <div className="leaderboard__item" key={i}>
                                    <p
                                        className={
                                            chatId === user.chat_id ? "red" : ""
                                        }
                                    >
                                        <span>{i + 1}.</span>
                                        <span className="leaderboard__address">
                                            {user.address}
                                        </span>
                                        <span>
                                            {user.game_score + user.referrals}
                                        </span>
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

export default LeaderBoard;
