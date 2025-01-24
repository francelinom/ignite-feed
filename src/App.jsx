import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import style from "./App.module.css";
import "./index.css";

function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post author="Francelino Marcílio" content="Meu primeiro post" />
          <Post author="Milene Gomes" content="Meu segundo post" />
        </main>
      </div>
    </div>
  );
}

export default App;
