import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import chatsReducer from "./chats-reducer";
import messagesReducer from "./messages-reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(combineReducers({
        chatsReducer,
        messagesReducer
    }
), composeEnhancers(applyMiddleware(thunk)))

export default store
