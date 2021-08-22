import { MainToDolisttyep, ToDolistType } from "./todolistmodel"

export type state = {
    data: data[]
}
export type loadingType = {
    data: boolean
    loading: boolean
}
export type ModalReduserType = {
    deletmodal?: boolean
    editmodal?: boolean
    item: data
    itemtodolist:MainToDolisttyep
}
export type data = {
    completed?: boolean
    id?: number
    title?: string
    userId?: number
}