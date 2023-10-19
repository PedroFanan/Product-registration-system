// Define a função reportWebVitals que mede o desempenho da aplicação
const reportWebVitals = onPerfEntry => {
  // Verifica se onPerfEntry é uma função válida
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Importa o módulo 'web-vitals' de forma dinâmica
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Chama as funções do módulo 'web-vitals' para medir os diferentes aspectos do desempenho
      getCLS(onPerfEntry); // Mede Cumulative Layout Shift (Mudança de Layout Cumulativa)
      getFID(onPerfEntry); // Mede First Input Delay (Atraso do Primeiro Input)
      getFCP(onPerfEntry); // Mede First Contentful Paint (Primeira Pintura de Conteúdo)
      getLCP(onPerfEntry); // Mede Largest Contentful Paint (Maior Pintura de Conteúdo)
      getTTFB(onPerfEntry); // Mede Time to First Byte (Tempo até o Primeiro Byte)
    });
  }
};

// Exporta a função reportWebVitals para que ela possa ser usada em outros locais da aplicação
export default reportWebVitals;
