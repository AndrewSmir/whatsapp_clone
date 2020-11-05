import React from 'react'
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

const ChatContainer = () => {
    return (
        <div className='chat'>
            <ChatHeader/>
            <ChatBody/>
            <ChatFooter/>
        </div>
    )
}

export default ChatContainer