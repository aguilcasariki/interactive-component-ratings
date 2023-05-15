import React from 'react'

function Rate() {
  return (
    <div>
        {
            [1,2,3,4,5].map(
                (i,btn)=>(
                    <button key={i}>{btn}</button>
                )
                    
                
            )
        }
    </div>
  )
}

export default Rate