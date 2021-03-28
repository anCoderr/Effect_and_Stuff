const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = "rgb(255,255,255)";

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const factor = 0.866;
const padding = 2;

const absoluteCenterX = canvas.width/2;
const absoluteCenterY = canvas.height/2;

const hexDraw = (centerX, centerY, size, colour) => {
    ctx.beginPath();
    ctx.moveTo(-size/2 + centerX, factor*size + centerY);
    ctx.lineTo(-size + centerX, centerY);
    ctx.lineTo(-size/2 + centerX, -factor*size + centerY);
    ctx.lineTo(size/2 + centerX, -factor*size + centerY);
    ctx.lineTo(size + centerX, centerY);
    ctx.lineTo(size/2 + centerX, factor*size + centerY);
    ctx.closePath();
    //ctx.fillStyle = colour;
    ctx.fill();

    // ctx.beginPath();
    // ctx.arc(0, 0, 25, 0, Math.PI*2);
    // ctx.fill();
}



hexDraw(absoluteCenterX, absoluteCenterY, 25, "rgb(255,255,255)");
hexDraw(absoluteCenterX, absoluteCenterY + 43.3 + padding, 25, "rgb(255,255,255)")
