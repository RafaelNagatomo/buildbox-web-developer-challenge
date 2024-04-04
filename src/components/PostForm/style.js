import styled from "styled-components";

const PostFormContainer = styled.div`
  width: 516px;
  height: 354px;
  background-color: #313131;
  padding: 0 23px 23px 23px;
  margin: 41px 0 56px 0;
  border-radius: 3px;
  border: solid 1px #3b3b3b;

  h3 {
    color: #5f5f5f;
    font-size: 12px;
    text-decoration: underline;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputName = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  font-size: 14px;
  margin: 16px 0 0px;
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
  color: #f6f6f6;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const ImgPlaceholder = styled.img`
  width: 88px;
  height: 88px;
`;

const TrashIcon = styled.img`
  position: relative;
  left: 294px;
  top: 62px;
`;

export {
  PostFormContainer,
  InputName,
  InputText,
  ButtonContainer,
  ImgPlaceholder,
  TrashIcon,
  ImgContainer,
};
