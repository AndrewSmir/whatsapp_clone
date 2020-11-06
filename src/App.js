import React, {useState} from 'react'
import SidebarContainer from "./Components/Sidebar/SidebarContainer";
import ChatContainer from "./Components/Chat/ChatContainer";
import {Redirect, Route, BrowserRouter} from "react-router-dom";
import Auth from "./Components/Auth/AuthContainer";
import {connect} from "react-redux";


function App(props) {

    const {user} = props

    return (
        <BrowserRouter>
            <div className="App">
                {!user ? (
                    <>
                        <Auth/>
                        <Redirect to='/'/>
                    </>
                ) : (
                    <div className="wrapper">
                        <Route path='/' render={() => <SidebarContainer/>}/>
                        <Route exact path='/room/:roomId' render={() => <ChatContainer/>}/>
                    </div>

                )}
            </div>
        </BrowserRouter>
    );
}

const mapStateToProps = state => {
    return {
        user: state.authReducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
