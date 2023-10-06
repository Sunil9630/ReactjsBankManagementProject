import { useState,useEffect } from "react";
import axios from "axios";
import MiniStatementView from "./MiniStatementView";

const CusID=localStorage.getItem("cusID");
const Ministatement=()=>
{
    const [data,setData]=useState([]);
    const loadData=()=>
    {
        let url=`http://localhost:4000/account/?cus_id=${CusID}`;
        axios.get(url).then((res)=>{
            setData(res.data);

        });
    }
    useEffect(()=>{
        loadData();

    },[]);
    var totalBalance=0;
    var totalSubmitAmt=0;
    var totalWithdraAmt=0;

    const myData=data.map((key)=>{
        totalSubmitAmt+=parseInt(key.submit_amount);
        totalWithdraAmt+=parseInt(key.withdraw_amount);
        return(
            <>
        <MiniStatementView 
        trnDate={key.date}
        subAmt={key.submit_amount}
        withdraAmt={key.withdraw_amount}
        />
        </>
        );
        
        

    

    });
    totalBalance=totalSubmitAmt-totalWithdraAmt;
    


    return(
        <>
        <h1>Mini Statement</h1>
        <table style={{width:"95%",borderCollapse:"collapse",border:"1px solid black",margin:"auto",}} class="table table-bordered">
            <tr>
                <td>Date</td>
                <td>Debit</td>
                <td>Credit</td>
            </tr>
            {myData}
        </table>
        <h3 style={{margin:"15px"}}>Net Balance : {totalBalance}</h3>
        
        </>
    );
}
export default Ministatement;