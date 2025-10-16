// Navigators: Max, Sahar
// Driver: Björn

const heading2 = document.createElement("h2");
heading2.textContent = "Min rubrik för dagen";
heading2.setAttribute("style", "color: #1e3a8a");

const paragraph = document.createElement("p");
paragraph.style.color = "#fef3c7";
paragraph.textContent = "Soligt och fint, en subtil arom av pappersbruk!";

const coloredBox = document.createElement("div");
coloredBox.textContent = "Det här en färgad ruta";
coloredBox.style.backgroundColor = "#10b981";

document.body.append(heading2, paragraph, coloredBox);

paragraph.textContent = "Torsdag 16:e oktober: " + paragraph.textContent;