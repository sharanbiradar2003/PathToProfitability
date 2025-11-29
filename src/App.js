import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from './Components/HomePage';
import Transit from './Components/AdminFiles/Transit';
import Admin from './Components/AdminFiles/Admin';
import LoanAmtCreation from './Components/AdminFiles/LoanAmtCreation';
import AdminMenu from './Components/AdminFiles/AdminMenu';
import CustomerList from './Components/AdminFiles/CustomerList';
import LoanCalculator from './Components/LoanCalculator';
import UpdateTransactionDetails from './Components/UpdateTransactionDetails';
import ChooseCustomerName from './Components/AdminFiles/ChooseCustomerName';
import StaffDetailsForm from './Components/StaffDetails';
import StaffLoginPage from './Components/StaffLoginPage';
import Adminchange from './Components/AdminFiles/AdminPasswordChange'
import AdminUsernameChange from './Components/AdminFiles/AdminUsernameChange';
import TypeOfLoan from './Components/TypeOfLoan';
import AdminHome from './Components/AdminFiles/AdminHome'
import StaffWelcomePage from './Components/StaffWelcome';
import UpdateStaff from './Components/UpdateStaff'
import { UserDataProvider } from './Components/AuthContext';
import StaffCustomerList from './Components/StaffCustomerList'
import StaffCustomerTransactions from './Components/StaffCustomerTransactions'

function App() {
  return (
    <UserDataProvider>
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/adminmenu" element={<AdminHome/>}/>
            <Route path="/loanamount" element={<TypeOfLoan/>} />
            <Route path='/customerlist' element={<CustomerList/>}/>
            <Route path='/transit' element={<Transit/>}/>
            <Route path='/home' element={<AdminHome/>}/>
            <Route path='/transactions' element={<ChooseCustomerName/>}/>
            <Route path='/loancalculator' element={<LoanCalculator/>}/>
            <Route path='/transit/update-details' element={<UpdateTransactionDetails/>}/>
            <Route path='/staffdetails' element={<StaffDetailsForm/>}/>
            <Route path='/staff-login' element={<StaffLoginPage/>}/>
            <Route path='/admin/updatepassword' element={<Adminchange/>} />
            <Route path='/admin/updateusername' element={<AdminUsernameChange/>}/>
            <Route path='/loan/personal' element={<LoanAmtCreation name="Personal"/>} />
            <Route path='/loan/vehicle' element={<LoanAmtCreation name="Vehicle"/>} />
            <Route path='/loan/education' element={<LoanAmtCreation name="Education"/>} />
            <Route path='/adminhome' element={<AdminHome/>}/>
            <Route path='/staffcustomerlist' element={<StaffCustomerList/>}/>
            {/* <Route path='/stafftransit' element={<StaffCustomerTransactions/>}/> */}
            <Route path='/staffhome' element={<StaffWelcomePage/>}/>
            <Route path='/staffwelcome' element={<StaffWelcomePage/>}/>
            {/* <Route path='/updatestaff' element={<UpdateStaff/>}/> */}
          </Routes>
        </Router>      
    </div>
    </UserDataProvider>
  );
}

export default App;
