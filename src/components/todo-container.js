import React, { useState } from 'react';

import AddTodo from './AddTodo';
import Todo from './Todo';


const TodoContainer = () => {
    const [tasks, setTasks] = useState([]);
    const addTodo = (task) => {
        tasks.push(task);
        setTasks([...tasks])

    }
    return (
        <section className="main std-width">
            <h1>My ToDo's</h1>
            <hr/>
            <div className="todo-container">
                {
                    tasks.map((task, index) => (
                        <Todo key={index} task={task} taskIndex={index} />
                    )
                    )
                }
            </div>

            <AddTodo addTodo={addTodo} />
        </section>
    )
}


export default TodoContainer;
