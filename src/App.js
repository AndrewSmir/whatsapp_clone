import React, {useState} from 'react'
import SidebarContainer from "./Components/Sidebar/SidebarContainer";
import ChatContainer from "./Components/Chat/ChatContainer";
import {Provider} from "react-redux";
import store from "./redux/store";
import {Route, BrowserRouter} from "react-router-dom";
import Auth from "./Components/Auth/Auth";

function App() {

    const [user, setUser] = useState(null)



    return (
        <div className="App">
            {!user ? (
                <Auth/>
            ) : (
                <Provider store={store}>
                    <BrowserRouter>
                        <div className="wrapper">
                            <Route path='/' render={() => <SidebarContainer/>}/>
                            <Route exact path='/room/:roomId' render={() => <ChatContainer/>}/>
                        </div>
                    </BrowserRouter>
                </Provider>
            )}
        </div>
    );
}

export default App;
