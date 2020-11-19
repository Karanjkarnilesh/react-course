import React,{useState} from 'react';

function Contact(props){
    const [val,setVal]=useState("Nilesh")
    const test=(e)=>{
        console.log("Button Event",e.target.value)
        setVal(e.target.value)
    }
      
    return(<div>
        <h1>Contact us  Component</h1>
        <input type="text" value={val}  onChange={test}/>
        <button onClick={()=>alert(val)}>button</button>
    </div>)
};

export default Contact;