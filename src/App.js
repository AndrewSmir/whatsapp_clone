import React from 'react'
import SidebarContainer from "./Components/Sidebar/SidebarContainer";
import ChatContainer from "./Components/Chat/ChatContainer";

function App() {
  return (
    <div className="App">
        <div className="wrapper">
            <SidebarContainer/>
            <ChatContainer/>
        </div>
    </div>
  );
}

export default App;
