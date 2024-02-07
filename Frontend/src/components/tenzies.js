// Tenzies Component
import React, { useState, useEffect } from "react";
import Die from "./die";
import { nanoid } from "nanoid";
import { useNavigate } from 'react-router-dom';
import "./style.css";
import Confetti from 'react-confetti'


function Tenzies() {

    const [dice, setDice] = useState(allNewDice());
    const [tenzies, setTenzies] = useState(false);
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(null);
    const [timetaken, setTimetaken] = useState(null);
    const [currtime, setCurrtime] = useState(new Date());
    const [celebrate, setCelebrate] = useState(false);


    useEffect(() => {

        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    // useEffect(() => {
    //     if (tenzies) {
    //         setEndTime(new Date());

    //     }
    // }, [tenzies, startTime, endTime]);

    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld);
        const firstValue = dice[0].value;
        const allSameValue = dice.every(die => die.value === firstValue);

        if (allHeld && allSameValue) {
            setTenzies(true);
            setEndTime(new Date());
            const timeTaken = (currtime - startTime) / 1000;
            setTimetaken(timeTaken);
            setCelebrate(true);
        }
    }, [dice]);


    function updateTime() {
        if (tenzies === false) {
            const now = new Date();
            setCurrtime(now);
        }


    }

    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid(),
            });
        }
        return newDice;
    }

    function rollDice() {
        setCount(count + 1);

        if (!tenzies) {
            setDice((oldDice) =>
                oldDice.map((die) =>
                    die.isHeld
                        ? die
                        : { value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid() }
                )
            );
        } else {
            setEndTime(new Date());
            setTenzies(false);
            setDice(allNewDice());
            setCelebrate(false)
            setStartTime(new Date())
        }
    }

    function holdDice(id) {
        setDice((oldDice) =>
            oldDice.map((die) =>
                die.id === id ? { ...die, isHeld: !die.isHeld } : die
            )
        );
    }

    const diceRows = Array.from({ length: 2 }, (_, rowIndex) => (
        <div key={rowIndex} className="flex justify-center space-x-4 mb-4">
            {dice.slice(rowIndex * 5, (rowIndex + 1) * 5).map((die) => (
                <Die
                    key={die.id}
                    value={die.value}
                    isHeld={die.isHeld}
                    holdDice={() => holdDice(die.id)}
                />
            ))}
        </div>
    ));

    return (
        <main
            className={`${tenzies
                ? `bg-[#512853]`
                : "bg-[#30727d]"
                } min-h-screen text-white p-8 flex flex-col items-center justify-center transition duration-500`}

        >
            {tenzies && <Confetti />}
            <h1 className="text-4xl font-bold mb-4">🎲 Tenzies 🎲</h1>
            <p className="mb-4 text-center">
                Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
            </p>
            <div className="mb-4 flex items-center">
                {!tenzies &&
                    <button className="bg-[#2ea8a8] text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue mr-4">
                        ⏳ Time: {Math.floor((currtime - startTime) / 1000)}s
                    </button>
                }
                {tenzies && (
                    <div className="text-green-500 font-bold">
                        🏆 Game Over! Time Taken: {timetaken}s
                    </div>
                )}
            </div>

            {diceRows}

            <div className="mb-4 flex space-x-4">
                <button
                    onClick={rollDice}
                    className={`${tenzies ? "bg-blue-600" : "bg-green-600"
                        } text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline-green mr-4`}
                >
                    {tenzies ? "New Game" : "Roll"}
                </button>
                <button
                    onClick={() => navigate("/body")}
                    className="bg-[#a8a348] text-white px-4 py-2 rounded-md hover:bg-[#88391e] focus:outline-none focus:shadow-outline-red"
                >
                    🔄 Go back
                </button>
            </div>
        </main>
    );
}

export default Tenzies;
