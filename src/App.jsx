import { Header } from "./components/Header";

import style from "./App.module.css";
import "./index.css";
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post author="Francelino Marcílio" content="Meu primeiro post"/>
          <Post author="Milene Gomes" content="Meu segundo post"/>
        </main>
      </div>
    </div>
  );
}

export default App;
