let selectedButton = null; // Track the previously selected button

const buttons = document.querySelectorAll(".buttons button");
const contentSections = document.querySelectorAll(".content-section");
const noncontent = document.getElementById("noncontent");


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetContentId = button.dataset.content;
    const targetSection = document.getElementById(targetContentId);
    noncontent.style.display = "none";

    // If the clicked button is already selected, toggle its visibility and deselect it
    if (button === selectedButton) {
      if (targetSection.style.display === "none") {
        targetSection.style.display = "block";
        noncontent.style.display = "none";
      } else {
        targetSection.style.display = "none";
        noncontent.style.display = "block";
        selectedButton = null; // Deselect the button
        button.classList.remove("selected"); // Remove visual selection
      }
      return; // Exit the function after toggling
    }

    // If a different button is clicked
    if (selectedButton) {
      document.getElementById(selectedButton.dataset.content).style.display =
        "none";
      selectedButton.classList.remove("selected");
      noncontent.style.display = "none";
    }

    // Update selected button and show the content
    selectedButton = button;
    button.classList.add("selected");
    targetSection.style.display = "block";
    targetSection.querySelector('h2').textContent = button.textContent;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let e = [
      " is an artist.",
      " is a creative technologist.",
      " is a computer scientist.",
      " is a fashionista.",
      " is a music visualizer.",
      " is a performer.",
      " is a live-coder.",
    ],
    t = 0;
  setInterval(function () {
    let n = document.getElementById("dynamic-word");
    n && (n.textContent = e[(t = (t + 1) % e.length)]);
  }, 1e3),
    window.addEventListener("scroll", function () {});
});

function showLabel(e, t) {
  let n = document.getElementById("labels"),
    l = document.getElementById("dynamic-word");
  (n.textContent = "'s " + t),
    (n.style.display = "inline-block"),
    (l.style.display = "none");
}
function hideLabel(e) {
  let t = document.getElementById("labels"),
    n = document.getElementById("dynamic-word");
  (n.style.display = "inline-block"), (t.style.display = "none");
}
