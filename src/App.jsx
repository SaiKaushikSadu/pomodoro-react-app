import styled from "styled-components"
import Tags from "./Components/Tags/Tags"
import TimerClock from "./Components/Tags/Timer/TimerClock"

function App() {

  return (
    <>
    <Title>Pomodoro App</Title>
    <Tags></Tags>
    <TimerClock></TimerClock>
    </>
  )
}

export default App

const Title=styled.h1`
    font-size: 6rem;
    text-align: center;
    padding: 3rem 0;

`