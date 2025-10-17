const container = document.querySelector(".container");
const button1 = document.createElement("button");
button1.textContent = "Ändra färg";

const button2 = document.createElement("button");
button2.textContent = "Lägg till text";

const button3 = document.createElement("button");
button3.textContent = "Rensa text";

const paragraph = document.createElement("p");
paragraph.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, enim. Dignissimos cum, quidem accusamus nobis iste voluptates similique exercitationem temporibus voluptas, perspiciatis assumenda doloremque ducimus praesentium corporis, eum nihil ad.";
container.append(button1, button2, button3, paragraph);


button1.addEventListener("click", ()=> {
    paragraph.style.backgroundColor = "#acecd0ff";
})

button2.addEventListener("click", ()=> {
    paragraph.textContent += "Lorem ipsum dolor sit amet consectetur adipisicing elit. ";

})

button3.addEventListener("click", ()=> {
paragraph.textContent = "";
})