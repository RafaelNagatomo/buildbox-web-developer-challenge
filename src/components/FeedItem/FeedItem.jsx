import { IoIosCloseCircleOutline } from "react-icons/io";

import userImg from "../../assets/images/photo-base1.png";
import {
  FeedItemContainer,
  FeedItemCard,
  UserImg,
  FeedCardInfo,
} from "./style";

const FeedItem = ({ posts, removePost }) => {
  return (
    <FeedItemContainer>
      {posts.map((post) => (
        <FeedItemCard key={post.id}>
          <UserImg src={userImg} alt="user-img" />
          <FeedCardInfo>
            <IoIosCloseCircleOutline
              onClick={() => removePost(posts.id)}
              className="iconeClose"
              size={20}
              color="#D65923"
            />
            <p>{post.textValue}</p>
            <span>Enviado por</span>
            <h3>{post.nameValue}</h3>
          </FeedCardInfo>
        </FeedItemCard>
      ))}
    </FeedItemContainer>
  );
};

export default FeedItem;
