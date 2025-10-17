const container = document.querySelector(".container");
const div1 = document.createElement("div");
div1.style.backgroundColor = "#bada55";
div1.textContent = "Box 1";

const div2 = document.createElement("div");
div2.style.backgroundColor = "#b00000";
div2.textContent = "Box 2"; 

const div3 = document.createElement("div");
div3.style.backgroundColor = "blue";
div3.textContent = "Box 3"; 

container.append (div1, div2, div3);


function changeColor(e) {
const 
}

div1.addEventListener("mouseover", changeColor(div1, #414c1fff) );




div2.addEventListener("mouseover", () =>{
    div2.style.backgroundColor = "black";
})

div3.addEventListener("mouseover", () =>{
    div3.style.backgroundColor = "black";
})


div1.addEventListener("mouseout", () =>{
    div1.style.backgroundColor = " ";
})
