import React from "react";

type CounterType = {
    incrementCounter: () => void
    resetCounterHandler: () => void
    count: number
}

export const Counter: React.FC<CounterType> = (props) => {

    return (

        <div className='counter'>
            <h1 className={props.count === 10 ? 'result2' : 'result'}>{props.count}</h1>
            <button className='incrementButton' disabled={props.count === 10} onClick={props.incrementCounter}>INCR
            </button>
            <button className='resetButton' disabled={props.count === 0} onClick={props.resetCounterHandler}>RESET
            </button>
        </div>

    )
}
