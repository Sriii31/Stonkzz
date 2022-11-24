import axios from 'axios';
import React, { useState } from 'react';

function LoginForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
        
const formHandler=(event)=>{
    event.preventDefault();
    const obj={
        firstName:firstName,
        lastName:lastName,
        password:password,
        email:email
        }
console.log(obj);
    //axios.post(ur1/obj);
}
  return (
    <form onSubmit={formHandler}>
      <input type="text" name="firstName"
        value={firstName} 
        onChange={e => setFirstName(e.target.value)}
        placeholder="First name"
        required
      /><br></br>
      <input
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      /><br></br>
<input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      /><br></br>
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        required
      /><br></br>
      <button type="submit">Submit</button>
    </form>
  );
}
export default LoginForm;