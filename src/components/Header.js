import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 60px;
  padding: 30px 25px;
  background-color: #000;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  &.active {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: #000;
  }
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
  const [scrollPostion, setScrollPosition] = useState(0);

  const scrollHandler = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    setScrollPosition(scrollPostion);
  });
  return (
    <Container
      className={scrollPostion < 100 ? "" : "active"}
      onScroll={scrollHandler}
    >
      <Logo>PORTFOLIO</Logo>
      <Name>KIM YEONJI</Name>
    </Container>
  );
};
