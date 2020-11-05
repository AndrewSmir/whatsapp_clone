import React from 'react'
import SidebarContainer from "./Components/Sidebar/SidebarContainer";
import Chat from "./Components/Chat/Chat";

function App() {
  return (
    <div className="App">
        <div className="wrapper">
            <SidebarContainer/>
            <Chat/>
        </div>
    </div>
  );
}

export default App;
