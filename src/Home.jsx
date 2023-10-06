import { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate=useNavigate();
    const[input, setinput]=useState({});


    const handleChange=(e)=>{
        let name=e.target.name;
        let value= e.target.value;
        if(document.getElementById("name").value!==""){
        setinput(values=>({...values,[name]:value}));
    }
    else{
        alert("please fill all the fields")
    }
    }
    const handleSubmit=()=>{
        let url="http://localhost:4000/customer";
        axios.post(url, input).then((res)=>{
            
            navigate("/regsucess");
        });
    }
    return (
        <>
        <div id="container">
                <div id="main">
                    <div id="regform">
                        <h3 className="head1">Start Savings Account</h3>
                        <input type="text" id="name" required placeholder="Full name" name="name" onChange={handleChange} value={input.name}/>
                        <input type="email" id="email" required placeholder="Email address" name="email" onChange={handleChange} value={input.email}/>
                        <input type="text" id="contact" required placeholder="Phone number" name="contactno" onChange={handleChange} value={input.contactno}/>
                        <input type="password" id="password" required placeholder="Password" name="password" onChange={handleChange} value={input.password}/>
                        <h4 id="err"></h4>
                        <button onClick={handleSubmit}>Get Started</button>
                    </div>
                    <div id="procsteps">
                        <h3 className="head2">Account Processing Steps !</h3>
                        <p className="psp">Federal Bank is a pioneer in the banking sector in India by being the first bank to digitalize all its branches in the country.</p>
                        <ul>
                            <li><i class="fa fa-share"></i>&nbsp; &nbsp; Visit the Federal Bank website.</li>
                            <li><i class="fa fa-share"></i>&nbsp; &nbsp;Under the 'Personal' tab, select 'Savings Accounts'.</li>
                            <li><i class="fa fa-share"></i>&nbsp; &nbsp;Select type of savings account and click on 'Apply Now'</li>
                            <li><i class="fa fa-share"></i>&nbsp; &nbsp;Fill in the online application form.</li>
                            <li><i class="fa fa-share"></i>&nbsp; &nbsp;Review and submit the application.</li>
                        </ul>
                    </div>
                </div>
                </div>
        </>
    );
}


export default Home;
