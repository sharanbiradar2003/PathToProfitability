import React, { useState, useEffect } from "react";
import "../../cssFiles/CustomerList.css";
import AdminMenu from "../AdminFiles/AdminMenu";

export const ShowLoading = () => {
  return (
    <h1 style={{ textAlign: "center", color: "blue", fontSize: "2em" }}>
      Loading
    </h1>
  );
};

function CustomerList() {
  const [loading, setLoading] = useState(true);
  const [loanDetails, setLoanDetails] = useState([]);

  useEffect(() => {
    // Instead of fetching from API, set static data
    const staticData = [
      {
        id: 1,
        userfirstname: "Sanket",
        userlastname: "Patil",
        loantype: "Home Loan",
        useraddress: "123 MG Road",
        usercity: "Pune",
        userstate: "Maharashtra",
        usercontact: "9876543210",
        useremail: "sanket.patil@example.com",
        useradhaar: "1234-5678-9012",
        userpan: "ABCDE1234F",
        userbank: "SBI",
        userbranch: "Pune Camp",
        useraccount: "12345678901",
        userifsc: "SBIN0001234",
        guarantorfirstname: "Ramesh",
        guarantorlastname: "Sharma",
        guarantoraddress: "456 Market Street",
        guarantorcity: "Mumbai",
        guarantorstate: "Maharashtra",
        guarantorcontact: "9123456780",
        guaranteoremail: "ramesh.sharma@example.com",
        guarantoradhaar: "2345-6789-0123",
        guarantorpan: "PQRSX5678Y",
        guarantorbank: "HDFC",
        guarantorbranch: "Mumbai Central",
        guarantoraccount: "98765432109",
        guarantorifsc: "HDFC0005678",
        loandate: "2024-01-15",
        loanamt: "25,00,000",
        loanfirstname: "Sanket",
        loanperoid: "15 years",
        loanenddate: "2039-01-15",
        loaninterest: "7%",
        loaninterestamt: "12,00,000",
      },
      {
        id: 2,
        userfirstname: "Sumant",
        userlastname: "Adky",
        loantype: "Car Loan",
        useraddress: "78 Shivaji Nagar",
        usercity: "Nagpur",
        userstate: "Maharashtra",
        usercontact: "9823456710",
        useremail: "sumant.adky@example.com",
        useradhaar: "3456-7890-1234",
        userpan: "LMNOP9876Z",
        userbank: "ICICI",
        userbranch: "Nagpur Main",
        useraccount: "112233445566",
        userifsc: "ICIC0006789",
        guarantorfirstname: "Suresh",
        guarantorlastname: "Patil",
        guarantoraddress: "9 Gandhi Road",
        guarantorcity: "Nagpur",
        guarantorstate: "Maharashtra",
        guarantorcontact: "9876001112",
        guaranteoremail: "suresh.patil@example.com",
        guarantoradhaar: "4567-8901-2345",
        guarantorpan: "TUVWX1111K",
        guarantorbank: "Axis Bank",
        guarantorbranch: "Nagpur South",
        guarantoraccount: "556677889900",
        guarantorifsc: "UTIB0002345",
        loandate: "2023-07-10",
        loanamt: "8,00,000",
        loanfirstname: "Sumant",
        loanperoid: "5 years",
        loanenddate: "2028-07-10",
        loaninterest: "9%",
        loaninterestamt: "1,80,000",
      },
      {
        id: 3,
        userfirstname: "Kiran",
        userlastname: "Shetty",
        loantype: "Personal Loan",
        useraddress: "55 Ring Road",
        usercity: "Bengaluru",
        userstate: "Karnataka",
        usercontact: "9911223344",
        useremail: "kiran.shetty@example.com",
        useradhaar: "5678-9012-3456",
        userpan: "XYZAB2222Q",
        userbank: "Canara Bank",
        userbranch: "Bengaluru Main",
        useraccount: "445566778899",
        userifsc: "CNRB0001122",
        guarantorfirstname: "Anil",
        guarantorlastname: "Kumar",
        guarantoraddress: "Indiranagar",
        guarantorcity: "Bengaluru",
        guarantorstate: "Karnataka",
        guarantorcontact: "9001112233",
        guaranteoremail: "anil.kumar@example.com",
        guarantoradhaar: "6789-0123-4567",
        guarantorpan: "QWERT3333L",
        guarantorbank: "Kotak Mahindra",
        guarantorbranch: "MG Road",
        guarantoraccount: "778899001122",
        guarantorifsc: "KKBK0004455",
        loandate: "2022-05-20",
        loanamt: "3,50,000",
        loanfirstname: "Kiran",
        loanperoid: "3 years",
        loanenddate: "2025-05-20",
        loaninterest: "11%",
        loaninterestamt: "1,05,000",
      },
      {
        id: 4,
        userfirstname: "Sharanu",
        userlastname: "Naik",
        loantype: "Education Loan",
        useraddress: "12 College Road",
        usercity: "Hubli",
        userstate: "Karnataka",
        usercontact: "9876123450",
        useremail: "sharanu.naik@example.com",
        useradhaar: "6789-0123-4567",
        userpan: "ASDFG4444M",
        userbank: "Bank of Baroda",
        userbranch: "Hubli Main",
        useraccount: "334455667788",
        userifsc: "BARB0003344",
        guarantorfirstname: "Vijay",
        guarantorlastname: "Naik",
        guarantoraddress: "Gokul Road",
        guarantorcity: "Hubli",
        guarantorstate: "Karnataka",
        guarantorcontact: "9876443211",
        guaranteoremail: "vijay.naik@example.com",
        guarantoradhaar: "7890-1234-5678",
        guarantorpan: "ZXCVB5555R",
        guarantorbank: "Union Bank",
        guarantorbranch: "Hubli Central",
        guarantoraccount: "112244668899",
        guarantorifsc: "UBIN0005566",
        loandate: "2021-09-01",
        loanamt: "12,00,000",
        loanfirstname: "Sharanu",
        loanperoid: "10 years",
        loanenddate: "2031-09-01",
        loaninterest: "6.5%",
        loaninterestamt: "4,50,000",
      },
    ];

    setTimeout(() => {
      setLoanDetails(staticData);
      setLoading(false);
    }, 1000); // simulate loading
  }, []);

  return loading ? (
    <ShowLoading />
  ) : (
    <>
      <AdminMenu />
      <div className="body-container" style={{ fontWeight: "bold" }}>
        <h1 className="customerlist-title">Loan Details Table</h1>
        <div className="customerlist-table-container">
          <table border="1" className="customerlist-table">
            <thead>
              <tr>
                <th>Slno</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Loan Type</th>
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
              {loanDetails.map((detail, index) => (
                <tr key={index}>
                  <td>{detail.id}</td>
                  <td>{detail.userfirstname}</td>
                  <td>{detail.userlastname}</td>
                  <td>{detail.loantype}</td>
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
