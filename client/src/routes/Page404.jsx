import styled from "styled-components";

export default function Page404() {
  return (
    <Container>
      <img src="/assets/images/404.svg" alt="404" />
    </Container>
  );
}
// Styling
const Container = styled.div`
  text-align: center;
  img {
    width: 50%;
  }
`;
