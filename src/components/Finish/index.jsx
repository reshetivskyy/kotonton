import finishedImg from "../../img/durov/finished.png";

const Finished = ({ handlePlayAgain, score, highScore }) => {
    return (
        <>
            <p className="title">finished</p>
            <p className="score">{score}</p>
            <img src={finishedImg} alt="durov" className="finishedimg" />
            <p className="high-score">high score: {highScore}</p>
            <button className={"button active"} onClick={handlePlayAgain}>
                try again
            </button>
        </>
    );
};

export default Finished;
