import React, {useEffect, useState} from 'react'
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import db from "../../firebase";

const ChatContainer = (props) => {

    const {chatsList, userName} = props

    const [messages, setMessages] = useState([])

    const {roomId} = useParams()

    const [roomName, setRoomName] = useState('')

    useEffect(()=>{
        if (roomId) {
            setRoomName(chatsList.find(room => roomId === room.id).data.name)

            db.collection('rooms')
                .doc(roomId)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot(snapshot => setMessages(snapshot.docs.map(doc=>doc.data())))
        }
    },[roomId])

    return (
        <div className='chat'>
            <ChatHeader roomName={roomName} messages={messages}/>
            <ChatBody messages={messages} userName={userName}/>
            <ChatFooter roomId={roomId} userName={userName}/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        chatsList: state.chatsReducer.chatsList,
        userName: state.authReducer.user.user.displayName
    }
}
const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)