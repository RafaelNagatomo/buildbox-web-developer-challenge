import { ButtonStyle } from "./style";

const Button = ({ onClick, children, buttonGreen }) => {
  return (
    <ButtonStyle className={buttonGreen ? "bg-green" : ""} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
