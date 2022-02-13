import styled from "styled-components";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";
import { getUser } from "../redux/reducers/userReducer";
import moment from "moment";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Profile() {
  const user = useSelector(getUser);

  const [file, setFile] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const URL =
      process.env.NODE_ENV === "development"
        ? `${process.env.REACT_APP_DEV_API_URL}/api/avatar`
        : `${process.env.REACT_APP_PRO_API_URL}/api/avatar`;
    const formData = new FormData();
    formData.append("avatar", file);
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access token")}`,
      },
      body: formData,
    });
    if (response.status) {
      alert("Uploaded Sucessfully");
    }
  };

  return (
    <>
      {!localStorage.getItem("access token") && <Navigate to="/login" />}
      <Container>
        <Header>
          <Nav />
        </Header>
        <Body>
          <div>
            {user.avatar ? (
              <img src={user.avatar} alt="profile-pic" />
            ) : (
              <img src="/assets/images/no-avatar.svg" alt="profile-pic" />
            )}
          </div>
          <div>
            <p>
              <span>Name: </span>
              {user.name}
            </p>
            <p>
              <span>Email: </span>
              {user.email}
            </p>
            <p>
              <span>Register on: </span>
              {moment(user.joinAt).format("Do MMMM YYYY")}
            </p>
            <UploadImg onSubmit={handleSubmit}>
              <input
                type="file"
                name="avatar"
                accept="image/gif, image/jpeg, image/jpg, image/png"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <button type="submit">Submit</button>
            </UploadImg>
          </div>
        </Body>
      </Container>
    </>
  );
}
// Styling
const Container = styled.div`
  padding: 10px;
`;
const Header = styled.div``;
const Body = styled.div`
  display: grid;
  text-align: center;
  grid-row-gap: 40px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin-top: 70px;
  line-height: 2;
  align-items: center;
  div:first-child {
    img {
      width: 200px;
      border-radius: 50%;
    }
  }
  div:nth-child(2) {
    text-align: left;
    span {
      font-size: 18px;
      font-weight: 700;
    }
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    div:nth-child(2) {
      text-align: center;
    }
  }
`;
const UploadImg = styled.form``;
