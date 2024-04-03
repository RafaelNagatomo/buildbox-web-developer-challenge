import Button from "../Button/Button";

import { PostFormContainer } from "./style";

const PostForm = ({ nameValue, textValue }) => {
  return (
    <PostFormContainer>
      <input
        type="text"
        className="post-name"
        value={nameValue}
        placeholder="Digite seu nome"
      />
      <input
        type="text"
        className="post-text"
        value={textValue}
        placeholder="Digite seu nome"
      />
      <Button />
    </PostFormContainer>
  );
};

export default PostForm;
