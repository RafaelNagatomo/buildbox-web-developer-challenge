import { IoIosCloseCircleOutline } from "react-icons/io";

import imgPlaceholder from "../../assets/images/img-placeholder.png";
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
          <UserImg
            src={
              localStorage.getItem(post.image)
                ? localStorage.getItem(post.image)
                : imgPlaceholder
            }
            alt="user-img"
          />
          <FeedCardInfo>
            <IoIosCloseCircleOutline
              onClick={() => removePost(post.id)}
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
