import React from 'react'
import "../ChatHeader.css"
/**
* @author
* @function ChatHeader
**/

const ChatHeader = ({channelName}) => {
  return(
    <div className="chatheader" >
        <div className="chatheader__left" >
        <h3>
            <span className="chatheader__hash">
            {channelName}
            </span>
            </h3>
        </div>
        <div className="chatheader__right" >
        
    </div>
        
    </div>
   
    )

 }

export default ChatHeader