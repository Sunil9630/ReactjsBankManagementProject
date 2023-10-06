import {Outlet,Link} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div id="container">

                <div id="topheader">
                    <div id="contactno">
                        <i class="fa fa-phone" aria-hidden="true" ></i> +919630357187
                        <Link to="userlogin" className="lk">Customer login</Link>
                    </div>
                    <div id="righticons">
                        <i class="fa fa-facebook-square" aria-hidden="true"></i>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                        <i class="fa fa-google-plus" aria-hidden="true"></i>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                        <div id="search">
                        <input type="text" placeholder="Search.." name="search"/>
      <button type="submit"><i class="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
                <div id="topmenu">
                    <ul>
                        <li><Link to="home">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="services">Services</Link></li>
                        <li><Link to="team">Team</Link></li>
                        <li><Link to="blog">Blog</Link></li>
                        <li><Link to="payment">Payment</Link></li>
                        <li><Link to="contact">Contact</Link></li>
                    </ul>
                </div>
                <div id="banklogo">
                    <span className="banklogo1">Federal</span> <span className="banklogo2">Bank</span>
                </div>
                <div>
                    <Outlet/>
                </div>
                <div id="footer">
                    Copyright © 2023. All Rights Reserved by Federal Bank.
                </div>
            </div>
        </>
    );
}


export default Layout;
