import Layout from "../../components/Layout/Layout";
import Card from "../../components/Card";
import "./Notas.css";

function Notas() {
  return (
    <Layout>
      <h1>Minhas Notas</h1>
      <h3>Histórico de Notas por Semestre</h3>
      
      <Card title="2026.1">
        <table>
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>A1</th>
              <th>A2</th>
              <th>A3</th>
              <th>Menção</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BI e Data Warehousing</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>SR</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </Layout>
  );
}

export default Notas;