import './Layout.css';
import Sidebar from '../Layout/Sidebar'; 
import Header from '../Layout/Header';

function Layout({ children, title }) {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-wrapper">
        <Header title={title} />
        <main className="content-area">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;