// Navigators: Max, Sahar
// Driver: Björn

const sandbox = document.querySelector("#exercise-4");
const list = document.createElement("ul");
const achievements = ["druckit kaffe", "kodat", "haft lektion", "läst kod", "testat övningar"];
sandbox.appendChild(list);

achievements.forEach((elem, i) => {
    const li = document.createElement("li");
    li.textContent = elem;
    list.appendChild(li);
})