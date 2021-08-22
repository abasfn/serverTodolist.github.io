import { AnyAction } from "redux"
import { combindreduser } from "../model/combind"
import { state } from "../model/statemodel"
const inishialState: state = {
    data: []
}
export const data = (state = inishialState, action: AnyAction) => {
    if (action.type === 'GETDATA') {
        state = { ...action.payload }
    }
    if (action.type === 'REMOVE') {
        state.data = state.data?.filter(item => item.title !== action.payload.title)
        return { ...state }
    }
    if (action.type === 'ADDLIST') {
        let obj = state.data.find(o => o.title === action.payload.title);
        if (obj?.title === action.payload.title) {
            alert('تکراری است')
            return { ...state }
        }
        if (action.payload.title==='') {
            alert('فیلد خالی است')
            return { ...state }
        }
        state.data = [action.payload, ...state.data]
        return { ...state }
    }
    if (action.type === 'SEARCH') {
        state.data = state.data?.filter(item => (item.title ?? '').search(action.payload) >= 0);
        return { ...state }
    }
    return state
}
export const reduserData = (state: combindreduser) => state.data