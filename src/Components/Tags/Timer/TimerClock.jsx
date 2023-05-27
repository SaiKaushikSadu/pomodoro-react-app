import React from 'react'
import styled from 'styled-components'
import Circular from './CircularProgress/Circular'

const TimerClock = () => {
  return (
    <TimerContainer>
        <Circular></Circular>
    </TimerContainer>
  )
}

export default TimerClock

const TimerContainer=styled.div`
    /* background-color: white; */
    background: conic-gradient(#220045,#08002b 150deg,#220045);
    width: 35rem;
    height: 35rem;
    border-radius: 50%;
    margin: 5rem auto;
    display: grid;
    place-items:center;
    box-shadow: -50px -50px -50px rgba(158,158,158,0.2),50px -10px 100px rgba(0,0,0,0.5);
`