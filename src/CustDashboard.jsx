import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const CustDashboard = () => {
    let cusName = localStorage.getItem("cusName");
    let cusEmail = localStorage.getItem("cusEmail");

    const navigate = useNavigate();

    const userLogout = () => {
        localStorage.clear();
        navigate("/home");
    }
    return (
        <>
            <div id="dashboard">
                <p>
                    Welcome :&nbsp; {cusName} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email :&nbsp;&nbsp;&nbsp;{cusEmail}
                    <a onClick={userLogout}>Logout</a></p>
            </div>
            <div id="cusArea">
                <div id="cusleftmenu">
                    <ul>
                        <Link to="accountinfo" className='lftlist'><li>Account info</li></Link>
                        <Link to="checkbalance" className='lftlist'><li>Check balance</li></Link>
                        <Link to="submitmoney" className='lftlist'><li>Submit money</li> </Link>
                        <Link to="withdrawmoney" className='lftlist'><li>Withdraw money</li> </Link>
                        <Link to="changepassword" className='lftlist'><li>Change password</li> </Link>
                        <Link to="ministatement" className='lftlist'><li>Mini Statement</li></Link>
                    </ul>
                </div>
                <div id="cusrightmenu">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default CustDashboard;
