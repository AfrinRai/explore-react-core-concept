import { useState } from "react"

export default function Counter (){
    const [count, setCount] = useState(0)

    const handleIncrease = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleDecrease = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    return (
        <div style={{border: 'solid 5px blue', margin: '10px', paddingBottom: '25px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleIncrease} style={{backgroundColor:'lightBlue', marginRight: '20px'}}>Click to increase</button>
            <button onClick={handleDecrease} style={{backgroundColor:'lightBlue'}}>Click to decrease</button>
        </div>
    )
}