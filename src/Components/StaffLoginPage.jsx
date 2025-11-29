import React, { useState } from "react";
import { Container, FormWrapper, Title, Label, Input, Button } from "../cssFiles/StaffLoginPage";
import { useNavigate } from "react-router-dom";
import HomePageMenu from "./HomePageMenu";

const StaffLoginPage = () => {
  // Prefilled login credentials
  const [staff, setStaff] = useState({
    staffname: "admin",
    staffpassword: "admin123"
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaff((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submit = () => {
    // Static credentials check
    if (staff.staffname === "admin" && staff.staffpassword === "admin123") {
      alert("Login successful!");
      navigate("/staffwelcome");
    } else {
      alert("Wrong user credentials");
    }
  };

  return (
    <>
      <HomePageMenu />
      <Container>
        <FormWrapper>
          <Title>Staff Login</Title>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            placeholder="Email or Phone"
            name="staffname"
            id="username"
            value={staff.staffname}
            onChange={handleChange}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            placeholder="Password"
            name="staffpassword"
            id="password"
            value={staff.staffpassword}
            onChange={handleChange}
          />
          <Button onClick={submit}>Log In</Button>
        </FormWrapper>
      </Container>
    </>
  );
};

export default StaffLoginPage;
