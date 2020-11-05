import React, {useEffect, useState} from 'react'
import {Avatar, IconButton} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {AttachFile, SearchOutlined} from "@material-ui/icons";

const Chat = () => {
    const [randomNum, setRandomNum] = useState(null)

    useEffect(() => {
        setRandomNum(Math.floor(Math.random() * 10000))
    }, [])

    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${randomNum}.svg`}/>
                <div className="chat__header__info">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat__header__right">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && 'chat__receiver'}`}>
                    <span className="chat__name">Andrey</span>
                    Hello yo yo yo
                    <span className="chat__timestamp">3.52 pm</span>
                </p>

                <p className={`chat__message ${false && 'chat__receiver'}`}>
                    <span className="chat__name">Vovan</span>
                    Hello yo yo yo Hello yo yo yo
                    Hello yo yo yo
                    Hello yo yo yoHello yo yo yoHello yo yo yoHello yo yo yoHello yo yo yo
                    <span className="chat__timestamp">3.52 pm</span>
                </p>
            </div>
            <div className="chat__footer">
                
            </div>
        </div>
    )
}

export default Chat