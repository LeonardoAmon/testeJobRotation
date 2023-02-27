const faturamentoMensal = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  const faturamentoTotal = Object.values(faturamentoMensal).reduce((total, valor) => total + valor, 0);
  
  const percentuais = {};
  for (const estado in faturamentoMensal) {
    percentuais[estado] = (faturamentoMensal[estado] / faturamentoTotal) * 100;
  }
  
  console.log("Percentual de representação de cada estado no faturamento total mensal:");
  for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
  }
  