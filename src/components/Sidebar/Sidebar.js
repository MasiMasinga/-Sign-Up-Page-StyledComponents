import React from "react";
import { Container, LogoWrapper, Form, Terms } from "./Sidebar.styled";
import logo from "../../assets/images/logo.svg";
import Input from "../Input/Input";

const Sidebar = () => {
  return (
    <Container>
      {" "}
      <LogoWrapper>
        <img src={logo} alt="" />
        <h3>
          Masi <span>Codes</span>
        </h3>
      </LogoWrapper>
      <Form>
        <h3>Sign Up</h3>
        <Input placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confrim Password" />
        <button>Sign Up</button>
      </Form>
      <div>
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
        <h4>
          Already have an account? <span>Sign In</span>
        </h4>
      </div>
    </Container>
  );
};

export default Sidebar;
