import Button from "../Button/Button";

import imgPlaceholder from "../../assets/images/img-placeholder.png";

import {
  PostFormContainer,
  InputName,
  InputText,
  ButtonContainer,
  H3,
  ImgPlaceholder,
} from "./style";

const PostForm = ({ nameValue, textValue }) => {
  return (
    <PostFormContainer>
      <ImgPlaceholder src={imgPlaceholder} alt="IMG-PLACEHOLDER" />
      <InputName
        type="text"
        className="post-name"
        value={nameValue}
        placeholder="Digite seu nome"
      />
      <InputText
        type="text"
        className="post-text"
        value={textValue}
        placeholder="Mensagem"
      />
      <ButtonContainer>
        <H3>Descartar</H3>
        <Button />
      </ButtonContainer>
    </PostFormContainer>
  );
};

export default PostForm;
