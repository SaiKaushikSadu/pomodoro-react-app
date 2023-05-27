import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { StateContext } from '../ServiceProvider';

const Tags = () => {

    const{active,setActive}=useContext(StateContext);

    const tagHandler=(i)=>{
        setActive(i)
        // console.log(i)
    }

    return (
        <TagContainer>
            {["Work","Short Break","Long Break"].map((tag,i)=>(
                <Tag onClick={()=>tagHandler(i)}  active={active===i} key={i}>{tag}</Tag>
            ))}
        </TagContainer>
    )
}

export default Tags

const TagContainer=styled.div`
    background-color: #08002b;
    height: 5rem;
    width: 40rem;
    margin: 0 auto;
    border-radius: 5rem;
`

const Tag=styled.button`
    all: unset;
    height: 4rem;
    width: 12.7rem;
    background-color: #220045;
    border-radius: 5rem;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
    margin:0.5rem 0.3rem;

    ${({active})=>active && css`
        background-color: #ff8c00b6;
    `
    }

`