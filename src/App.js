import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Team from './Team';
import Blog from "./Blog";
import Payment from "./Payment";
import Contact from "./Contact";
import About from './About';
import Services from './Services';
import RegisterSuccess from './RegisterSuccess';
import UserLogin from './UserLogin';
import CustDashboard from './CustDashboard';
import AccountInfo from './customer/AccountInfo';
import CheckBalance from './customer/CheckBalance';
import SubmitMoney from './customer/SubmitMoney';
import WithdrawMoney from './customer/WithdrawMoney';
import ChangePassword from './customer/ChangePassword';
import Ministatment from './customer/Ministatment';
import Login from './Login';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="team" element={<Team />} />
            <Route path="blog" element={<Blog />} />
            <Route path="payment" element={<Payment />} />
            <Route path="contact" element={<Contact />} />
            <Route path="regsucess" element={<RegisterSuccess />} />
            <Route path="userlogin" element={<Login />} />
            <Route path="cusDashboard" element={<CustDashboard />}>
              <Route path="accountinfo" element={<AccountInfo />} />
              <Route path="checkbalance" element={<CheckBalance />} />
              <Route path="submitmoney" element={<SubmitMoney />} />
              <Route path="withdrawmoney" element={<WithdrawMoney />} />
              <Route path="changepassword" element={<ChangePassword />} />
              <Route path="ministatement" element={<Ministatment />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
