import './myStyle.css'
import React,{useState} from 'react'
function FormValidation2()
{
 const[firstName, setFirstName]=useState("")
 const[lastName, setLastName]=useState("")
 const[error,setEror]=useState(false)
 const handleState=(e)=>{
        e.preventDefault(); 
   if(firstName.length===0|| lastName.length==0)
   {  setEror(true) }
   if(firstName && lastName)
   {
    console.log("FirstName:", firstName , "\nLastName: ",lastName)
   } 
}
return( 
   <form onSubmit={handleState}>
    <div>
         <input type="text" onChange={e=>setFirstName(e.target.value)}></input>
    </div>
      {error && firstName.length===0 ?
    <label>First Name cannot be empty</label>:""}
   <div>
         <input type="text" onChange={e=>setLastName(e.target.value)}></input>
    </div>
    {error && lastName.length===0 ?
    <label>Last Name cannot be empty</label>:""}
    <div> 
         <button type="Submit">Submit</button>
    </div> </form>
 )
  }
