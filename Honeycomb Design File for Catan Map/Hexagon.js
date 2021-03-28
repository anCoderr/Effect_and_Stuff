const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.imageSmoothingEnabled = false;

const factor = 0.866;
const padding = 5;
const size = 60;
const distY = (2*factor*size+padding)/2;
const distX = (3*size + factor*2*padding)/2;

const absoluteCenterX = canvas.width/2;
const absoluteCenterY = canvas.height/2;

const hexDraw = (centerX, centerY, size, colour) => {
    context.beginPath();
    context.moveTo(-size/2 + centerX, factor*size + centerY);
    context.lineTo(-size + centerX, centerY);
    context.lineTo(-size/2 + centerX, -factor*size + centerY);
    context.lineTo(size/2 + centerX, -factor*size + centerY);
    context.lineTo(size + centerX, centerY);
    context.lineTo(size/2 + centerX, factor*size + centerY);
    context.closePath();
    // context.clip();
    //context.drawImage(image, leftMostXCoor, highestYCoor, polyWidth, polyHeight);
    context.fillStyle = colour;
    context.fill();
    context.stroke();

}

const col1Draw = () => {
    hexDraw(absoluteCenterX - 2*distX, absoluteCenterY + 2*distY, size, "rgb(255,255,255)");
    hexDraw(absoluteCenterX - 2*distX, absoluteCenterY, size, "rgb(255,255,255)");
    hexDraw(absoluteCenterX - 2*distX, absoluteCenterY - 2*distY, size, "rgb(255,255,255)");
}
const col2Draw = () => {
    hexDraw(absoluteCenterX - distX, absoluteCenterY + 3*distY, size, "rgb(255,255,255)");
    hexDraw(absoluteCenterX - distX, absoluteCenterY + distY, size, "rgb(255,255,255)");
    hexDraw(absoluteCenterX - distX, absoluteCenterY - distY, size, "rgb(255,255,255)");
    hexDraw(absoluteCenterX - distX, absoluteCenterY - 3*distY, size, "rgb(255,255,255)");
}
const col3Draw = () => {
    hexDraw(absoluteCenterX, absoluteCenterY + 4*distY, size, "rgb(255,255,255)");
    hexDraw(absoluteCenterX, absoluteCenterY + 2*distY, size, "rgb(255,255,255)");
    hexDraw(absoluteCenterX, absoluteCenterY, size, "rgb(255,255,255)");
    hexDraw(absoluteCenterX, absoluteCenterY - 2*distY, size, "rgb(255,255,255)");
    hexDraw(absoluteCenterX, absoluteCenterY - 4*distY, size, "rgb(255,255,255)");
}
const col4Draw = () => {
    hexDraw(absoluteCenterX + distX, absoluteCenterY + 3*distY, size, "rgb(255,255,255)");
    hexDraw(absoluteCenterX + distX, absoluteCenterY + distY, size, "rgb(255,255,255)");
    hexDraw(absoluteCenterX + distX, absoluteCenterY - distY, size, "rgb(255,255,255)");
    hexDraw(absoluteCenterX + distX, absoluteCenterY - 3*distY, size, "rgb(255,255,255)");
}
const col5Draw = () => {
    hexDraw(absoluteCenterX + 2*distX, absoluteCenterY + 2*distY, size, "rgb(255,255,255)");
    hexDraw(absoluteCenterX + 2*distX, absoluteCenterY, size, "rgb(255,255,255)");
    hexDraw(absoluteCenterX + 2*distX, absoluteCenterY - 2*distY, size, "rgb(255,255,255)");
}

col1Draw();
col2Draw();
col3Draw();
col4Draw();
col5Draw();


