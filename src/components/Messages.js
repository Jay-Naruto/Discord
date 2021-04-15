import { Avatar } from '@material-ui/core'
import React from 'react'
import "../Messages.css"
/**
* @author
* @function Messages
**/

const Messages = ({user,messages,timestamp}) => {
  return(
    <div className="message" >
        <Avatar src={user.photo} />
        <div className="message__info" >
          <h4>{user.displayName}
              <span className="message__time" >
                {new Date(timestamp?.toDate()).toUTCString}
              </span>
          </h4>
          <p>{messages}</p>
        </div>
    </div>
   )

 }

export default Messages