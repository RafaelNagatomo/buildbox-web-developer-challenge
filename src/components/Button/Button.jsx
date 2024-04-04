import { ButtonStyle } from "./style";

const Button = ({ onClick, children }) => {
  return (
    <ButtonStyle className="publish-button" onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
