//💻 Desafio DIO: Calculadora de Partidas Rankeadas em JavaScript

// 1. Função com retorno para calcular o saldo entre vitórias e derrotas
function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

// 2. Função com retorno para calcular o nível do personagem de acordo com o saldo de vitórias
function determinarNivel(vitorias) {
  if (vitorias < 10) {
    return "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    return "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    return "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    return "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    return "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    return "Lendário";
  } else {
    return "Imortal";
  }
}

// 3. Função para calcular o nível de partidas ranqueadas
function calcularRank(vitorias, derrotas) {
  let saldo = calcularSaldo(vitorias, derrotas);
  let nivel = determinarNivel(vitorias);

  return `O Herói tem de saldo de ${saldo} está no nível de ${nivel}`;
}

// Exemplo de uso
let resultado = calcularRank(85, 10);
console.log(resultado);
// Saída Esperada: O Herói tem de saldo de 75 está no nível de Diamante
