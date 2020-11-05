import React from 'react'

const ChatBodyMessage = () => {
    return (
            <p className={`chat__message ${true && 'chat__receiver'}`}>
                <span className="chat__name">Andrey</span>
                Hello yo yo yo
                <span className="chat__timestamp">3.52 pm</span>
            </p>
    )
}

export default ChatBodyMessage