import styled from "styled-components";
import { SignUp } from "../components";

export default function Register() {
  return (
    <Container>
      <SignUp />
    </Container>
  );
}
// Styling
const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;
