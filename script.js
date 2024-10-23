const nameInput = document.getElementById("input-name");
const distanceInput = document.getElementById("input-distanza");
const ageInput = document.getElementById("input-age");
const generateButton = document.getElementById("generate-button");
const outputCard = document.getElementById("output-card");

generateButton.addEventListener("click", () => {
  console.log(nameInput.value);
  let error = false;

  if (!nameInput.value) {
    nameInput.classList.add("is-invalid");
    error = true;
  }

  if (!distanceInput.value) {
    distanceInput.classList.add("is-invalid");
    error = true;
  }

  let costoBiglietto = 0.21 * distanceInput.value;

  //* SE l'età è inferiore a 18
  if (ageInput === "minorenne") {
    //*     applico lo sconto del 20% alla variabile
    costoBiglietto = costoBiglietto - (20 * costoBiglietto) / 100;
  }

  //* ALTRIMENTI SE l'età è superiore a 65
  else if (ageInput === "over 65") {
    //*     applico lo sconto del 40% alla variabile
    costoBiglietto = costoBiglietto - (40 * costoBiglietto) / 100;
  }

  const htmlCard = `<div class="container col-3 bg-secondary text-black py-2">
    <h6>NOME PASSEGGERO</h6>
    <h6>Alex</h6>
</div>

<div class="row container col-9 border border-black py-2">
    <div class="col-3">
        <h6>Offerta</h6>
        <p class="mt-5">${nameInput}</p>
    </div>
    <div class="col-3">
        <h6>Carrozza</h6>
        <p class="mt-5">5</p>
    </div>
    <div class="col-3">
        <h6>Codice CP</h6>
        <p class="mt-5">92911</p>
    </div>
    <div class="col-3">
        <h6>Costo biglietto</h6>
        <p class="mt-5">${costoBiglietto}</p>
    </div>
</div>`;

  outputCard.innerHTML = htmlCard;
});
