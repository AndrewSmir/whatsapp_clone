import React, {useState} from 'react'
import {IconButton} from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import db from "../../firebase";
import firebase from "firebase";

const ChatFooter = (props) => {

    const {roomId, userName} = props

    const [inputValue, setInputValue] = useState("")

    const setNewMessageText = e => {
        if (e.keyCode === 13) {
            sendMessage(e, inputValue)
            setInputValue('')
        } else {
            setInputValue(e.target.value)
        }
    }

    const sendMessage = (e, message) => {
        e.preventDefault()
        db.collection('rooms').doc(roomId).collection('messages').add({
            message: message,
            name: userName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    }

    return (
        <div className="chat__footer">
            <IconButton>
                <InsertEmoticonIcon/>
            </IconButton>
            <form onSubmit={sendMessage}>
                <input type="text" placeholder='Please enter your message' value={inputValue}
                       onChange={setNewMessageText} onKeyDown={setNewMessageText}/>
                <button type='submit'>Send a message</button>
            </form>
            <IconButton>
                <MicIcon/>
            </IconButton>
        </div>
    )
}

export default ChatFooter