import Header from "./components/Header/Header";
import PostForm from "./components/PostForm/PostForm";
import Feed from "./components/Feed/Feed";

import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <PostForm />
      <Feed />
    </div>
  );
}

export default App;
