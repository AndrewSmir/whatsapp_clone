import React from 'react'
import SidebarHeader from "./SidebarHeader";
import SidebarSearch from "./SidebarSearch";
import SidebarChats from "./SidebarChats";

const SidebarContainer = () => {
    return (
        <div className='sidebar'>
            <SidebarHeader/>
            <SidebarSearch/>
            <SidebarChats/>
        </div>
    )
}

export default SidebarContainer