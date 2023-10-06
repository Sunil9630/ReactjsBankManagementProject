import { useState, useEffect } from "react";
import axios from "axios";
const cus_id=localStorage.getItem("cusID");

const CheckBalance=()=>
{
  let cusName=localStorage.getItem("cusName");
  const [data, setData]=useState([]);
  const loadData=()=>
  {
    const url=`http://localhost:4000/account/?cus_id=${cus_id}`;
    axios.get(url).then((res)=>{
      setData(res.data);
    });
  }

  useEffect(()=>{
    loadData();
  }, []);

  let totalCredit=0;
  let totalDebit=0;
  data.map((key)=>{
                
        totalCredit+=parseInt(key.submit_amount);
        totalDebit+=parseInt(key.withdraw_amount);
            
        
      });
   let netAmount=totalCredit-totalDebit;

  return(
  <>
    <h1> Bank Balance Of {cusName}</h1>  
          <h1 style={{color:"black",backgroundColor:"yellow",fontSize:"25px"}}> Total Balance: {netAmount} </h1>
  </>
    );
}

export default CheckBalance;