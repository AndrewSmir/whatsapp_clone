import React from 'react'
import SidebarContainer from "./Components/Sidebar/SidebarContainer";
import ChatContainer from "./Components/Chat/ChatContainer";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <div className="wrapper">
                    <SidebarContainer/>
                    <ChatContainer/>
                </div>
            </div>
        </Provider>
    );
}

export default App;
