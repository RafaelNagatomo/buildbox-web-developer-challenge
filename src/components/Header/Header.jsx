import logo from "../../assets/images/bx-logo.png";

import { LogoStyle, HeaderStyle } from "./style";

const Header = () => {
  return (
    <HeaderStyle>
      <LogoStyle src={logo} alt="BUILDBOX LOGO" />;
    </HeaderStyle>
  );
};

export default Header;
