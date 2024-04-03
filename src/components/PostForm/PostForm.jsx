import Button from "../Button/Button";

import {
  PostFormContainer,
  InputName,
  InputText,
  ButtonContainer,
  H3,
} from "./style";

const PostForm = ({ nameValue, textValue }) => {
  return (
    <PostFormContainer>
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
