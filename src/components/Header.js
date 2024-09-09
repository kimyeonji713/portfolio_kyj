import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 60px;
  padding: 20px 25px;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 35px;
  font-family: "Black Han Sans", sans-serif;
`;
const Name = styled.div`
  font-size: 18px;
  letter-spacing: -1px;
`;

export const Header = () => {
  return (
    <Container>
      <Wrap>
        <Logo>PORTFOLIO</Logo>
        <Name>KIM YEONJI</Name>
      </Wrap>
    </Container>
  );
};
