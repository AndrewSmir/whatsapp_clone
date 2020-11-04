import React from 'react'
import SidebarHeader from "./SidebarHeader";
import SidebarSearch from "./SidebarSearch";

const SideBar = props => {
    return (
        <div className='sidebar'>
            <SidebarHeader/>
            <SidebarSearch/>

            <div className='sidebar__chats'>

            </div>
        </div>
    )
}

export default SideBar