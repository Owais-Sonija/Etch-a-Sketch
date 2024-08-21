const boxContainer = document.querySelector(".container");
const btn = document.querySelector(".btn");

let num = 16;
let numOfBoxes = 16 * 16;
let gridPercent = "0 0 " + 100 / numOfBoxes + "%";

function generateRandomNum() {
    return (parseInt(Math.random() * 256))
}
const createGrid = (numOfBoxes, num) => {


    boxContainer.innerHTML = ""
    for (let i = 0; i < numOfBoxes; i++) {
        let box = document.createElement("div");
        boxContainer.appendChild(box);
        box.classList.add("grid_box");
        gridPercent = "0 0 " + 100 / num + "%";
        box.style.flex = gridPercent;

    }
}

btn.addEventListener("click", () => {
    num = parseInt(prompt("Enter number less than 100"));
    numOfBoxes = num * num;
    if (num >= 2 && num <= 100) {

        createGrid(numOfBoxes, num)
    } else {
        alert("Enter a number between 2 - 100")
    }
})

const boxes = document.querySelectorAll(".grid_box")


boxContainer.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "rgb(" + generateRandomNum() + "," + generateRandomNum() + "," + generateRandomNum() + ")"

})

createGrid(numOfBoxes);