const faturamentoMensal = {
    "2023-02-01": 5000,
    "2023-02-02": 7200,
    "2023-02-03": 6500,
    "2023-02-04": 8800,
    "2023-02-05": 0,
    "2023-02-06": 0,
    "2023-02-07": 4200,
    "2023-02-08": 5100,
    "2023-02-09": 6800,
    "2023-02-10": 7400,
    "2023-02-11": 6000,
    "2023-02-12": 0,
    "2023-02-13": 0,
    "2023-02-14": 8000,
    "2023-02-15": 5300,
    "2023-02-16": 6700,
    "2023-02-17": 9200,
    "2023-02-18": 7500,
    "2023-02-19": 0,
    "2023-02-20": 0,
    "2023-02-21": 4800,
    "2023-02-22": 6900,
    "2023-02-23": 7700,
    "2023-02-24": 8500,
    "2023-02-25": 9200,
    "2023-02-26": 0,
    "2023-02-27": 0,
    "2023-02-28": 9500
  };
  
  const menorFaturamento = Math.min(...Object.values(faturamentoMensal));
  
  const maiorFaturamento = Math.max(...Object.values(faturamentoMensal));
  
  const diasUteis = Object.keys(faturamentoMensal).filter(dia => {
    const data = new Date(dia);
    return data.getDay() !== 0 && data.getDay() !== 6;
  });
  const mediaMensal = diasUteis.reduce((acumulado, dia) => {
    return acumulado + faturamentoMensal[dia];
  }, 0) / diasUteis.length;
  
  const diasAcimaDaMedia = Object.values(faturamentoMensal).filter(valor => {
    return valor > mediaMensal;
  }).length;
  
  console.log(`Menor faturamento: ${menorFaturamento}`);
  console.log(`Maior faturamento: ${maiorFaturamento}`);
  console.log(`Número de dias acima da média: ${diasAcimaDaMedia}`);
  