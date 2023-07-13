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