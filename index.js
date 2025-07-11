//💻 Desafio DIO: Calculadora de Partidas Rankeadas em JavaScript

// 1. Introdução: Função para calcular o nível de partidas ranqueadas
function calcularRank(vitorias, derrotas) {

  // 1.1. Variáveis e Operadores: Calculando o saldo
  let saldoVitorias = vitorias - derrotas;

  // 1.2. Estruturas de Decisão: Determinando o nível
  let nivel = "";

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else { // Se vitórias for >= 101
    nivel = "Imortal";
  }

  // 1.3. Saída: Retornando a mensagem formatada
  return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplo de Uso da Função

let resultado = calcularRank(85, 10);
console.log(resultado);
// Saída Esperada: O Herói tem de saldo de 75 está no nível de Diamante