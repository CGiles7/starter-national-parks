console.log(document);

const heading = document.querySelector("h1");
console.log(heading);

const findValueClass = document.querySelector(".value")
console.log(findValueClass)

const findButtonElement = document.querySelector("button")
console.log(findButtonElement)

const findAreaClass = document.querySelector(".area")
console.log(findAreaClass)

const findStatDescendant = document.querySelector(".stat .value")
console.log(findStatDescendant)

const findHelloClass = document.querySelector(".hello")
console.log(findHelloClass)

const buttons = document.querySelectorAll("button");
console.log(buttons);

// Get a list of all `<h3>` elements
const heading3List = document.querySelectorAll("h3");

// Iterate over the list and print each one
for (let element of heading3List.values()) {
  console.log(element);
}
// OR 
for (let i = 0; i < heading3List.length; i++) {
    const element = heading3List[i];
    console.log(element);
  }
// supporting older browsers:
// Get a list of descriptions
const list = document.querySelectorAll(".description-display");

// Log them to the console
Array.prototype.forEach.call(list, function (element) {
  console.log(element);
});

const descriptions = document.querySelectorAll(".description-display");

for (let desc of descriptions.values()) {
  let content = desc.innerText;
  console.log(content);
}

for (let desc of descriptions.values()) {
  let content = desc.innerText;

  if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + "...";
  }

  console.log(content);
}

for (let desc of descriptions.values()) {
  let content = desc.innerText;

  if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + "...";
  }

  desc.innerText = content;
}

for (let desc of descriptions.values()) {
  let content = desc.innerText;

  if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + '<a href="#">...</a>';
  }

  desc.innerHTML = content;
}

const ratings = document.querySelectorAll(".rating-display .value");

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);
  console.log(ratingValue);
}

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    rating.style.fontWeight = "bold";
  }
}

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    rating.style.fontWeight = "bold";
    rating.style.color = "#3ba17c";
  }
}

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    rating.classList.add("high-rating");
    rating.classList.remove("value");
  }
}

const parks = document.querySelectorAll(".park-display");

const numberParks = parks.length;

const newElement = document.createElement("div");

newElement.innerText = `${numberParks} exciting parks to visit`;

newElement.classList.add("header-statement");

const header = document.querySelector("header");
header.appendChild(newElement);

// Get the parent element of all parks
const main1 = document.querySelector("1");

// Select a single park
const park = main1.querySelector(".park-display");

// Remove that park
main1.removeChild(park);

const firstBtn = document.querySelector("button");

firstBtn.addEventListener("click", (event) => {
  console.log("You clicked the button", event);
});

firstBtn.addEventListener("click", (event) => {
  console.log(event.target);
});

// Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target);
  });
});

allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target.parentNode);
  });
});

allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  });
});

// Function for sorting by name
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

// Function for handling the `nameSorter` click
const nameSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main
  main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort(sortByName);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

// Add an event listener
nameSorter.addEventListener("click", nameSorterClickHandler);


// create ratingSorter function here:


console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");

// Declare handler and support functions here

// Function for sorting by name
//const sortByName = ...

// Function for sorting by rating
//const sortByRating = ...

// Function for handling the `nameSorter` click
//const nameSorterClickHandler = ...

// Function to handle the `ratingSorter` click
//const ratingSorterClickHandler = ...


// The code that runs once the DOM is loaded
//const main = () => {
  // Select the `nameSorter` link
  //const nameSorter = document.querySelector("#name-sorter");

  // Add an event listener
  //nameSorter.addEventListener("click", nameSorterClickHandler);

  // Select the `ratingSorter` link
  //const ratingSorter = document.querySelector("#rating-sorter");

  // Add an event listener
  //ratingSorter.addEventListener("click", ratingSorterClickHandler);
//}

// Add event listener for `DOMContentLoaded`
//window.addEventListener("DOMContentLoaded", main);

const submitHandler2 = (event) => {
  console.log("The form was submitted");
};

const main = () => {
  // Get the form element
  const form = document.querySelector("#park-form");

  // Attach the submit handler
  form.addEventListener("submit", submitHandler2);
};

window.addEventListener("DOMContentLoaded", main);

const submitHandler = (event) => {
  event.preventDefault();
  console.log("The form was submitted");
};