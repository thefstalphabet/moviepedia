import styled from "styled-components";
import { LogIn } from "../components";

export default function Enter() {
  return (
    <Container>
      <LogIn />
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
