window.onload = (() => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.imageSmoothingEnabled = false;
    context.strokeStyle = "white";

    const factor = 0.866;
    const padding = 5;
    const size = 60;
    const distY = (2*factor*size+padding)/2;
    const distX = (3*size + factor*2*padding)/2;

    const absoluteCenterX = canvas.width/2;
    const absoluteCenterY = canvas.height/2;

    let imageClay = document.getElementById('clay');
    let imageHay = document.getElementById('hay');
    let imagePasture = document.getElementById('pasture');
    let imageStone = document.getElementById('stone');
    let imageTree = document.getElementById('tree');

    let pattern;

    pattern =  context.createPattern(imageStone, 'repeat');
    context.fillStyle = pattern;

    const hexDraw = (centerX, centerY, size) => {
        context.beginPath();
        context.moveTo(-size/2 + centerX, factor*size + centerY);
        context.lineTo(-size + centerX, centerY);
        context.lineTo(-size/2 + centerX, -factor*size + centerY);
        context.lineTo(size/2 + centerX, -factor*size + centerY);
        context.lineTo(size + centerX, centerY);
        context.lineTo(size/2 + centerX, factor*size + centerY);
        context.closePath();
        context.stroke();
        //context.fillStyle = pattern;
        context.fill();

    }

    const col1Draw = () => {
        hexDraw(absoluteCenterX - 2*distX, absoluteCenterY + 2*distY, size);
        hexDraw(absoluteCenterX - 2*distX, absoluteCenterY, size);
        hexDraw(absoluteCenterX - 2*distX, absoluteCenterY - 2*distY, size);
    }
    const col2Draw = () => {
        hexDraw(absoluteCenterX - distX, absoluteCenterY + 3*distY, size);
        hexDraw(absoluteCenterX - distX, absoluteCenterY + distY, size);
        hexDraw(absoluteCenterX - distX, absoluteCenterY - distY, size);
        hexDraw(absoluteCenterX - distX, absoluteCenterY - 3*distY, size);
    }
    const col3Draw = () => {
        hexDraw(absoluteCenterX, absoluteCenterY + 4*distY, size);
        hexDraw(absoluteCenterX, absoluteCenterY + 2*distY, size);
        hexDraw(absoluteCenterX, absoluteCenterY, size);
        hexDraw(absoluteCenterX, absoluteCenterY - 2*distY, size);
        hexDraw(absoluteCenterX, absoluteCenterY - 4*distY, size);
    }
    const col4Draw = () => {
        hexDraw(absoluteCenterX + distX, absoluteCenterY + 3*distY, size);
        hexDraw(absoluteCenterX + distX, absoluteCenterY + distY, size);
        hexDraw(absoluteCenterX + distX, absoluteCenterY - distY, size);
        hexDraw(absoluteCenterX + distX, absoluteCenterY - 3*distY, size);
    }
    const col5Draw = () => {
        hexDraw(absoluteCenterX + 2*distX, absoluteCenterY + 2*distY, size);
        hexDraw(absoluteCenterX + 2*distX, absoluteCenterY, size);
        hexDraw(absoluteCenterX + 2*distX, absoluteCenterY - 2*distY, size);
    }


    col1Draw();
    col2Draw();
    col3Draw();
    col4Draw();
    col5Draw();

});