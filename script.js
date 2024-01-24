"use strict";

const samplePlant = {
  name: "Aloe Vera",
  species: "Aloe barbadensis Miller",
  water: "Once a week",
};

const plants = [];
plants.push(samplePlant);
// console.log(plants);

function displayPlants() {
  const plantList = document.getElementById("plantList");
  plantList.innerHTML = "";
  plants.forEach((plant) => {
    const li = document.createElement("li");
    li.innerHTML = `Name: ${plant.name}, Species:${plant.species}, Water Schedule: ${plant.water}`;
    plantList.appendChild(li);
  });
}
displayPlants();

function addPlant(name, species, water) {
  const newPlant = {
    name,
    species,
    water,
  };
  plants.push(newPlant);
}

const form = document.getElementById("plantForm");
function addPlantDetails(event) {
  event.preventDefault();
  const name = form.name.value;
  const species = form.species.value;
  const water = form.water.value;
  addPlant(name, species, water);
  displayPlants();
}
form.addEventListener("submit", addPlantDetails);
form.addEventListener("submit", () => {
  form.reset();
});

// function removeplant(name, species, water) {
//   const plantRemoved = {
//     name,
//     species,
//     water,
//   };
//   plants.pop(plantRemoved);
//   displayPlants();
// }
// form.addEventListener("reset", removeplant);
