
import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import "../css/chat.css";

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
// import { Button } from './Styles';
  
const Chat = () =>{
  
  return (
    <div className='chat-part'>
     <a href='https://wa.me' target="_blank"><WhatsAppIcon className="what-btn"/></a>
    </div>
  );
}
  
export default Chat;