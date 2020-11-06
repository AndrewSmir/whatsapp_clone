import React from 'react'
import {connect} from "react-redux";
import {getUserAuthData} from "../../redux/auth-reducer";
import Auth from "./Auth";

const AuthContainer = (props) => {
    return (
        <Auth {...props}/>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserAuthData(){
            dispatch(getUserAuthData())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)