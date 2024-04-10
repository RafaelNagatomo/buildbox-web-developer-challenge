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
  const [imageId, setImageId] = useState("");

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
    setImageId("");
    setVisibleInvisible("");
  };

  const handleAddPost = () => {
    if (nameValue === "" || textValue === "") return;
    addPost(nameValue, textValue, imageId);
    emptyValues();
    emptyImg();
    setButtonGreen("");
  };

  function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
      (
        +c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
      ).toString(16)
    );
  }

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      if (reader === "") return;
      reader.readAsDataURL(file);
      reader.onload = () => {
        let encoded = reader.result.toString();

        resolve(encoded);
      };
      reader.onerror = (error) => reject(error);
    });
  }

  const handleImageChange = (e) => {
    getBase64(e.target.files[0]).then((imageBase64) => {
      const uuid = uuidv4();
      localStorage.setItem(uuid, imageBase64);
      setImageId(uuid);
      setVisibleInvisible(e !== "");
    });
  };

  return (
    <PostFormContainer>
      <ImgContainer>
        <div>
          <ImgUpload type="file" onChange={handleImageChange} />
          <TrashIcon
            src={trashIcon}
            alt="trash-icon"
            className={visibleInvisible ? "block" : "none"}
            onClick={emptyImg}
          />
          {imageId ? (
            <ImgPlaceholder
              src={localStorage.getItem(imageId)}
              alt="user-img"
            />
          ) : (
            <ImgPlaceholder src={imgPlaceholder} alt="img-placeholder" />
          )}
        </div>
      </ImgContainer>
      <InputName
        type="text"
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
