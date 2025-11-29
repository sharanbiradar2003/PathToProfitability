import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  FormGroup,
  Main,
  Title,
  Label,
  Input,
  PasswordToggleIcon,
  SubmitButton,
  GlobalStyle,
  Main1
} from "../../cssFiles/Admincss";
import AdminNavbar from "./AdminNavbar";

function Signin() {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("Administrator");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // ✅ No API call, just redirect
  const handlesubmit = (event) => {
    event.preventDefault();
    navigate("/adminmenu"); // always redirect
  };

  return (
    <>
      <FormGroup>
        <AdminNavbar />
        <GlobalStyle />
        <Main>
          <Main1>
            <Title>Sign Up</Title>
            <form onSubmit={handlesubmit}>
              <Label htmlFor="username">Username:</Label>
              <Input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <div style={{ position: "relative" }}>
                <Label htmlFor="password">Password:</Label>
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <PasswordToggleIcon onClick={togglePasswordVisibility}>
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </PasswordToggleIcon>
              </div>
              <SubmitButton type="submit">Sign Up</SubmitButton>
            </form>
          </Main1>
        </Main>
      </FormGroup>
    </>
  );
}

export default Signin;
