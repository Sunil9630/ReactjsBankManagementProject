import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UserLogin=()=>
{
const [email, setEmail]=useState("");
const [pwd, setPwd]=useState("");
const myNavigation= useNavigate();

const handleSubmit=()=>
{
  let url=`http://localhost:4000/customer?email=${email}`;
  axios.get(url).then((res)=>{ 
        if(res.data.length===0)
        {
            document.getElementById("myerr").innerHTML="Invalid Email";
        }
        else 
        {
            if (res.data[0].password===pwd)
            {
               localStorage.setItem("cusName", res.data[0].name );
               localStorage.setItem("cusEmail", res.data[0].email);
               localStorage.setItem("cusID", res.data[0].id );
               myNavigation("/cusDashBoard");
            }
            else 
            {
            document.getElementById("myerr").innerHTML="Invalid Password";
            }
        }
    
     //console.log(res.data);
  });

}

return(
<>
<center>
 <div id="loginBox" style={{height:"220px"}}> 
     <h2 class="head1">Enter Your Credentials</h2>
     <input type="text" placeholder="Enter Your Email" name="email"
     value={email} onChange={(e)=>{setEmail(e.target.value)}} />
     <input type="text" placeholder="Password" name="password"
     value={pwd} onChange={(e)=>{setPwd(e.target.value)}}  />
     <button type="button" onClick={handleSubmit}> Login </button>

     <div id="myerr"></div>
  </div>
  </center>
</>
 )
}

export default UserLogin;