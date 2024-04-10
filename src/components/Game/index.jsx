import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Item from "../Item";

import btc from "../../img/coins/0xbtc.svg";
import inch from "../../img/coins/1inch.svg";
import ada from "../../img/coins/ada.svg";
import ape from "../../img/coins/ape.svg";
import doge from "../../img/coins/doge.svg";
import ltc from "../../img/coins/ltc.svg";
import sand from "../../img/coins/sand.svg";
import usdc from "../../img/coins/usdc.svg";
import usdt from "../../img/coins/usdt.svg";
import xmr from "../../img/coins/xmr.svg";
import xrp from "../../img/coins/xrp.svg";
import kot from "../../img/coins/kot.png";

const coins = [
    btc,
    kot,
    inch,
    kot,
    ada,
    ape,
    doge,
    ltc,
    sand,
    kot,
    usdc,
    usdt,
    xmr,
    xrp,
];
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

const Game = ({ handlePlusScore, score, handleFinished, handleDefeat }) => {
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
    }, [fallStep, fallingCoins, navigate, score, handleDefeat]);

    const handleCoinClick = (id) => {
        setFallingCoins((prevObjects) => {
            const updatedObjects = prevObjects.filter((obj) => obj.id !== id);
            const clickedCoin = prevObjects.find((obj) => obj.id === id);
            if (clickedCoin && clickedCoin.src === kot) {
                handlePlusScore();
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
