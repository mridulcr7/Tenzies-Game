import React from "react";

const Die = (props) => {
    const dieStyles = `cursor-pointer inline-block p-4 text-4xl border rounded-md mb-4 mx-2 ${props.isHeld ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'
        }`;

    return (
        <div onClick={props.holdDice} className={dieStyles}>
            <h2>{props.value}</h2>
        </div>
    );
};

export default Die;