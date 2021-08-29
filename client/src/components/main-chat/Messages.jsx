
import React from 'react'



export function MessagesCard({mess,key}) {
     return (
          <div className="wrapper-msg" key={key}>
               <div className="msg" >
                    <h4><i>{key }</i>{mess}</h4>
               </div>
          </div>
     )
}
export default MessagesCard
