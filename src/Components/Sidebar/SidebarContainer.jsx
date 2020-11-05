import React from 'react'
import SidebarHeader from "./SidebarHeader";
import SidebarSearch from "./SidebarSearch";
import SidebarChatsList from "./SidebarChatsList";

const SidebarContainer = () => {
    return (
        <div className='sidebar'>
            <SidebarHeader/>
            <SidebarSearch/>
            <SidebarChatsList/>
        </div>
    )
}

export default SidebarContainer