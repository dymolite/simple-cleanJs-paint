const canvas = document.querySelector('.canvas');
const brushSize = 12;
const brushRadius = 100;
const brushColor = 'red';
const workAreaStart =window.innerWidth- canvas.clientWidth;


window.addEventListener("mousemove", (event) => {
    if (event.buttons !== 1) return;

    if (workAreaStart <= event.screenX) paint(event);
});


function paint(event) {
    const brush = document.createElement("p");
    brush.style.borderRadius = `${brushRadius}px`;
    brush.style.width=`${brushSize}px`;
    brush.style.height=`${brushSize}px`;
    brush.style.position = "absolute";
    brush.style.backgroundColor = brushColor;
    brush.style.top = `${event.screenY - brushRadius +brushSize}px`;
    brush.style.left = `${event.screenX}px`;
    canvas.appendChild(brush);
}