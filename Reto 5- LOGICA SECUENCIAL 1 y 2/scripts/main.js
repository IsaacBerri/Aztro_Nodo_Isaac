const form = document.querySelector(".main__form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target[5].select);
  console.log(e);
  if (e.target.name === "rectangulo") {
    calcularRectangulo(e);
  } else {
    calcularCirculo(e);
  }
});

const calcularRectangulo = (e) => {
  const base = Number(e.target["base"].value);
  const altura = Number(e.target["altura"].value);
  e.target["area"].value = base * altura;
  e.target["perimetro"].value = (base + altura) * 2;
  e.target["diametro"].value = Math.sqrt(base ** 2 + altura ** 2).toFixed(2);
};

const calcularCirculo = (e) => {
  const radio = Number(e.target["radio"].value);
  e.target["area"].value = (Math.PI * radio ** 2).toFixed(2);
  e.target["perimetro"].value = (radio * 2 * Math.PI).toFixed(2);
};
