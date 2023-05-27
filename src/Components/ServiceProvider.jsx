import React, { createContext, useEffect, useState } from 'react'
export const StateContext = createContext()

const ServiceProvider = ({ children }) => {
    const [active, setActive] = useState(0)
    const [progress, setProgress] = useState(55);
    const [time, setTime] = useState(18);
    const [change, setChange] = useState(false)

    const [workTime, setWorkTime] = useState(25 * 60)
    const [shortBreak, setShortBreak] = useState(5 * 60)
    const [longBreak, setLongBreak] = useState(30 * 60)

    const [init, setinit] = useState(0)

    useEffect(() => {
        switch (active) {
            case 0:
                setTime(workTime)
                setinit(workTime)
                break

            case 1:
                setTime(shortBreak)
                setinit(shortBreak)
                break

            case 2:
                setTime(longBreak)
                setinit(longBreak)
                break

            default:
                break
        }
    }, [active, workTime, shortBreak, longBreak])


    return (
        <StateContext.Provider value={{ active, setActive, progress, setProgress, time, setTime, change, setChange, init, setinit, workTime, setWorkTime, shortBreak, setShortBreak, longBreak, setLongBreak }}>
            {children}
        </StateContext.Provider>
    )
}

export default ServiceProvider