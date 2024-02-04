import React, { useState } from "react"
import Die from "./die"
import { nanoid } from "nanoid"
import { useNavigate } from 'react-router-dom'
import "./tenzies"
import Result from "./result"


function Tenzies() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
   
    const [count,setcount]=useState(0)
    const navigate = useNavigate();


    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(null);
    const [timetaken, settimetaken] = useState(null);
    const [currtime,setcurrtime]=useState(new Date())

    function goback() 
    {
    navigate("/body")
    }

  
    function updateTime() {
       const now = new Date();
       setcurrtime(now)
    }

    setInterval(updateTime,1000)


   


    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
       
        if(allHeld &&allSameValue) 
        {
        
            setTenzies(true)
            setEndTime(new Date());
            alert("game is over!")
           
        }
     
    }, [dice])

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            })
        }
        return newDice
    }

    function rollDice() {
        setcount(count+1)
        //false
        
        if (!tenzies) 
        {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ?
                    die :
                    {
                        value: Math.ceil(Math.random() * 6),
                        isHeld: false,
                        id: nanoid()

                    }

            }))
        }
        
        //new game click
        else 
        {
            setEndTime(new Date());
            setTenzies(false)
            setDice(allNewDice())

            clearInterval(updateTime);
           
            const timeTaken = (endTime - startTime) / 1000;
            settimetaken(timeTaken)

            console.log(timeTaken)
            setStartTime(new Date());
            setcount(0)

        }
    }

    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ?
                { ...die, isHeld: !die.isHeld } :
                die
        }))
    }

    const diceElements = dice.map(die => (
        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
        />
    ))

    return (
        <main>
           
             <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same.
                Click each die to freeze it at its current value between rolls.</p>
            <div className="button-container">
                <button className="round-button">
                    {Math.floor((currtime - startTime) / 1000)}s
                </button>
            </div>


            <div className="dice-container">
                {diceElements}
            </div>
           
            <button className="roll-dice" onClick={rollDice} >
                {tenzies ? "New Game" : "Roll"}
            </button>
            <button className='goback' onClick={goback}>Go back -></button>
        </main>
    )
}
export default Tenzies;