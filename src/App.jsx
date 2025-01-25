import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import style from "./App.module.css";
import "./index.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/francelinom.png",
      name: "Francelino Marcílio",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa!" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2025-01-23 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/milenegomesdev.png",
      name: "Milene Gomes",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa!" },
      {
        type: "paragraph",
        content:
          "Estou cursando Análise e desenvolvimento de sistemas na Estácio. É um projeto que fiz no NLW Return, evento da Rocketseat.🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2025-01-25 10:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
