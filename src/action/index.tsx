import axios from "axios"
import { data } from "../model/statemodel";

export const getUser = () => {
    return async (dispach: any) => {
        dispach({
            type: 'LODING',
            payload: { data: false, loading: true }
        })
        const user = await axios.get('https://jsonplaceholder.typicode.com/todos');
        dispach({
            type: 'LODING',
            payload: { data: true, loading: false }
        })
        dispach({
            type: 'GETDATA',
            payload: user
        })
    }
}
export const remove = (item: data) => {
    return {
        type: 'REMOVE',
        payload: item
    }

}
export const deleteModal = (item: boolean) => {
    return {
        type: 'DELETEMODAL',
        payload: item
    }
}
export const Item = (item: data) => {
    return {
        type: 'ITEM',
        payload: item
    }

}
export const search = (item: String) => {
    return {
        type: 'SEARCH',
        payload: item
    }

}
export const addlist = (item: data) => {
    return {
        type: 'ADDLIST',
        payload: item
    }

}