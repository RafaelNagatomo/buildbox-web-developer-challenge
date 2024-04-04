import userImg from "../../assets/images/photo-base1.png";

import { IoIosCloseCircleOutline } from "react-icons/io";
import { FeedItemCard, UserImg, FeedCardInfo } from "./style";

const FeedItem = () => {
  return (
    <FeedItemCard>
      <UserImg src={userImg} alt="user-img" />
      <FeedCardInfo>
        <IoIosCloseCircleOutline
          className="iconeClose"
          size={20}
          color="#D65923"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis
          ligula vel velit scelerisque iaculis. Nam mattis justo id orci
          commodo, eu tempus purus cursus.
        </p>
        <span>Enviado por</span>
        <h3>João da Silva</h3>
      </FeedCardInfo>
    </FeedItemCard>
  );
};

export default FeedItem;
