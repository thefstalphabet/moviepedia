import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const initialValues = {
  name: "",
  email: "",
  password: "",
  conformPassword: "",
};
export default function SignUp() {
  const navigate = useNavigate();

  // STATES **********
  const [values, setValues] = useState(initialValues);

  // FUNCTIONS **********
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const URL =
      process.env.NODE_ENV === "development"
        ? `${process.env.REACT_APP_DEV_API_URL}/api/register`
        : `${process.env.REACT_APP_PRO_API_URL}/api/register`;
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
        conformPassword: values.conformPassword,
      }),
    });
    response.json().then((data) => {
      if (data.message === "Registered sucessfully") {
        navigate("/login");
      } else {
        alert(data.message);
      }
    });
  };
  return (
    <Container>
      <Header>
        <h2>Sign Up</h2>
      </Header>
      <Body>
        <input
          name="name"
          placeholder="Name"
          type="text"
          value={values.name}
          onChange={handleInputChange}
          autoComplete="current-name"
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={values.email}
          onChange={handleInputChange}
          autoComplete="current-email"
        />
        <input
          name="password"
          placeholder="Password min 8 character"
          type="password"
          value={values.password}
          onChange={handleInputChange}
          autoComplete="current-password"
        />
        <input
          name="conformPassword"
          placeholder="Conform password"
          type="password"
          value={values.conformPassword}
          onChange={handleInputChange}
          autoComplete="current-conformPassword"
        />
      </Body>
      <Footer>
        <Button type="submit" onClick={handleSubmit}>
          Sign Up
        </Button>
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </Footer>
    </Container>
  );
}
// Styling
const Container = styled.form`
  padding: 20px;
  width: 400px;
  text-align: center;
  margin: auto;
`;
const Header = styled.div`
  margin-bottom: 30px;
  h2 {
    font-size: 30px;
  }
`;
const Body = styled.div`
  input {
    display: block;
    font-size: 16px;
    padding: 8px;
    margin-bottom: 10px;
    outline: none;
    width: 100%;
    border-radius: 15px;
    border: 1px solid var(--dark-color);
    background-color: transparent;
  }
  input:nth-child(4) {
    margin-bottom: 0;
  }
`;
const Footer = styled.div`
  margin-top: 20px;
  p {
    margin-top: 10px;
    font-size: 16px;
  }
`;
const Button = styled.button`
  padding: 8px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  background-color: var(--main-color);
  border: none;
  outline: none;
  color: var(--white-color);
  width: 100%;
  border-radius: 15px;
`;
