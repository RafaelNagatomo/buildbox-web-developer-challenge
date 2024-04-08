import styled from "styled-components";

const PostFormContainer = styled.div`
  width: 516px;
  height: 354px;
  background-color: #313131;
  padding: 23px 23px 23px 23px;
  margin: 134px 0 56px 0;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  position: relative;

  .none {
    display: none;
  }

  .bg-green {
    color: #f6f6f6;
    background-color: green;
    transition-duration: 1s;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const TrashIcon = styled.img`
  position: absolute;
  left: 294px;
  top: 32px;
  cursor: pointer;
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

  h3 {
    color: #5f5f5f;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ImgUpload = styled.input`
  opacity: 0;
  width: 85px;
  height: 100px;
  z-index: 2;
  position: absolute;
  bottom: 0px;
  border-radius: 35px;
  cursor: pointer;
`;

const ImgPlaceholder = styled.img`
  width: 88px;
  height: 88px;
`;

export {
  PostFormContainer,
  ImgUpload,
  InputName,
  InputText,
  ButtonContainer,
  ImgPlaceholder,
  TrashIcon,
  ImgContainer,
};
