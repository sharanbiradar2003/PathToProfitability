import React, { useState } from "react";
import TransactionDetails from "./TransactionDetails";
import StaffHome from "../StaffHome";
import "../../cssFiles/ChooseCustomerName.css";

function ChooseCustomerName() {
  const [selectedValue, setSelectedValue] = useState("");
  const [showChild, setShowChild] = useState(false);

  // Static customer list
  const staticCustomers = [
    { id: 1, userfirstname: "Sanket Patil" },
    { id: 2, userfirstname: "Sumant Adky" },
    { id: 3, userfirstname: "Kiran" },
    { id: 4, userfirstname: "Sharanu" },
  ];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const viewHandle = () => {
    if (selectedValue) {
      setShowChild(true);
    } else {
      alert("Please select a customer first.");
    }
  };

  return showChild ? (
    <TransactionDetails userfirstname={selectedValue} />
  ) : (
    <>
      <StaffHome />
      <div className="container">
        <select value={selectedValue} onChange={handleChange}>
          <option value="">Select the name</option>
          {staticCustomers.map((customer) => (
            <option key={customer.id} value={customer.userfirstname}>
              {customer.userfirstname}
            </option>
          ))}
        </select>
        <button onClick={viewHandle}>View</button>
      </div>
    </>
  );
}

export default ChooseCustomerName;
