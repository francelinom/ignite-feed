import style from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=1470&auto=format&fit=crop&w=500&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div>
        <strong>Francelino Marcílio</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="3">Editar seu perfil</a>
      </footer>
    </aside>
  );
}
