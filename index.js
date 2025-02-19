// Pergunta 1
// Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

let INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;

  console.log(SOMA); // SOMA = 91
}

// Pergunta 2
// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo 
// valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
// escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência 
// de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function fibonacci(n) {
  if (n < 0) return [];

  let sequencia = [0, 1];

  while (sequencia[sequencia.length - 1] < n) {
    sequencia.push(sequencia.at(-1) + sequencia.at(-2));
  }

  return sequencia;
}

function verificaFibonacci(num) {
  const sequencia = fibonacci(num);

  if (sequencia.includes(num)) {
    return `O número ${num} pertence à sequência de Fibonacci!`;
  } else {
    return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
  }
}

// Exemplo de uso:
console.log('----------------------------------');
const numero = 99;
console.log(verificaFibonacci(numero));

// Pergunta 3

// Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const faturamentoMensal = [
  { "dia": 1, "faturamento": 1500 },
  { "dia": 2, "faturamento": 2000 },
  { "dia": 3, "faturamento": 0 },
  { "dia": 4, "faturamento": 1200 },
  { "dia": 5, "faturamento": 1800 },
  { "dia": 6, "faturamento": 2200 },
  { "dia": 7, "faturamento": 0 },
  { "dia": 8, "faturamento": 1600 },
  { "dia": 9, "faturamento": 1900 },
  { "dia": 10, "faturamento": 0 },
  { "dia": 11, "faturamento": 2100 },
  { "dia": 12, "faturamento": 2500 },
  { "dia": 13, "faturamento": 1800 },
  { "dia": 14, "faturamento": 750 },
  { "dia": 15, "faturamento": 0 },
  { "dia": 16, "faturamento": 800 },
  { "dia": 17, "faturamento": 1200 },
  { "dia": 18, "faturamento": 1900 },
  { "dia": 19, "faturamento": 2300 },
  { "dia": 20, "faturamento": 1300 },
  { "dia": 21, "faturamento": 0 },
  { "dia": 22, "faturamento": 0 },
  { "dia": 23, "faturamento": 0 },
  { "dia": 24, "faturamento": 1500 },
  { "dia": 25, "faturamento": 2100 },
  { "dia": 26, "faturamento": 100 },
  { "dia": 27, "faturamento": 300 },
  { "dia": 28, "faturamento": 1300 },
  { "dia": 29, "faturamento": 0 },
  { "dia": 30, "faturamento": 2300 },
  { "dia": 31, "faturamento": 1400 }
];

function calcularFaturamento(faturamentoMensal) {
  const faturamentosValidos = faturamentoMensal.filter(f => f.faturamento > 0);

  // Menor e o maior valor de faturamento
  const menorFaturamento = Math.min(...faturamentosValidos.map(f => f.faturamento));
  const maiorFaturamento = Math.max(...faturamentosValidos.map(f => f.faturamento));

  // Média mensal
  const somaFaturamento = faturamentosValidos.reduce((acc, f) => acc + f.faturamento, 0);
  const mediaFaturamento = somaFaturamento / faturamentosValidos.length;

  // Qauntidade de dias com faturamento superior à média
  const diasAcimaDaMedia = faturamentosValidos.filter(f => f.faturamento > mediaFaturamento).length;

  return {
    menorFaturamento,
    maiorFaturamento,
    diasAcimaDaMedia
  };
}

// Exemplo de uso
const resultado = calcularFaturamento(faturamentoMensal);

console.log('----------------------------------');
console.log(`Menor faturamento: R$ ${resultado.menorFaturamento}`);
console.log(`Maior faturamento: R$ ${resultado.maiorFaturamento}`);
console.log(`Número de dias acima da média: ${resultado.diasAcimaDaMedia}`);

// Pergunta 5
// Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};


function calcularPercentual(faturamentoPorEstado) {
  // Faturamento total
  const totalFaturamento = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

  const percentualPorEstado = {};

  for (const estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / totalFaturamento) * 100;
    percentualPorEstado[estado] = percentual.toFixed(2); // Arredondar para 2 casas decimais
  }

  return percentualPorEstado;
}

// Exemplo de uso
const percentualRepresentacao = calcularPercentual(faturamentoPorEstado);

for (const estado in percentualRepresentacao) {
  console.log(`O percentual de faturamento de ${estado} é: ${percentualRepresentacao[estado]}%`);
}

// Pergunta 6
// Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

function inverterString(str) {
  let resultado = "";

  // Iterar de trás para frente
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }

  return resultado;
}

// Exemplo de uso
const minhaString = "Esse mundo está de virado do aveso";
const stringInvertida = inverterString(minhaString);

console.log("String original: " + minhaString);
console.log("String invertida: " + stringInvertida);