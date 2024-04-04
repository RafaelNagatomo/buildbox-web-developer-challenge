import styled from "styled-components";

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: #2b2b2b;
  padding: 24px;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const LogoStyle = styled.img`
  width: 103px;
  height: 45px;
`;

export { LogoStyle, HeaderStyle };
