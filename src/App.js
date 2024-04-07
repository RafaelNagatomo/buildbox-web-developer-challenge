import Header from "./components/Header/Header";
import Painel from "./components/Painel/Painel";

import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Painel />
    </div>
  );
}

export default App;
