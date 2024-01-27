// Code Test/Modify file only


const form = document.getElementById("plantForm");

function addPlantDetails(event) {
  // Preventing Page reload on form submission
  event.preventDefault();
  const name = form.name.value;
  const species = form.species.value;
  const water = form.water.value;

  if (name.trim() === "" || species.trim() === "" || water.trim() === "") {
    alert("All fields are required");
  } else if (name.length < 2 || species.length < 2) {
    alert("Please enter a valid Plant Name and Species");
  } else if (water.length < 2) {
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
