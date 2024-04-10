import styled from "styled-components";

const PainelContainer = styled.div`
  width: 516px;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 520px) {
    width: 100%;
    justify-content: center;
  }

  h2 {
    font-size: 14px;
    color: #7a7a7a;
    margin-bottom: 8px;
  }
`;

export { PainelContainer };
