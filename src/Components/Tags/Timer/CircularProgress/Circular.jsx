import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { StateContext } from '../../../ServiceProvider';
import Clock from './Clock/Clock';

const Circular = () => {

    const {progress,setProgress}=useContext(StateContext);
    const {time,setTime,init}=useContext(StateContext);

    useEffect(()=>{
        setProgress(time*100/init)
    },[setProgress,time])

  return (
    <>
    <OuterCircle progress={progress}>
        <InnerCircle>
            <Clock></Clock>
        </InnerCircle>
    </OuterCircle>
    </>
  )
}

export default Circular

const OuterCircle=styled.div`
    /* background-color: orange; */
    width: 25rem;
    height: 25rem;
    border-radius: 50%;
    display: grid;
    place-items:center;
    background: conic-gradient(#ff8c00 ${({progress})=>progress}%, transparent ${({progress})=>progress}%);
`

const InnerCircle=styled.div`
    background-color:#220045 ;
    width: 23rem;
    height: 23rem;
    border-radius: 50%;
    display: grid;
    place-items:center;
`

