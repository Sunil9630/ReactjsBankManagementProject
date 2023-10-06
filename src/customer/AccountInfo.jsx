import { useState, useEffect } from "react";
import axios from "axios";

const cus_id=localStorage.getItem("cusID");


const AccountInfo=()=>
{
    let cusName=localStorage.getItem("cusName");
 const [data, setData]= useState([
  {
    name:"",
    id:""
  }
 ]);

 const loadData=()=>
 {
   let url=`http://localhost:4000/customer/?id=${cus_id}`;
   axios.get(url).then((res)=>{
    setData(res.data);
   });
  
   //console.log(data[0].name);
 }

useEffect(()=>{
  loadData();
}, []);



    return(
  <>
    <h1> {cusName}'s Account Detail</h1>  
    <center>
    <table width="50%" style={{color:"navy", fontWeight:"bold", fontFamily:"verdana", fontSize:"15px", height:"100px"}}>
      <tr>
        <td> Bank name : </td>
        <td>  Federal Bank of Cybrom  </td>
      </tr>
      <tr>
        <td> Customer Name :  </td>
        <td> {cusName}   </td>
      </tr>
      <tr>
        <td> Account No. : </td>
        <td> 2029878125{data[0].id}   </td>
      </tr>
      <tr>
        <td> IFSC No. : </td>
        <td> CYBRO405101   </td>
      </tr>
      <tr>
        <td> Branch Name : </td>
        <td> MP nagar Branch Zone -1, Bhopal   </td>
      </tr>
    </table>
  </center>
  </>
    );
}

export default AccountInfo;