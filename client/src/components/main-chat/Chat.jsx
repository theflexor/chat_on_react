import React, { useEffect, useState } from 'react'
import './chat.css'
import { MessagesCard } from './Messages';
import axios from 'axios'
export function Chat() {
     const [Messages, setMessages] = useState([]);
     const [value, setValue] = useState('')
     useEffect(() => {
          subscribe()
     }, [])

     const subscribe = async () => {
          try {
               const { data } = await axios.get('http://localhost:5000/get-messages')
               console.log(data);
               setMessages(prev => [data, ...prev])
               await subscribe()
          } catch (e) {
               setTimeout(() => {
                    subscribe()
               })
          }
     }

     const sendMessages = async () => {
          await axios.post('http://localhost:5000/new-messages', {
               message: value,
               id: Date.now()
          })
     }
     return (
          <div className="Chat">
               <div className="block">
                    <div className="chatList">
                         {Messages.map(msg => <MessagesCard mess={msg.message} key={msg.id} />)}
                    </div>
                    <div className="chatInput">
                         <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="write text" />
                         <button onClick={sendMessages} className="btn btn-danger">Send</button>
                    </div>
               </div>
          </div>
     )
}

