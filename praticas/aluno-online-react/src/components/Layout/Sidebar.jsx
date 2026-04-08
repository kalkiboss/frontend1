import './Sidebar.css';

function Sidebar() {
  return (
    <>
      <input type="checkbox" id="menu-toggle" className="menu-input" />
      <label htmlFor="menu-toggle" className="hamburger">
        <span></span>
      </label>

      <aside className="sidebar">
        <div className="logo-section">
          <div className="logo-icon">🎓</div>
          <span>Aluno Online</span>
        </div>
        <nav className="menu">
          <ul>
            <li className="active">Dashboard</li>
            <li>Notas</li>
            <li>Faltas</li>
            <li>Boletos</li>
            <li>Requerimentos</li>
            <li className="logout">Sair</li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;