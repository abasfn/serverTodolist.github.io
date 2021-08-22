import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import { data } from './reduser';
import { loading } from './reduser/loading';
import { modalReduser } from './reduser/modaldelet';
import { todolistreduser } from './reduser/todolist';

const WrapperApp = () => {
    const rotReduser = () => {
        const mindlever = applyMiddleware(thunk);
        const routreduser = combineReducers({
            data: data,
            loading: loading,
            modalReduser:modalReduser,
            todolistreduser:todolistreduser
        })
        const store = createStore(routreduser, mindlever)
        return store
    }
    return (
        <React.StrictMode>
            <Provider store={rotReduser()}>
                <App />
            </Provider>
        </React.StrictMode>
    );
};

export default WrapperApp;