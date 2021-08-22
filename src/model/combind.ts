import { loadingType, ModalReduserType, state } from "./statemodel";
import { ToDolistType } from "./todolistmodel";

export type combindreduser = {
    data: state,
    loading: loadingType,
    modalReduser: ModalReduserType,
    todolistreduser: ToDolistType[]
}