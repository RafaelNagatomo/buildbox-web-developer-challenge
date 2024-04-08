import { useState } from "react";
import Button from "../Button/Button";

import imgPlaceholder from "../../assets/images/img-placeholder.png";
import trashIcon from "../../assets/images/trash.png";

import {
  PostFormContainer,
  ImgUpload,
  InputName,
  InputText,
  ButtonContainer,
  ImgPlaceholder,
  TrashIcon,
  ImgContainer,
} from "./style";

const PostForm = ({ addPost }) => {
  const [nameValue, setNameValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [visibleInvisible, setVisibleInvisible] = useState(false);
  const [buttonGreen, setButtonGreen] = useState(false);
  const [image, setImage] = useState("");

  const onChangeName = (e) => {
    setButtonGreen(e !== "");
    setNameValue(e.target.value);
  };

  const onChangeText = (e) => {
    setButtonGreen(e !== "");
    setTextValue(e.target.value);
  };

  const emptyValues = () => {
    setNameValue("");
    setTextValue("");
    setButtonGreen("");
  };

  const emptyImg = () => {
    setImage("");
    setVisibleInvisible("");
  };

  const handleAddPost = () => {
    addPost(nameValue, textValue);
    emptyValues();
    emptyImg();
    setButtonGreen("");
  };

  const handleImageChange = (e) => {
    setVisibleInvisible(e !== "");
    setImage(e.target.files[0]);
  };

  return (
    <PostFormContainer>
      <ImgContainer>
        <ImgUpload type="file" onChange={handleImageChange} />
        <TrashIcon
          src={trashIcon}
          alt="trash-icon"
          className={visibleInvisible ? "block" : "none"}
          onClick={emptyImg}
        />
        {image ? (
          <ImgPlaceholder src={URL.createObjectURL(image)} alt="user-img" />
        ) : (
          <ImgPlaceholder src={imgPlaceholder} alt="img-placeholder" />
        )}
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
        value={textValue}
        placeholder="Mensagem"
        onChange={onChangeText}
      />
      <ButtonContainer>
        <h3 onClick={emptyValues}>Descartar</h3>
        <Button onClick={handleAddPost} buttonGreen={buttonGreen}>
          Publicar
        </Button>
      </ButtonContainer>
    </PostFormContainer>
  );
};

export default PostForm;
