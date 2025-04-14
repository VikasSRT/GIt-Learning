import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    const [todo, setTodo] = useState([])
    const [count, setCount] = useState(0)

    const expensiveCalc = (num) => {
        for (let i = 0; i < 1000000000; i++) {
            num += 1
        }
        console.log("done");
        return num
    }

    const calculation = useMemo(() => expensiveCalc(count), [count])

    const increment = () => {
        setCount((c) => c + 1);
    };

    const addTodo = () => {
        setTodo([...todo, "New Todo"])
    }


    return (
        <>
            <div className='bg-zinc-900 text-white w-full h-screen flex gap-3.5 justify-center'>
                <div className='flex flex-col items-center gap-1.5'>
                    <h1>Added Todos Will Show Here:</h1>
                    <ul className=''>
                        {
                            todo.map((todo, i) => (
                                <li key={i}>{todo}</li>
                            ))
                        }
                    </ul>

                    <button onClick={addTodo} className='bg-red-600 rounded-md p-1 w-[50%]'>Add Todo</button>
                </div>

                <div className='flex flex-col items-center gap-3.5'>
                    <h1>Count Will Show Here: {calculation}</h1>
                    <button onClick={increment} className='bg-cyan-500 rounded-md p-1 w-[50%]'>Count</button>
                </div>
            </div>
        </>
    )
}

export default UseMemoHook