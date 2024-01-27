"use strict";

let samplePlant = {
  name: "Aloe Vera",
  species: "Aloe barbadensis Miller",
  water: "Once a week",
};

let plant = [];
plant.push(samplePlant);

// Declaring a function to load stored plant from localStorage by parsing.
function loadStoredPlant() {
  const plantToLoad = localStorage.getItem("plant");
  const parsedPlant = JSON.parse(plantToLoad);
  if (parsedPlant) {
    plant = parsedPlant;
  }
}
loadStoredPlant(); // Function invocation

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
displayPlants(); // Function invocation

// Add a new plant to the list
function addPlant(name, species, water) {
  const newPlant = {
    name,
    species,
    water,
  };
  plant.push(newPlant);
  const plantToSave = JSON.stringify(plant);
  localStorage.setItem("plant", plantToSave);
}

const form = document.getElementById("plantForm");
function addPlantDetails(event) {
  event.preventDefault(); // Preventing Page reload on form submission
  const name = form.name.value;
  const species = form.species.value;
  const water = form.water.value;

  if (name.trim() === "" || species.trim() === "" || water.trim() === "") {
    alert("All fields are required");
  } else if (name.length < 3) {
    alert("Please enter a valid Plant Name");
  } else if (species.length < 3) {
    alert("Please enter a valid Plant Species");
  } else if (water.length < 3) {
    alert("Please enter a valid water schedule");
  } else if (name.length > 10) {
    alert("PlantName cannot be more than 10 characters");
  } else if (species.length > 20) {
    alert("Species cannot be more than 20 characters");
  } else if (water.length > 15) {
    alert("Water schedule cannot be more than 15 characters");
  } else {
    addPlant(name, species, water);
    displayPlants();
    form.reset(); // Reset the form only when all fields pass validation
  }
}
form.addEventListener("submit", addPlantDetails);

function removePlant() { // Remove a plant from the list
  plant.pop();
  const plantToSave = JSON.stringify(plant);
  localStorage.setItem("plant", plantToSave);
  displayPlants();
}
const button = document.getElementById("remove");
button.addEventListener("click", removePlant);
