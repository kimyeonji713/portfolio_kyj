import styled from "styled-components";

const BtnWrap = styled.button`
  all: unset;
  padding: 15px 5px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 20px;
  font-weight: 600;
  background-color: white;
  border: none;
  color: #000;
  cursor: pointer;
  z-index: 10;
  border-radius: 10px;
`;

export const TopButton = () => {
  const topHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return <BtnWrap onClick={topHandler}>TOP</BtnWrap>;
};
