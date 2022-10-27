import React from 'react';
import Die from './components/Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

export default function App(){
    
    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const[rollNum, setRollNum] = React.useState(0)

    React.useEffect(()=>{
    const allKeep = dice.every(die=>die.isKeep)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die=>die.value===firstValue)
    if (allKeep&&allSameValue) {
        setTenzies(true)
        console.log("You won!");
    }
    }
    ,[dice])

    function newDie(){
       return {id:nanoid(), value:randomNum() , isKeep:false}
    }

    function allNewDice(){
        const news = []
        for (let i = 0; i < 10; i++) {
            news.push(newDie())
            
        }
        return news
    }

    function rollDice(){
        if(tenzies){
            setDice(allNewDice)
            setTenzies(false)
            setRollNum(-1)
        }
        setDice(prevState=>prevState.map(die=>die.isKeep?die:newDie()))
        countRollNum()
    }

    function randomNum(){
        return Math.ceil(Math.random()*6)
    }

    function changeKeep(e, id){
        setDice(prevState=>prevState.map(die=>die.id===id?{...die, isKeep:!die.isKeep}:die))
    }

    function countRollNum(){
        setRollNum(prevState=>prevState+1)
    }

    function allReset(){
        setDice(allNewDice)
        setTenzies(false)
        setRollNum(0)
    }

    const dices = dice.map(die=><Die changeKeep={changeKeep} key={die.id} value={die.value} id={die.id} isKeep={die.isKeep}/>)

    return(
        <div className="app">
            {tenzies&&<Confetti />}
                <h3 className='nor'>Number of Rolls: {rollNum}</h3>
            <div className="container">
                {dices}
            </div>
                <button onClick={rollDice} className='button'>{tenzies?'Start New Game':'Roll Dice'}</button>
                <button onClick={allReset}>Reset</button>
        </div>
    )
}