import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";


function App() {
    const [count, setCount] = useState(0)

    const incrementCounter = () => {
        setCount(count + 1)
    };
    const resetCounterHandler = () => {
        setCount( 0)
    }

    return (
        <div className="App">
            <Counter
                count={count}
                incrementCounter={incrementCounter}
                resetCounterHandler={resetCounterHandler}
            />
        </div>
    );
}

export default App;
