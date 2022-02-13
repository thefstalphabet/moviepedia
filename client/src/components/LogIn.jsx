import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const initialValues = {
  email: "",
  password: "",
};
export default function SignUp() {
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
        ? `${process.env.REACT_APP_DEV_API_URL}/api/login`
        : `${process.env.REACT_APP_PRO_API_URL}/api/login`;
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    });
    response.json().then((data) => {
      if (!data.access_token) {
        alert(data.message);
      } else {
        localStorage.setItem("access token", data.access_token);
        window.location.href = "/dashboard";
      }
    });
  };
  return (
    <Container>
      <Header>
        <h2>Log In</h2>
      </Header>
      <Body>
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
      </Body>
      <Footer>
        <Button type="submit" onClick={handleSubmit}>
          Log In
        </Button>
        <p>
          Not registered yet? <Link to="/register">Sign Up</Link>
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
  input:nth-child(3) {
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
