import { ToDolistType } from "../model/todolistmodel"

export const addlist = (item: ToDolistType) => {
    return {
        type: 'ADDLIST',
        payload: item
    }
}
export const removelist = (item: ToDolistType) => {
    return {
        type: 'REMOVELIST',
        payload: item
    }
}
export const onchangechekboxs = (item: number) => {
    return {
        type: 'ONCHANGCHKBOXS',
        payload: item
    }
}
export const editModal = (item: boolean) => {
    return {
        type: 'EDITMODAL',
        payload: item
    }
}
export const ItemToDoList = (item: string,index:number) => {
    return {
        type: 'ITEMTODOLIST',
        payload: [item,index]
    }

}
export const editItem = (title: string,item:number) => {
    return {
        type: 'EditItem',
        payload: [title,item]
    }
}
