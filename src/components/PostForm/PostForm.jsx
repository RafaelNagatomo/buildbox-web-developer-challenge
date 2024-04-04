import { useState } from "react";
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

const PostForm = () => {
  const [nameValue, setNameValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [visibleInvisible, setVisibleInvisible] = useState(false);

  const onChangeName = (e) => {
    setVisibleInvisible(e !== "");
    setNameValue(e.target.value);
  };

  const onChangeText = (e) => {
    setVisibleInvisible(e !== "");
    setTextValue(e.target.value);
  };

  const emptyValues = () => {
    setNameValue("");
    setTextValue("");
    setVisibleInvisible("");
  };

  const handleDiscartValues = () => {
    emptyValues();
  };

  const handlePostAdd = () => {
    console.log(nameValue, textValue);
    emptyValues();
  };

  const handlePostDelete = () => {};

  return (
    <PostFormContainer>
      <ImgContainer>
        <TrashIcon
          src={trashIcon}
          alt="trash-icon"
          className={visibleInvisible ? "block" : "none"}
          onClick={handlePostDelete}
        />
        <ImgPlaceholder src={imgPlaceholder} alt="img-placeholder" />
      </ImgContainer>
      <InputName
        type="text"
        className="post-name"
        value={nameValue}
        placeholder="Digite seu nome"
        onChange={onChangeName}
      />
      <InputText
        type="text"
        className="post-text"
        value={textValue}
        placeholder="Mensagem"
        onChange={onChangeText}
      />
      <ButtonContainer>
        <h3 onClick={handleDiscartValues}>Descartar</h3>
        <Button onClick={handlePostAdd}>Publicar</Button>
      </ButtonContainer>
    </PostFormContainer>
  );
};

export default PostForm;
