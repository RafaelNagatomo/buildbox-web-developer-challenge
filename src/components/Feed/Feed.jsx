import FeedItem from "../FeedItem/FeedItem";

import { FeedContainer } from "./style";

const Feed = () => {
  return (
    <FeedContainer>
      <h2>Feed</h2>
      <FeedItem />
      <FeedItem />
      <FeedItem />
    </FeedContainer>
  );
};

export default Feed;
