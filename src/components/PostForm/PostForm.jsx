import Button from "../Button/Button";

import imgPlaceholder from "../../assets/images/img-placeholder.png";
import trashIcon from "../../assets/images/trash.png";

import {
  PostFormContainer,
  InputName,
  InputText,
  ButtonContainer,
  ImgPlaceholder,
  TrashIcon,
  ImgContainer,
} from "./style";

const PostForm = ({ nameValue, textValue }) => {
  return (
    <PostFormContainer>
      <TrashIcon src={trashIcon} alt="trash-icon" />
      <ImgContainer>
        <ImgPlaceholder src={imgPlaceholder} alt="img-placeholder" />
      </ImgContainer>
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
        <h3>Descartar</h3>
        <Button>Publicar</Button>
      </ButtonContainer>
    </PostFormContainer>
  );
};

export default PostForm;
