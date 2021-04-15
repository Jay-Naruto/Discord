import React, { useEffect, useState } from 'react'
import "../Sidebar.css"
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SidebarChannel from './SidebarChannel';
import SignalCelluarAltIcon from "@material-ui/icons/SignalCellularAlt"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import CallIcon from "@material-ui/icons/Call" 
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';
import db, { auth } from '../firebase';

function Sidebar() {
    const user=useSelector(selectUser)
    const [channels,setChannel]=useState([])


     useEffect(()=>{
            db.collection("channels").onSnapshot(snapshot=>
                setChannel(snapshot.docs.map(doc=>({
                    id:doc.id,
                    channel:doc.data()
                }))))
        },[])


        const handleAdd=()=>{
            const channelName=prompt("Enter a channel name")
            if(channelName)
            {
                db.collection("channels").add({
                    channelName:channelName
                })
            }
        }
        
    return (
        <div>
           <div className="sidebar" >
            <div className="sidebar__top" >
                <h2> Howdy, {user.displayName}</h2>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                <div className="sidebar__header">
                    <ExpandMoreIcon />
                    <h3>Text Channels</h3>
                
                </div>
                <AddIcon onClick={handleAdd} className="sidebar__addchannel" />             
                </div>
            <div className="sidebar__channelist" >
                {
                    channels.map(({id,channel})=>(
                        <SidebarChannel key={id} id={id} channelName={channel.channelName} />
                    ))
                }
              
            </div>
            </div>

            <div className="sidebar__voice"  >
                <SignalCelluarAltIcon
                className="sidebar__voiceIcon"
                fontSize="large"
                />
                <div className="sidebar__voiceInfo" >
                    <h3>Voice Connected</h3>
                    <p>Stream</p>

                </div>
                <div className="sidebar__voiceIcons" >
                    <InfoOutlinedIcon />
                     <CallIcon />
                </div>

            </div>
            <div className="sidebar__profile" >
                    <Avatar onClick={()=>auth.signOut()} src={user.photo} />
                    <div className="sidebar__profileInfo" >
                   <h3>{user.displayName}</h3>
                   <p>#{user.uid}</p>
                     
                    </div>
                    
                     
                </div>

            

           </div>
            
        </div>
    )
}
export default Sidebar