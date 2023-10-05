import React from "react"
import style from "./index.module.css"

interface TodoProps {
    id: number
    todo: string,
    compleat: boolean,
    removeTodo: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void,
    changeCompleat: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void,
}

export const Todo = ({ id, todo, compleat, removeTodo, changeCompleat }: TodoProps) => {
    return <li className={style.item}>
        {todo}
        <input className={style.submit} type="checkbox" checked={compleat} onChange={e => changeCompleat(e, id)} />
        <button className={style.button} onClick={e => removeTodo(e, id)}>delete</button>
    </li>
}