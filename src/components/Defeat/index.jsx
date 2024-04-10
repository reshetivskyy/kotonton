import defeatImg from "../../img/durov/defeat.png";

const Defeat = ({ score, highScore, handlePlayAgain }) => {
    return (
        <>
            <p className="title">defeat</p>
            <p className="score">{score}</p>
            <img src={defeatImg} alt="durov" className="defeatimg" />
            <p className="high-score">high score: {highScore}</p>
            <button className={"button active"} onClick={handlePlayAgain}>
                try again
            </button>
        </>
    );
};

export default Defeat;
