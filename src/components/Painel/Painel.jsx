import { useState } from "react";
import FeedItem from "../FeedItem/FeedItem";
import PostForm from "../PostForm/PostForm";

import { FeedContainer, PainelContainer } from "./style";

const Painel = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      nameValue: "John",
      textValue:
        "Aqui daremos continuidade a sua candidatura à vaga de desenvolvedor FULL STACK JAVASCRIPT na Buildbox.",
    },
    {
      id: 2,
      nameValue: "Pit",
      textValue:
        "Para te conhecermos melhor, escreva sobre você. O que te motiva, quais são seus projetos, seus sonhos e como se vê daqui 5 anos.",
    },
  ]);

  const addPost = (nameValue, textValue) => {
    const newPosts = [
      ...posts,
      {
        id: Math.floor(Math.random() * 1000),
        nameValue,
        textValue,
      },
    ];

    setPosts(newPosts);
  };

  const removePost = (id) => {
    const newPosts = [...posts];
    const filteredPosts = newPosts.filter((post) =>
      posts.id !== id ? post : null
    );
    setPosts(filteredPosts);
  };

  return (
    <PainelContainer>
      <PostForm addPost={addPost} />
      <h2>Feed</h2>
      <FeedContainer>
        <FeedItem key={posts.id} posts={posts} removePost={removePost} />
      </FeedContainer>
    </PainelContainer>
  );
};

export default Painel;
