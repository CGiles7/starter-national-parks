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