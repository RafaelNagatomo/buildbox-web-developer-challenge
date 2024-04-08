import { useState } from "react";
import FeedItem from "../FeedItem/FeedItem";
import PostForm from "../PostForm/PostForm";

import { PainelContainer } from "./style";

const Painel = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (nameValue, textValue, image) => {
    const newPosts = [
      ...posts,
      {
        id: Math.floor(Math.random() * 1000),
        nameValue,
        textValue,
        image,
      },
    ];

    setPosts(newPosts);
  };

  const removePost = (id) => {
    const newPosts = [...posts];
    const filteredPosts = newPosts.filter((post) =>
      post.id !== id ? post : null
    );

    setPosts(filteredPosts);
  };

  return (
    <PainelContainer>
      <PostForm addPost={addPost} />
      <h2>Feed</h2>
      <FeedItem posts={posts} removePost={removePost} />
    </PainelContainer>
  );
};

export default Painel;
