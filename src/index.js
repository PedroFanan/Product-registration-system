import React from 'react'; // Importa a biblioteca React
import ReactDOM from 'react-dom/client'; // Importa o módulo ReactDOM da biblioteca React
import './index.css'; // Importa o arquivo de estilo CSS
import App from './App'; // Importa o componente App
import reportWebVitals from './reportWebVitals'; // Importa a função reportWebVitals para medir o desempenho

// Cria uma raiz (root) para renderização usando o ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente App dentro de um React.StrictMode na raiz (root)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Se você deseja medir o desempenho em seu aplicativo, pode usar a função reportWebVitals
// para registrar os resultados. Consulte a documentação para obter mais informações.
reportWebVitals();
