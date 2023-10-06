import { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const fixedInputClass="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";
const btncls ="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10";


const Login=()=>{
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

    return (
        <div id="loginpage">
        <div className="mb-10">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
            Don't have an account yet?  {' '}
            <Link to='../home' className="font-medium text-purple-600 hover:text-purple-500">
            CreateAccount
            </Link>
            </p>
        </div>
        <form className="mt-8 space-y-6">
            <div className="-space-y-px">
                        <input
                        className={fixedInputClass} type='email' placeholder="Email address" name="email"
                        value={email} required='true' onChange={(e)=>{setEmail(e.target.value)}} 
                        /> <br />
                        <input
                        className={fixedInputClass} type='password' placeholder="Password" name="password"
                        value={pwd} required='true' onChange={(e)=>{setPwd(e.target.value)}} 
                        />
                <h5 id='myerr'></h5>
            </div>

            <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
            Forgot your password?
          </a>
        </div>
      </div>
            <button type="button" className={btncls} onClick={handleSubmit}>Login</button>
        </form>
        </div>
    )
}

export default Login;