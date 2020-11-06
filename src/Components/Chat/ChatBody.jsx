import React from 'react'
import ChatBodyMessage from "./ChatBodyMessage";

const ChatBody = (props) => {

    const {messages, userName} = props

    const messagesList = messages.map((message, i) => <ChatBodyMessage key={i} {...message} userName={userName}/>)

    return (
        <div className="chat__body">
            {messagesList}
        </div>
    )
}

export default ChatBody