import React, { useState } from  'react'
function HooksCounter(){
    let [Like,setLike]=useState(0)

    return(
        <div>
        <button onClick={()=>setLike(Like+1)}>HooksClick{Like}</button>
        </div>
    )
}

export default HooksCounter

