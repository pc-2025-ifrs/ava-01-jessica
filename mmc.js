// Função MMC
function mmc(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") return null;
  
  if (!Number.isInteger(num1)) num1 = parseInt(num1);
  if (!Number.isInteger(num2)) num2 = parseInt(num2);

  if (num1 === 0 || num2 === 0) return null;

  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  let limite = num1 * num2;
  let minimo = num1 > num2 ? num1 : num2;

  for (let candidato = minimo; candidato <= limite; candidato++) {
    if (candidato % num1 === 0 && candidato % num2 === 0) {
      return candidato;
    }
  }
  return null;
}

// Função MDC (sem Euclides, usando laço)
function mdc(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") return null;
  
  if (!Number.isInteger(num1)) num1 = parseInt(num1);
  if (!Number.isInteger(num2)) num2 = parseInt(num2);

  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  if (num1 === 0 && num2 === 0) return null;

  let menor = num1 < num2 ? num1 : num2;
  let maiorDivisor = 1;

  for (let d = 1; d <= menor; d++) {
    if (num1 % d === 0 && num2 % d === 0) {
      maiorDivisor = d;
    }
  }
  return maiorDivisor;
}

// ---------------- Testes ----------------
console.log("MMC (3,4):", mmc(3, 4));
console.log("MMC (18,131):", mmc(18, 131));
console.log("MMC (-3,-4):", mmc(-3, -4));
console.log("MMC (-5,16):", mmc(-5, 16));

console.log("MMC (3.5,4):", mmc(3.5, 4));
console.log("MMC (3,4.1):", mmc(3, 4.1));
console.log("MMC (3.8,4.1):", mmc(3.8, 4.1));

console.log("MMC ('3','4'):", mmc("3", "4"));
console.log("MMC ('a','b'):", mmc("a", "b"));
console.log("MMC ([3,4]):", mmc([3, 4]));

console.log("MMC (3):", mmc(3));
console.log("MMC (): ", mmc());
console.log("MMC (3,4,5):", mmc(3, 4, 5));
console.log("MMC (3,4,5,6):", mmc(3, 4, 5, 6));

console.log("--------------------------------");

console.log("MDC (3,4):", mdc(3, 4));
console.log("MDC (18,131):", mdc(18, 131));
console.log("MDC (-3,-4):", mdc(-3, -4));
console.log("MDC (-5,16):", mdc(-5, 16));

console.log("MDC (3.5,4):", mdc(3.5, 4));
console.log("MDC (3,4.1):", mdc(3, 4.1));
console.log("MDC (3.8,4.1):", mdc(3.8, 4.1));

console.log("MDC ('3','4'):", mdc("3", "4"));
console.log("MDC ('a','b'):", mdc("a", "b"));
console.log("MDC ([3,4]):", mdc([3, 4]));

console.log("MDC (3):", mdc(3));
console.log("MDC (): ", mdc());
console.log("MDC (3,4,5):", mdc(3, 4, 5));
console.log("MDC (3,4,5,6):", mdc(3, 4, 5, 6));
