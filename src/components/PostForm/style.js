import styled from "styled-components";

const PostFormContainer = styled.div`
  width: 516px;
  height: 353px;
  background-color: #313131;
  padding: 24px;
  margin-top: 41px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputName = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  font-size: 14px;
  margin: 16px 0 8px;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: #494949;
  color: #f6f6f6;
`;

const InputText = styled.textarea`
  width: 100%;
  height: 80px;
  resize: none;
  outline: none;
  font-size: 14px;
  margin: 8px 0 32px;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: #494949;
  display: flex;
  align-items: start;
  color: #f6f6f6;
`;

const H3 = styled.h3`
  color: #5f5f5f;
  font-size: 12px;
  text-decoration: underline;
`;

const ButtonContainer = styled.div`
  width: 100%;
  /* height: 30%; */
  display: flex;
  align-items: center;
  justify-content: end;
`;
export { PostFormContainer, InputName, InputText, ButtonContainer, H3 };
