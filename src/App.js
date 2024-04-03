import Header from "./components/Header/Header";
import PostForm from "./components/PostForm/PostForm";

import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <PostForm />
    </div>
  );
}

export default App;
