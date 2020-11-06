import db from "../firebase";

const SET_CHATS_LIST = '@@chatsReducer/SET_CHATS_LIST'

const initialState = {
    chatsList: []
}

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHATS_LIST:
            return {
                ...state,
                chatsList: action.chatsList
            }

        default:
            return state
    }
}

export default chatsReducer

//Actions

const setChatsList = (chatsList) => ({type: SET_CHATS_LIST, chatsList})

//Thunks
export const getChatsList = () => async dispatch => {
    let chatsList = []
    await db.collection('rooms').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                chatsList.push({
                    id: doc.id,
                    data: doc.data()
                })
            });
        })
    dispatch(setChatsList(chatsList))
}

export const addNewRoom = (roomName) => dispatch => {
    db.collection('rooms').add({
        name: roomName
    }).then(()=>dispatch(getChatsList()))
}

