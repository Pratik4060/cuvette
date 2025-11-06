const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", function() {
  console.log("Parent clicked!");
});

child.addEventListener("click", function() {
  console.log("Child clicked!");
});

const list = document.getElementById("list");
list.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    console.log("You clicked:", event.target.textContent);
  }
});

const btn = document.getElementById("thisBtn");

btn.addEventListener("click", function() {
  console.log("This refers to:", this); // the button itself
  this.style.backgroundColor = "yellow"; // change color using 'this'
});
