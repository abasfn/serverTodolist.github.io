import { AnyAction } from "redux";
import { combindreduser } from "../model/combind";
const inishialStae = {
    deletmodal: false,
    editmodal: false,
    item: {},
    itemtodolist: {}
}
export const modalReduser = (state = inishialStae, action: AnyAction) => {
    if (action.type === 'DELETEMODAL') {
        state.deletmodal = action.payload;
        return { ...state }
    }
    if (action.type === 'ITEM') {
        state.item = { ...action.payload };
        return { ...state }
    }
    if (action.type === 'EDITMODAL') {
        state.editmodal = action.payload;
        return { ...state }
    }
    if (action.type === 'ITEMTODOLIST') {
        state.itemtodolist = { ...action.payload };
        return { ...state }
    }
    return state
}
export const modalDelete = (state: combindreduser) => state.modalReduser
