import React, { useCallback, useState } from 'react'
import Todos from './Todos';

const UseCallbackHook = () => {
    // const [count, setCount] = useState(0);
    // const [todos, setTodos] = useState([]);
    const [states, setStates] = useState({
        count: 0,
        todos: []
    })

    const increment = () => {
        setStates((c) => c.count + 1);
    };
    const addTodo = useCallback(() => {
        setStates((t) => ({...t, todos: [...t.todos, "New todo"]}));
    }, [todos]);

    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};

export default UseCallbackHook