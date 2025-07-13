
// Selection based on th name of element
const box = document.querySelector("box")

const allBoxes = document.querySelectorAll("bpx") // to select all elements with the tag name "box"

const boxById = document.querySelector("#box") // to select an element with the id "box"
const boxById2 = document.getElementById("box") // another way to select an element with the id "box"


const boxByClass = document.querySelector(".box") // to select an element with the class "box"
const boxByClass2 = document.getElementsByClassName("box") // another way to select an element with the class "box"

// In an HTML document, the document.createElement() method creates the HTML element specified by localName, 
// or an HTMLUnknownElement if localName isn't recognized.

// Syntax

createElement(localName)
createElement(localName, options)

document.body.onload = addElement;

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}



///INNERHTML

function log(msg) {
  const logElem = document.querySelector(".log");

  const time = new Date();
  const timeStr = time.toLocaleTimeString();
  logElem.innerHTML += `${timeStr}: ${msg}<br/>`;
}

log("Logging mouse events inside this container…");

//
///addEventListener

const story = document.body.querySelector(".story");

const setText = document.body.querySelector("#set-text");
setText.addEventListener("click", () => {
  story.textContent = "It was a dark and stormy night...";
});

const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
  story.textContent = "";
});



///adding child and removing child

const parent = document.body.querySelector(".parent");

const addChild = document.body.querySelector("#add-child");
addChild.addEventListener("click", () => {
  // Only add a child if we don't already have one
  // in addition to the text node "parent"
  if (parent.childNodes.length > 1) {
    return;
  }
  const child = document.createElement("div");
  child.classList.add("child");
  child.textContent = "child";
  parent.appendChild(child);
});

const removeChild = document.body.querySelector("#remove-child");
removeChild.addEventListener("click", () => {
  const child = document.body.querySelector(".child");
  parent.removeChild(child);
});




