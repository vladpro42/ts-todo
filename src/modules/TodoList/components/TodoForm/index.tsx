import { useState } from "react"
import { Todo } from "../.."
import style from "../../index.module.css"

type TodoFormProps = {
    addTodo: (e: React.MouseEvent<HTMLInputElement>, task: Todo) => void
}

export const TodoForm = ({ addTodo }: TodoFormProps) => {

    const [todo, setTodo] = useState("")

    const task: Todo = {
        id: Date.now(),
        todo,
        compleat: false,
    }

    return <form className={style.form}>
        <label className={style.label}>
            <input className={style.input_todo} type="text"
                value={todo}
                onChange={e => setTodo(e.target.value)}
            />
            <input className={style.form_submit} type="submit" onClick={e => addTodo(e, task)} />
        </label>
    </form>
}
