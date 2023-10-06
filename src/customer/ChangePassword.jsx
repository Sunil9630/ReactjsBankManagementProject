
const handleSubmit=()=>{
    document.getElementById("op").value="";
    document.getElementById("np").value="";
    document.getElementById("cnp").value="";
    alert("password successfully changed")
}

const ChangePassword=()=>
{
    return(
  <>
    <center>
 <div id="regform" style={{height:"310px",width:"400px"}}> 
     <h2 class="head1"> Change Your Password</h2>
     <input type="text" placeholder="Enter Old Password" name="oldpwd" id="op"
     />
     <input type="text" placeholder="Enter new Password" name="newpwd" id="np"
       />
        <input type="text" placeholder="Re Enter new Password" name="renewpwd" id="cnp"
       />
     <button type="button" onClick={handleSubmit}> Submit </button>

     <div id="myerr"></div>
  </div>
  </center> 

  
  </>
    );
}

export default ChangePassword;