// Navigators: Max, Sahar
// Driver: Björn

const button1 = document.querySelector("#btn-1");
const button2 = document.querySelector("#btn-2");
const button3 = document.querySelector("#btn-3");
const button4 = document.querySelector("#btn-4");

const sandbox = document.querySelector("#exercise-2")

button1.addEventListener("click", () => {
    document.body.style.backgroundColor = "#e0f2fe";
});

button2.addEventListener("click", () => {
    const sleepHours = document.createElement("p");
    sleepHours.textContent = "Jag sov 5 timmar, bror!";
    sandbox.appendChild(sleepHours);
});

button3.addEventListener("click", () => {
    sandbox.lastElementChild.remove();
});

button4.addEventListener("click", () => {
    document.querySelector("h1").textContent = "MaxSaharBjörn";
})
