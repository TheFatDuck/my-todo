import {createStore, Reducer} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

const configureStore = (reducer: Reducer) => {
    return createStore(reducer, composeWithDevTools);
}

export default configureStore;