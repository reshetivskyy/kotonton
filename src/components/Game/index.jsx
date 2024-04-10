import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Item from "../Item";

import btc from "../../img/coins/02.png";
import eth from "../../img/coins/03.png";
import doge from "../../img/coins/04.png";
import usdt from "../../img/coins/05.png";
import xrp from "../../img/coins/06.png";
import ltc from "../../img/coins/07.png";
import not from "../../img/coins/08.png";
import ton from "../../img/coins/09.png";
import ape from "../../img/coins/11.png";
import sol from "../../img/coins/13.png";
import xmr from "../../img/coins/14.png";
import kot from "../../img/coins/kot.png";
import goldkot from "../../img/coins/goldkot.png";

const coins = [
    btc,
    eth,
    doge,
    usdt,
    xrp,
    ltc,
    not,
    ton,
    ape,
    sol,
    xmr,
    kot,
    goldkot,
];
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

const Game = ({ setScore, score, handleFinished, handleDefeat }) => {
    const [fallingCoins, setFallingCoins] = useState([]);
    const navigate = useNavigate();

    const fallStep = 5;
    const fallInterval = 20;
    const coinSize = 75;
    const spawnRate = 500;

    useEffect(() => {
        const intervalId = setInterval(() => {
            const randomCoin = coins[Math.floor(Math.random() * coins.length)];
            const newObject = {
                id: Date.now(),
                src: randomCoin,
                top: -coinSize,
                left: Math.random() * (windowWidth - coinSize - 25),
            };
            setFallingCoins((prevObjects) => [...prevObjects, newObject]);
        }, spawnRate);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const updateFallingCoins = () => {
            setFallingCoins((prevObjects) =>
                prevObjects.map((obj) => ({
                    ...obj,
                    top: obj.top + fallStep,
                }))
            );
        };

        const removeOffScreenCoins = () => {
            setFallingCoins((prevObjects) =>
                prevObjects.filter((obj) => obj.top <= windowHeight)
            );
        };

        const checkGameOver = () => {
            setFallingCoins((prevObjects) => {
                const fallKot = prevObjects.find(
                    (obj) => obj.src === kot && obj.top >= windowHeight
                );
                if (fallKot) handleDefeat();
                return prevObjects;
            });
        };

        const updateInterval = setInterval(() => {
            updateFallingCoins();
            checkGameOver();
            removeOffScreenCoins();
        }, fallInterval);

        return () => clearInterval(updateInterval);
    }, [navigate, score, handleDefeat]);

    const handleCoinClick = (id) => {
        setFallingCoins((prevObjects) => {
            const updatedObjects = prevObjects.filter((obj) => obj.id !== id);
            const clickedCoin = prevObjects.find((obj) => obj.id === id);
            if (clickedCoin && clickedCoin.src === kot) {
                setScore((prevScore) => prevScore + 1);
            } else if (clickedCoin && clickedCoin.src === goldkot) {
                setScore((prevScore) => prevScore + 5);
            } else {
                handleDefeat();
            }
            return updatedObjects;
        });
    };

    return (
        <>
            <p className="title">game</p>
            <p className="score">{score}</p>
            {fallingCoins.map(({ id, src, top, left }) => (
                <Item
                    key={id}
                    src={src}
                    top={top}
                    left={left}
                    size={coinSize}
                    onClick={() => handleCoinClick(id)}
                />
            ))}
            <div className="finish">
                <button className="button active" onClick={handleFinished}>
                    finish
                </button>
            </div>
        </>
    );
};

export default Game;
