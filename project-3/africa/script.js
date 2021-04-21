//console.log("is this working?");

//load the airtable library, call it "Airtable";
var Airtable = require("airtable");
//console.log(Airtable);

//use airtable library, connect to base using API key
var base = new Airtable({ apiKey: "keyiFaq9DveHPz98w" }).base(
  "appBE7XG58Ai7wMyb"
);

// get our collection base, select all the records
// specify functions that will receive the data
base("desserts")
  .select({
    view: "africa"
  }).eachPage(gotPageOfDesserts, gotAllDesserts);

//empty array for album data
var desserts = [];

//callback function that recieves data
function gotPageOfDesserts(records, fetchNextPage) {
  console.log("gotPageOfDesserts()");
  // add the records from this page to the array
  desserts.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllDesserts(err) {
  console.log("gotAllDesserts()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogDesserts();
  try {
   showDesserts();
   enableFilters();
  } catch(e) {
      console.error(e);
  }
}

// just loop through the desserts and console.log them
function consoleLogDesserts() {
  console.log("consoleLogDesserts()");
  desserts.forEach(dessert => {
    console.log("Dessert:", dessert);
  });
}

//look through data, create elements
function showDesserts(array = desserts) {
  console.log("showDesserts()");
  array.forEach((dessert,i) => {

    //create container for 
    var dessertContainer = document.createElement("div");
    dessertContainer.classList.add("dessert-container");
    document.querySelector(".container").append(dessertContainer);

     //add images
    var dessertImage = document.createElement("img");
    dessertImage.classList.add("image")
    dessertImage.src = dessert.fields.images[0].url;
    document.body.append(dessertImage);
    dessertContainer.append(dessertImage);

    //add dessert name
		var dessertName = document.createElement("h1");
    dessertName.classList.add("name")
		dessertName.innerText = dessert.fields.name;
		dessertContainer.append(dessertName);

    //add country
		var country = document.createElement("p");
    country.classList.add("country")
		country.innerText = dessert.fields.country;
    dessertContainer.append(country);

    //add continent
    var continent = document.createElement("p");
    continent.classList.add("continent")
    continent.innerText = dessert.fields.continent;
    dessertContainer.append(continent); 

    //add ingredients
    var ingredients = document.createElement("p");
    ingredients.classList.add("ingredients")
    ingredients.innerText = dessert.fields.ingredients.join(', ');
    dessertContainer.append(ingredients);

    //add where to eat info
    var info = document.createElement("a");
    info.classList.add("info")
    info.textContent = "Find your sweet spot";
    info.href = dessert.fields.info;
    info.rel = "noreferrer nofollow";
    info.target = "_blank";
    dessertContainer.append(info);

    //add event listener to have dessert information appear and disappear onclick
    dessertImage.addEventListener("click", function(){
       dessertName.classList.toggle("active");
       country.classList.toggle("active");
       continent.classList.toggle("active");
       ingredients.classList.toggle("active");
       info.classList.toggle("active");

      });

    //get ingredients field from airtable
    //loop through array and add each ingredient as a class name
    dessertContainer.setAttribute('data-ingredients', dessert.fields.ingredients.map((i) => i.replace(/\s+/g, '').toLowerCase()).join(' '));
  });
 }

function enableFilters() {
  document.querySelector('.ingredient-filters').addEventListener('change', (event) => {
    const checkedInputs = document.querySelectorAll('.ingredient-filters input:checked');
    const checkedIngredients = Array.from(checkedInputs).map((input) => input.value);

    const desserts = document.querySelectorAll('.dessert-container');

    desserts.forEach((dessert) => {
      dessert.style.display = 'block';
      if (checkedIngredients.find((ingredient) => dessert.getAttribute('data-ingredients').includes(ingredient))) {
        dessert.style.display = '';
      } else {
        dessert.style.display = 'none';
      }
    });


  });

     //add event listener to toggle mobile menu
 let toggleMenu = document.querySelector(".hamburger-menu");
 let menuStatus = document.querySelector(".mobile-nav");

  toggleMenu.addEventListener("click", function(){
       menuStatus.classList.toggle("open");
 });
  
 }


//the HTML element you clicked on:
/*let element=event.currentTarget;
//retrieve the number
let number=element.dataset.image;
//gets the dessert data corresponding to the image you clicked on
let currentImage=desserts[number];
*/

