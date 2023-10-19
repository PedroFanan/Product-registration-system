import { render, screen } from '@testing-library/react'; // Importa as funções de teste do React
import App from './App'; // Importa o componente App a ser testado

test('renders learn react link', () => {
  render(<App />); // Renderiza o componente App para testá-lo
  const linkElement = screen.getByText(/learn react/i); // Procura o elemento de texto que contenha a expressão regular 'learn react' (case-insensitive)
  expect(linkElement).toBeInTheDocument(); // Verifica se o elemento de texto foi encontrado e está presente no documento
});
