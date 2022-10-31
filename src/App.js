import React from 'react';
import Die from './components/Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

export default function App(){
    
    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const[rollNum, setRollNum] = React.useState(0)
    const [time, setTime]= React.useState(0)
    const [start, setStart]= React.useState(false)


    
    React.useEffect(()=>{
        const allKeep = dice.every(die=>die.isKeep)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die=>die.value===firstValue)
        if (allKeep&&allSameValue) {
            setTenzies(true)
            setStart(false)
            console.log("You won!");
        }
    }
    ,[dice])

    let interval


    
    // interval func main part
    React.useEffect(()=>{
        console.log(start)
        if(start===false){return}
        interval = setInterval(()=>{
        setTime(seconds=>seconds+1)
    },1000)
    console.log(time)

            return ()=>{
                console.log('done'+time)
            clearInterval(interval)
            }
    }, [start])


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
            setTime(0)
        }

        // if(rollNum===0){ const current = setInterval(()=>{
        //     setTime(seconds=>seconds+1)
        // }, 1000)
        // }
        if(rollNum===0){ setStart(true)}

    // if(rollNum===1&&start===true){
    //     interval = setInterval(()=>{
    //     setTime(seconds=>seconds+1)
    // },1000)}


        setDice(prevState=>prevState.map(die=>die.isKeep?die:newDie()))
        countRollNum()
    }

    function randomNum(){
        return Math.ceil(Math.random()*6)
    }

    function changeKeep(e, id){
        setDice(prevState=>prevState.map(die=>die.id===id?{...die, isKeep:!die.isKeep}:die))

        // if(start===false){setStart(true)}
    }

    function countRollNum(){
        setRollNum(prevState=>prevState+1)
    }

    function allReset(){
        setDice(allNewDice)
        setTenzies(false)
        setRollNum(0)
        setTime(0)
    }

    let currentTime = time


    const dices = dice.map(die=><Die changeKeep={changeKeep} key={die.id} value={die.value} id={die.id} isKeep={die.isKeep}/>)

    return(
        <div className="app">
            {tenzies&&<Confetti />}
           <h3> Your time is :{currentTime}</h3>
                <h3 className='nor'>Number of Rolls: {rollNum}</h3>
            <div className="container">
                {dices}
            </div>
                <button onClick={rollDice} className='button'>{tenzies?'Start New Game':'Roll Dice'}</button>
                <button onClick={allReset}>Reset</button>
        </div>
    )
}