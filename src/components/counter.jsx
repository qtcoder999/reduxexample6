import React from 'react'

export default function Counter({ counter, increment, decrement }) {
    return (
        <div>
            <div> Hello I am Counter{counter}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}> Decrement</button>
        </div>
    )
}
