import { AnyAction } from "redux"
import { combindreduser } from "../model/combind"
import { loadingType } from "../model/statemodel"
const inishialState: loadingType = {
    data: false,
    loading: false
}
export const loading = (state = {}, action: AnyAction) => {
    if (action.type === 'LODING') {
        state = { ...action.payload }
    }
    return state
}
export const ReduserLoading = (state: combindreduser) => state.loading