import React from 'react'
import SidebarContainer from "./Components/Sidebar/SidebarContainer";
import ChatContainer from "./Components/Chat/ChatContainer";
import {Provider} from "react-redux";
import store from "./redux/store";
import {Route, BrowserRouter} from "react-router-dom";

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <div className="wrapper">
                        <Route path='/' render={() => <SidebarContainer/>}/>
                        <Route exact path='/room/:roomId' render={() => <ChatContainer/>}/>
                    </div>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
