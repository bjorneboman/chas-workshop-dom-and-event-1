const button1 = document.querySelector("#btn-1");
const button2 = document.querySelector("#btn-2");
const button3 = document.querySelector("#btn-3");

button1.addEventListener("click", () => {
    document.querySelector("h1").textContent = "Ny rubrik - nu händer det saker";
})

button2.addEventListener("click", () => {
    document.querySelector("p").textContent = "Koda är som glass en varm sommardag!";
})

button3.addEventListener("click", () => {
    document.querySelector("h1").style.color = "#dc2626";
})

