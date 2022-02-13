import styled from "styled-components";

export default function Loader() {
  return (
    <Container>
      <Loading>
        <Circle></Circle>
      </Loading>
    </Container>
  );
}
// Styling
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Loading = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const Circle = styled.div`
  border: 5px solid var(--white-color);
  border-radius: 50%;
  border-top: 7px solid var(--main-color);
  width: 80px;
  height: 80px;
  animation: spin 1.5s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;