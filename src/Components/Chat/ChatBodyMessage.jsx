import React from 'react'

const ChatBodyMessage = (props) => {

    const {message, name, timestamp, userName} = props


    return (
            <p className={`chat__message ${(name === userName) && 'chat__receiver'}`}>
                <span className="chat__name">{name}</span>
                {message}
                <span className='chat__timestamp '>{new Date(timestamp?.toDate()).toLocaleTimeString()}</span>
            </p>
    )
}

export default ChatBodyMessage