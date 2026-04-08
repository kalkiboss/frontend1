import Sidebar from "../../components/Layout/Sidebar";
import Header from "../../components/Layout/Header";

import './Boletos.css';

function Boletos() {
  return (
    <div className="page-container">
      <Sidebar />
      <div className="content-wrapper">
        <Header />
        <main className="main-content">
          <h1>Meus Boletos</h1>
          <section className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Vencimento</th>
                  <th>Valor R$</th>
                  <th>Situação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>19/01/2026</td>
                  <td>500,00</td>
                  <td>Pago</td>
                </tr>
                <tr>
                  <td>19/02/2026</td>
                  <td>500,00</td>
                  <td>Em atraso</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Boletos;