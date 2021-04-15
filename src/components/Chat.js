import React, { useEffect,useState } from 'react'
import "../Chat.css"
import ChatHeader from './ChatHeader'
import AddCircleIcon from "@material-ui/icons/AddCircle"
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard"
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions"
import GifIcon from "@material-ui/icons/Gif"
import Messages from './Messages'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import { selectChannelId, selectChannelName } from '../features/counter/appSlice'
import db from '../firebase'
import firebase from "firebase"
/**
* @author
* @function Chat
**/

const Chat = (props) => {
  const user=useSelector(selectUser)
  const channelId=useSelector(selectChannelId)
  const channelName=useSelector(selectChannelName)
  const [input,setInput]=useState("")
  const [messages,setMessages]=useState([])


  useEffect(()=>{
  if(channelId)
  {
    db.collection("channels").doc(channelId).collection("messages")
    .orderBy("timestamp","desc").onSnapshot((snap)=>{
      setMessages(snap.docs.map((doc)=>doc.data()))
    })
  }

    
  },[channelId])

  const sendMessaeges=(e)=>{
    e.preventDefault()
   
    db.collection("channels").doc(channelId).collection("messages")
    .add({
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      message:input,
      user:user
    })
    setInput("")
  }
  return(
    <div className="chat" >
        <ChatHeader channelName={channelName} />
        <div className="chat__messages" >
          {
            messages.map(msg=>(
                <Messages 
                timestamp={msg.timestamp}
                messages={msg.message}
                user={msg.user}
                />
            ))
          }
        

       </div>
    <div className="chat__input" >
        <AddCircleIcon fontSize="large" />
       <form>
           <input disabled={!channelId} value={input} onChange={e=>setInput(e.target.value)} placeholder={`Message ${channelName}`} />
           <button onClick={sendMessaeges} className="chat__inputButton" type="submit"></button>
       </form>
       <div className="chat__inputIcons">
           <CardGiftcardIcon fontSize="large" />
           <GifIcon fontSize="large" />
           <EmojiEmotionsIcon fontSize="large" />

       </div>

    </div>

    </div>
   )

 }

export default Chat