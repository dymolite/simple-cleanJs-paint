const canvas = document.querySelector('.canvas');
const thicknessBtn = document.querySelectorAll(".thickness .thicknessBtn")
const chooseColor = document.getElementById('choose-color');
let brushSize = '10px';
let brushRadius = 100;
let brushColor = 'black';
const workAreaStart =window.innerWidth - canvas.clientWidth;
const workAreaStartEnd = window.innerWidth;

chooseColor.addEventListener("change", () => {
    brushColor = chooseColor.value;
})

thicknessBtn.forEach(thickBtn => {
    thickBtn.addEventListener('click',(e) => {
        const thicknessValue = thickBtn.nextElementSibling.innerHTML;
        brushSize = thicknessValue;
        console.log(brushSize);
    })
})
window.addEventListener("mousemove", (event) => {
    if (event.buttons !== 1) return;

    if (workAreaStart <= event.screenX) paint(event);
    console.log(workAreaStart , event.screenX);
});

function paint(event) {
    const brush = document.createElement("p");
    
    brush.style.borderRadius = `${brushRadius}px`;
    brush.style.width = brushSize;
    brush.style.height= brushSize;
    brush.style.position = "absolute";
    brush.style.backgroundColor = brushColor;
    brush.style.top = `${event.screenY - brushRadius + parseInt(brushSize)}px`;
    brush.style.left = `${event.screenX}px`;
    canvas.appendChild(brush);
}