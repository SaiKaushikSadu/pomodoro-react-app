import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import { StateContext } from '../../../../ServiceProvider'

const Clock = () => {

    const{time,setTime}=useContext(StateContext)
    const{change,setChange}=useContext(StateContext)
    const{init}=useContext(StateContext)

    useEffect(()=>{
        if(change && time>0){
            const interval=setInterval(() => {
                setTime((time)=>time-1)
            }, 1000);
    
            return ()=>clearInterval(interval)
        }
    },[time,change])

    const startPause=()=>{
        setChange(!change)
    }

    const getTime=(time)=>{
        const min=Math.floor(time/60)
        const sec=time%60
        return `${min<10? "0"+min : min}:${sec<10? "0"+sec : sec}`
    }

    const resetToggle=()=>{
        setTime(init)
        setChange(false)
    }

  return (
    <ClockContainer>
        <TimerText>{getTime(time)}</TimerText>
        <Pause onClick={startPause}>{change ? "Pause" :"Start"}</Pause>
        {time===0 && <Reset onClick={resetToggle}>RESET</Reset>}
    </ClockContainer>
  )
}

export default Clock

const ClockContainer=styled.div`
    display: grid;
    place-items: center;
`

const TimerText=styled.h3`
    font-size: 5rem;
`

const Pause=styled.button`
    all: unset;
    text-align: center;
    font-size: 2.5rem;
    margin-top: 1rem;
    letter-spacing: 0.4rem;
    text-transform: uppercase;
`

const Reset=styled.button`
    all: unset;
    text-align: center;
    font-size: 2.5rem;
    margin-top: 1rem;
    letter-spacing: 0.4rem;
    text-transform: uppercase;
    color: red;
`
