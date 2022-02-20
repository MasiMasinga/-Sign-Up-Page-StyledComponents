import React from "react";
import { Container, StyledInput, Status } from "./Input.styled";

const Input = ({ type, placeholder }) => {
  return (
    <Container>
      <StyledInput
        placeholder={placeholder && placeholder}
        type={type ? type : "text"}
        required
        autocomplete="off"
      />
      <Status />
    </Container>
  );
};

export default Input;
