import React, { useState } from 'react'

function Home() {
    const [count, setCount] = useState(10)
    return (
        <div>
            <h2>This component form Home page </h2>
            <p>the value of Counter{count}</p>
            <button onClick={() => setCount(count + 1)}>Increase by one</button>
        </div>
    )
}

export default Home