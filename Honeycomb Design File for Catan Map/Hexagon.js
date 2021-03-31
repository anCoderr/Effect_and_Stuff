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

    // context.drawImage(imageClay, 0, 0);

    imageClay.onload(() => {
        let pattern = context.createPattern(imageTree, 'repeat');
        context.fillStyle = pattern;
    });




    

    context.beginPath();
    context.arc(100, 100, 100, 0, Math.PI*2);
    context.stroke();
    context.fill();

    console.log("boom");
    console.log(pattern);
    console.log(context.fillStyle);



    // const imageClay = new Image();
    // const imageHay = new Image();
    // const imagePasture = new Image();
    // const imageStone = new Image();
    // const imageTree = new Image();

    // imageClay.src = './Images/clay.png';
    // imageHay.src = './Images/hay.png';
    // imagePasture.src = './Images/pasture.png';
    // imageStone.src = './Images/stone.png';
    // imageTree.src = './Images/tree.png';

    // imageClay.onload = (() => {
    //     patternClay = context.createPattern(imageClay, 'no-repeat');
    // });
    // imageHay.onload = (() => {
    //     patternHay = context.createPattern(imageHay, 'no-repeat');
    // });
    // imagePasture.onload = (() => {
    //     patternPasture = context.createPattern(imagePasture, 'no-repeat');
    // });
    // imageStone.onload = (() => {
    //     patternStone = context.createPattern(imageStone, 'no-repeat');
    // });
    // imageTree.onload = (() => {
    //     patternTree = context.createPattern(imageTree, 'no-repeat');
    // });



    // var pattern;
    // let imageYellow = new Image();
    // imageYellow.src = './Images/test.png';
    // imageYellow.onload = (() => {
    //     pattern =  context.createPattern(imageYellow, 'repeat');
    //     context.fillStyle = pattern;
    //     console.log(pattern);
    //     console.log(context.fillStyle);
    //     // context.drawImage(imageYellow, 0, 0);
    //     context.beginPath();
    //     context.arc(100, 100, 100, 0, Math.PI*2);
    //     context.stroke();
    //     context.fill();
    // })
    // context.beginPath();
    // context.arc(100, 100, 200, 0, Math.PI*2);
    // context.stroke();
    // context.fill();

    

    

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
        context.fillStyle = pattern;
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