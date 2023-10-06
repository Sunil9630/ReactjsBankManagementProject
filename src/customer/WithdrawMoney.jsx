import { useState } from "react";
import axios from "axios";

let CusID=localStorage.getItem("cusID");

const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const submitDate = dd + '/' + mm + '/' + yyyy;

const WithDrawMoney=()=>
{
  const [amount, setAmount]=useState(0);

   const handleSubmit=()=>
   {
    let url="http://localhost:4000/account/";
  const  myData={
        "cus_id":CusID,
        "submit_amount":0,
        "date":submitDate,
        "withdraw_amount":amount
    }
    axios.post(url, myData).then((res)=>{
      alert("Please Recieve Your Money!!!");
      document.getElementById("atm").innerHTML="<img src='../images/atm.gif' />";

    });
   }


    return(
  <>
    <h1> Withdraw Money From Your Account</h1>  
    
  
    <div id="loginBox" style={{height:"150px",width:"300px"}}> 
     <h2 class="head1" >Withdraw Amount</h2>
     <input type="text" placeholder="Enter Your Amount" name="amount"
     value={amount} onChange={(e)=>{setAmount(e.target.value)}} />
     <button type="button" style={{width:"150px",margin:"auto"}}
     onClick={handleSubmit} >Withdraw</button>
  </div>
    
  
  </>
    );
}

export default WithDrawMoney;




