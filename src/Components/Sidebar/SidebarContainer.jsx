import React, {useEffect} from 'react'
import SidebarHeader from "./SidebarHeader";
import SidebarSearch from "./SidebarSearch";
import SidebarChatsList from "./SidebarChatsList";
import {addNewRoom, getChatsList} from "../../redux/chats-reducer";
import {connect} from "react-redux";

const SidebarContainer = (props) => {
    const {getChatsList, userPhoto, ...restProps} = props

    useEffect(()=>{
        getChatsList()
    }, [])

    return (
        <div className='sidebar'>
            <SidebarHeader userPhoto={userPhoto}/>
            <SidebarSearch/>
            <SidebarChatsList {...restProps}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        chatsList: state.chatsReducer.chatsList,
        userPhoto: state.authReducer.user.user.photoURL
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getChatsList(){
            dispatch(getChatsList())
        },
        addNewRoom(roomName){
            dispatch(addNewRoom(roomName))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer)