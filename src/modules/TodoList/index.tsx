import React, { useState } from "react"
import { Todo } from "./components/Todo"
import { TodoForm } from "./components/TodoForm"
import style from "./index.module.css"

export type Todo = {
    id: number,
    todo: string,
    compleat: boolean,
}

const inititalData: Todo[] = [
    {
        id: 1,
        todo: "learn English",
        compleat: true,
    },
    {
        id: 2,
        todo: "I am going to the gym",
        compleat: false,
    },
    {
        id: 3,
        todo: "add docker here",
        compleat: false,
    },
    {
        id: 4,
        todo: "create fullstack app",
        compleat: false,
    },
]



const TodoList = () => {

    const [todos, setTodos] = useState<Todo[]>(inititalData)

    const removeTodo = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        setTodos(prev => {
            return [...prev].filter((item) => {
                if (item.id !== id) {
                    return item
                }
            })

        })
    }

    const changeCompleat = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        setTodos(prev => {
            return [...prev].filter(item => {
                console.log(e.target.checked)
                if (item.id === id) {
                    item.compleat = e.target.checked
                    return item
                }
                return item
            })
        })
    }

    const addTodo = (e: React.MouseEvent<HTMLInputElement>, task: Todo) => {
        e.preventDefault()
        setTodos(prev => [...prev, task])
    }

    console.log(todos)


    return <ul className={style.list}>
        <TodoForm addTodo={addTodo} />
        {
            todos.map(todo => <Todo
                id={todo.id}
                key={todo.id}
                todo={todo.todo}
                compleat={todo.compleat}
                removeTodo={removeTodo}
                changeCompleat={changeCompleat}
            />)
        }
    </ul>
}

export default TodoList