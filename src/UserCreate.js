import React,{useState} from 'react';

function UserCreate(){
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [address,setAddress]=useState("");
    function makeUser()
    {
        let data={name,age,address}
        console.warn("button",data);
    }
    return(<div> 
        <h1> Create User</h1>
        <input type="text"  
        onChange={(e)=>setName(e.target.value)}
         name="username" value={name}/>
        
        <br/><br/>
        
        <input type="text" 
        onChange={(e)=>setAge(e.target.value)}
         name="age" value={age}/>
        
        <br/><br/>
        
        <input type="text"
        onChange={(e)=>setAddress(e.target.value)}
         name="address" value={address}/>
        <br/><br/>
        <button type="submit" onClick={makeUser}> click</button>
        </div>

        )};

export default UserCreate;