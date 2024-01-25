"use strict";

let samplePlant = {
  name: "Aloe Vera",
  species: "Aloe barbadensis Miller",
  water: "Once a week",
};

let plant = [];
plant.push(samplePlant);
// console.log(plant);

// Declaring a function to load stored plant from localStorage by parsing.
function loadStoredPlant() {
  const plantToLoad = localStorage.getItem("plant");
  const parsedPlant = JSON.parse(plantToLoad);

  if (parsedPlant) {
    plant = parsedPlant;
  }
}
// Function invocation
loadStoredPlant();

// Transforming JS object to JSON string and saving it to localStorage
const plantToSave = JSON.stringify(plant);
localStorage.setItem("plant", plantToSave);

function displayPlants() {
    const plantList = document.getElementById("plantList");
    //   innerHTML = ""; Doesn't seem to make a difference even when commented out??
    plantList.innerHTML = "";
    plant.forEach((plant) => {
        const li = document.createElement("li");
        li.innerHTML = `Name: ${plant.name}, Species:${plant.species}, Water Schedule: ${plant.water}`;
        plantList.appendChild(li);
    });
}
// Invoke Function here
displayPlants();


// Add a new plant to the list
function addPlant(name, species, water) {
  const newPlant = {
    name,
    species,
    water,
  };
  plant.push(newPlant);

  //   Add newly added Plant (newPlant)to localStorage
  const plantToSave = JSON.stringify(plant);
  localStorage.setItem("plant", plantToSave);
}

const form = document.getElementById("plantForm");
function addPlantDetails(event) {
  // Preventing Page reload on form submission
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

// I was trying to implement the remove function but code below is not working as expected yet

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
