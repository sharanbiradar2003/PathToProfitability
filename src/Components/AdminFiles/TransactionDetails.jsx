import React, { useState } from "react";
import "../../cssFiles/TransactionsDetails.css";
import AdminMenu from "./AdminMenu";

const TransactionDetails = ({ userfirstname }) => {
  const [transitData, setTransitData] = useState({
    userfirstname: userfirstname || "",
    userlastname: "",
    usercontact: "",
    loanamt: "",
    loaninterest: "",
    loanperoid: "",
    loaninterestamt: "",
    balance: "",
  });

  const [transitData1, setTransitData1] = useState({
    paymentdate: "",
    amount: "0",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setTransitData({ ...transitData, [name]: value });
  };

  const handlechange1 = (e) => {
    const { name, value } = e.target;
    setTransitData1({ ...transitData1, [name]: value });
  };

  const save = (e) => {
    e.preventDefault();

    // Validate all fields
    for (let key in transitData) {
      if (transitData[key].trim() === "") {
        alert(`Please fill the field: ${key}`);
        return;
      }
    }
    for (let key in transitData1) {
      if (transitData1[key].trim() === "") {
        alert(`Please fill the field: ${key}`);
        return;
      }
    }

    // Calculate new balance
    const newBalance =
      parseFloat(transitData.balance || 0) - parseFloat(transitData1.amount || 0);

    setTransitData({ ...transitData, balance: newBalance.toFixed(2) });

    alert("Data saved successfully!");
  };

  return (
    <>
      <AdminMenu />
      <div className="header5">
        <div className="header2">
          <h1 className="h1">Enter Transaction Details</h1>

          {/* Customer Info */}
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="userfirstname"
              value={transitData.userfirstname}
              onChange={handlechange}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="userlastname"
              value={transitData.userlastname}
              onChange={handlechange}
            />
          </div>
          <div className="form-group">
            <label>Contact</label>
            <input
              type="text"
              name="usercontact"
              value={transitData.usercontact}
              onChange={handlechange}
            />
          </div>

          {/* Loan Info */}
          <div className="form-group">
            <label>Loan Amount</label>
            <input
              type="text"
              name="loanamt"
              value={transitData.loanamt}
              onChange={handlechange}
            />
          </div>
          <div className="form-group">
            <label>Interest Rate</label>
            <input
              type="text"
              name="loaninterest"
              value={transitData.loaninterest}
              onChange={handlechange}
            />
          </div>
          <div className="form-group">
            <label>Loan Period</label>
            <input
              type="text"
              name="loanperoid"
              value={transitData.loanperoid}
              onChange={handlechange}
            />
          </div>
          <div className="form-group">
            <label>Total Loan Amount</label>
            <input
              type="text"
              name="loaninterestamt"
              value={transitData.loaninterestamt}
              onChange={handlechange}
            />
          </div>

          {/* Payment Info */}
          <div className="form-group">
            <label>Payment Date</label>
            <input
              type="text"
              name="paymentdate"
              value={transitData1.paymentdate}
              onChange={handlechange1}
            />
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input
              type="text"
              name="amount"
              value={transitData1.amount}
              onChange={handlechange1}
            />
          </div>

          <div className="form-group">
            <label>Balance</label>
            <input
              type="text"
              name="balance"
              value={transitData.balance}
              onChange={handlechange}
            />
          </div>

          <div className="form-group">
            <button className="btn1" onClick={save}>
              Save
            </button>
            <button className="btn1">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionDetails;
