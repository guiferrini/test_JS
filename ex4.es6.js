let radio = Number(document.getElementById("num").value);

const PerimetroCirculo = radio => radio * 3.14 * 2;
const AreaCirculo = radio => 3.14 * (radio * radio);

console.log("perimetro: " + PerimetroCirculo);
console.log("Area: " + AreaCirculo);