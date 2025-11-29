import React, { useState } from "react";
import "../cssFiles/CustomerList.css";
import StaffHome from './StaffHome';

export const ShowLoading = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "blue", fontSize: "2em" }}>
        Loading
      </h1>
    </>
  );
};

function CustomerList() {
  const [loading, setLoading] = useState(false); // no loading for static data

  // Static loan details for 4 users
  const [loanDetails] = useState([
    {
      id: 1,
      userfirstname: "Sanket",
      userlastname: "Patil",
      useraddress: "123 MG Road",
      usercity: "Pune",
      userstate: "MH",
      usercontact: "9876543210",
      useremail: "sanket.patil@email.com",
      useradhaar: "123412341234",
      userpan: "ABCDE1234F",
      userbank: "State Bank of India",
      userbranch: "Pune Main",
      useraccount: "123456789012",
      userifsc: "SBIN0001234",
      guarantorfirstname: "Ramesh",
      guarantorlastname: "Patil",
      guarantoraddress: "45 MG Road",
      guarantorcity: "Pune",
      guarantorstate: "MH",
      guarantorcontact: "9123456780",
      guaranteoremail: "ramesh.patil@email.com",
      guarantoradhaar: "432143214321",
      guarantorpan: "XYZAB1234K",
      guarantorbank: "HDFC Bank",
      guarantorbranch: "Pune Main",
      guarantoraccount: "987654321098",
      guarantorifsc: "HDFC0005678",
      loandate: "2025-01-01",
      loanamt: "500000",
      loanfirstname:"Sanket",
      loanperoid: "24 months",
      loanenddate: "2027-01-01",
      loaninterest: "7%",
      loaninterestamt: "70000"
    },
    {
      id: 2,
      userfirstname: "Sumant",
      userlastname: "Adky",
      useraddress: "56 FC Road",
      usercity: "Pune",
      userstate: "MH",
      usercontact: "9988776655",
      useremail: "sumant.adky@email.com",
      useradhaar: "567856785678",
      userpan: "QWERT1234Y",
      userbank: "ICICI Bank",
      userbranch: "Pune Main",
      useraccount: "234567890123",
      userifsc: "ICIC0005678",
      guarantorfirstname: "Suresh",
      guarantorlastname: "Adky",
      guarantoraddress: "78 FC Road",
      guarantorcity: "Pune",
      guarantorstate: "MH",
      guarantorcontact: "9876654321",
      guaranteoremail: "suresh.adky@email.com",
      guarantoradhaar: "876587658765",
      guarantorpan: "LMNOP1234Z",
      guarantorbank: "Axis Bank",
      guarantorbranch: "Pune Main",
      guarantoraccount: "876543210987",
      guarantorifsc: "UTIB0001234",
      loandate: "2024-06-15",
      loanamt: "300000",
      loanfirstname:"Sumant",
      loanperoid: "12 months",
      loanenddate: "2025-06-15",
      loaninterest: "6.5%",
      loaninterestamt: "19500"
    },
    {
      id: 3,
      userfirstname: "Kiran",
      userlastname: "Shah",
      useraddress: "89 Baner Road",
      usercity: "Pune",
      userstate: "MH",
      usercontact: "9123456789",
      useremail: "kiran.shah@email.com",
      useradhaar: "345634563456",
      userpan: "ASDFG1234H",
      userbank: "Kotak Bank",
      userbranch: "Baner Branch",
      useraccount: "345678901234",
      userifsc: "KKBK0001234",
      guarantorfirstname: "Manish",
      guarantorlastname: "Shah",
      guarantoraddress: "12 Baner Road",
      guarantorcity: "Pune",
      guarantorstate: "MH",
      guarantorcontact: "9012345678",
      guaranteoremail: "manish.shah@email.com",
      guarantoradhaar: "654365436543",
      guarantorpan: "QAZWS1234E",
      guarantorbank: "HDFC Bank",
      guarantorbranch: "Baner Branch",
      guarantoraccount: "765432109876",
      guarantorifsc: "HDFC0006789",
      loandate: "2025-03-01",
      loanamt: "400000",
      loanfirstname:"Kiran",
      loanperoid: "18 months",
      loanenddate: "2026-09-01",
      loaninterest: "7.2%",
      loaninterestamt: "28800"
    },
    {
      id: 4,
      userfirstname: "Sharanu",
      userlastname: "Patil",
      useraddress: "101 Wakad Road",
      usercity: "Pune",
      userstate: "MH",
      usercontact: "9876501234",
      useremail: "sharanu.patil@email.com",
      useradhaar: "456745674567",
      userpan: "ZXCVB1234T",
      userbank: "SBI",
      userbranch: "Wakad Branch",
      useraccount: "456789012345",
      userifsc: "SBIN0005678",
      guarantorfirstname: "Rajesh",
      guarantorlastname: "Patil",
      guarantoraddress: "23 Wakad Road",
      guarantorcity: "Pune",
      guarantorstate: "MH",
      guarantorcontact: "9988771234",
      guaranteoremail: "rajesh.patil@email.com",
      guarantoradhaar: "567856785678",
      guarantorpan: "PLMKO1234N",
      guarantorbank: "Axis Bank",
      guarantorbranch: "Wakad Branch",
      guarantoraccount: "654321098765",
      guarantorifsc: "UTIB0006789",
      loandate: "2024-12-01",
      loanamt: "250000",
      loanfirstname:"Sharanu",
      loanperoid: "12 months",
      loanenddate: "2025-12-01",
      loaninterest: "6.8%",
      loaninterestamt: "17000"
    },
  ]);

  return loading ? (
    <ShowLoading />
  ) : (
    <>
      <StaffHome />
      <div className="body-container">
        <h1 className="customerlist-title">Loan Details Table</h1>
        <div className="customerlist-table-container">
          <table border="1" className="customerlist-table">
            <thead>
              <tr>
                <th>Slno</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Aadhaar</th>
                <th>PAN</th>
                <th>Bank Name</th>
                <th>Branch Name</th>
                <th>Account No</th>
                <th>IFSC</th>
                <th>Guarantor First Name</th>
                <th>Guarantor Last Name</th>
                <th>Guarantor Address</th>
                <th>Guarantor City</th>
                <th>Guarantor State</th>
                <th>Guarantor Contact</th>
                <th>Guarantor Email</th>
                <th>Guarantor Aadhaar</th>
                <th>Guarantor PAN</th>
                <th>Guarantor Bank Name</th>
                <th>Guarantor Branch Name</th>
                <th>Guarantor Account No</th>
                <th>Guarantor IFSC</th>
                <th>Loan Date</th>
                <th>Loan Amount</th>
                <th>Loan Firstname</th>
                <th>Loan Period</th>
                <th>Loan End Date</th>
                <th>Interest</th>
                <th>Interest Amount</th>
              </tr>
            </thead>
            <tbody>
              {loanDetails.map((detail) => (
                <tr key={detail.id}>
                  <td>{detail.id}</td>
                  <td>{detail.userfirstname}</td>
                  <td>{detail.userlastname}</td>
                  <td>{detail.useraddress}</td>
                  <td>{detail.usercity}</td>
                  <td>{detail.userstate}</td>
                  <td>{detail.usercontact}</td>
                  <td>{detail.useremail}</td>
                  <td>{detail.useradhaar}</td>
                  <td>{detail.userpan}</td>
                  <td>{detail.userbank}</td>
                  <td>{detail.userbranch}</td>
                  <td>{detail.useraccount}</td>
                  <td>{detail.userifsc}</td>
                  <td>{detail.guarantorfirstname}</td>
                  <td>{detail.guarantorlastname}</td>
                  <td>{detail.guarantoraddress}</td>
                  <td>{detail.guarantorcity}</td>
                  <td>{detail.guarantorstate}</td>
                  <td>{detail.guarantorcontact}</td>
                  <td>{detail.guaranteoremail}</td>
                  <td>{detail.guarantoradhaar}</td>
                  <td>{detail.guarantorpan}</td>
                  <td>{detail.guarantorbank}</td>
                  <td>{detail.guarantorbranch}</td>
                  <td>{detail.guarantoraccount}</td>
                  <td>{detail.guarantorifsc}</td>
                  <td>{detail.loandate}</td>
                  <td>{detail.loanamt}</td>
                  <td>{detail.loanfirstname}</td>
                  <td>{detail.loanperoid}</td>
                  <td>{detail.loanenddate}</td>
                  <td>{detail.loaninterest}</td>
                  <td>{detail.loaninterestamt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CustomerList;