import React from 'react'
import SearchOutlined from "@material-ui/icons/SearchOutlined"

const SidebarSearch = props => {
    return (
        <div className='sidebar__search'>
            <div className="sidebar__searchContainer">
                <SearchOutlined/>
                <input placeholder='Search or start new chat'  type="text"/>
            </div>
        </div>
    )
}

export default SidebarSearch
