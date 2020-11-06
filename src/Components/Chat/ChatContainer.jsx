import React, {useEffect, useState} from 'react'
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";

const ChatContainer = (props) => {

    const {chatsList} = props


    const {roomId} = useParams()

    const [roomName, setRoomName] = useState('')

    useEffect(()=>{
        setRoomName(chatsList.find(room => roomId === room.id).data.name)
    },[roomId])

    return (
        <div className='chat'>
            <ChatHeader roomName={roomName}/>
            <ChatBody/>
            <ChatFooter/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        chatsList: state.chatsReducer.chatsList
    }
}
const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)