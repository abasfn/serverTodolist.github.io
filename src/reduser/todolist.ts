import { AnyAction } from "redux"
import { combindreduser } from "../model/combind"
import { ToDolistType } from "../model/todolistmodel"


export const todolistreduser = (state: ToDolistType[] = [], action: AnyAction) => {
    if (action.type === 'ADDLIST') {
        state = [...state, action.payload]
    }
    if (action.type === 'REMOVELIST') {
        state = state.filter(item => item !== action.payload);
        return [...state]
    }
    if (action.type === 'ONCHANGCHKBOXS') {
        state[action.payload].complete = !state[action.payload].complete
        return [...state]
    }
    if (action.type === 'EditItem') {
        state[action.payload[1]].title = action.payload[0]
        return [...state]
    }
    return [...state]
}
export const handelTodoList = (state: combindreduser) => state.todolistreduser