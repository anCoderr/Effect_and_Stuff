window.onload = (() => {
    const canvasTesting = document.getElementById('canvasTest');
    const ctx = canvasTesting.getContext('2d');
    canvasTesting.width = window.innerWidth;
    canvasTesting.height = window.innerHeight;
    ctx.imageSmoothingEnabled = false;

    ctx.fillStyle = "rgb(255,255,255)";

    // // Working
    // let imgStone = new Image();
    // imgStone.src = './Images/stone.png';
    // // let pattern = ctx.createPattern(imgStone, "repeat");
    // ctx.fillStyle = ctx.createPattern(imgStone, "repeat");
    // ctx.beginPath();
    // ctx.arc(400, 400, 400, 0, 2*Math.PI);
    // ctx.stroke();
    // ctx.fill();

    // Working
    // let imgStone = new Image();
    // imgStone.src = './Images/stone.png';
    // // let pattern = ctx.createPattern(imgStone, "repeat");
    // imgStone.onload = (() => {
    //     ctx.fillStyle = ctx.createPattern(imgStone, "repeat");
    //     ctx.beginPath();
    //     ctx.arc(400, 400, 400, 0, 2*Math.PI);
    //     ctx.stroke();
    //     ctx.fill();
    // });
    
    
    // Working
    let imgStone = document.getElementById("stone");
    let pattern = ctx.createPattern(imgStone, "repeat");
    ctx.fillStyle = pattern;
    ctx.beginPath();
    ctx.arc(400, 400, 200, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();

    // Working
    //let imgStone = document.getElementById("stone");
    //ctx.drawImage(imgStone, 0, 0);

    // Working
    // let i = new Image();
    // i.src = './Images/stone.png';
    // ctx.drawImage(i, 0, 0)

    // Working
    // let img = new Image();
    // img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
    // img.onload = function() {
    //     // create pattern
    //     var ptrn = ctx.createPattern(img, 'repeat');
    //     ctx.fillStyle = ptrn;
    //     ctx.beginPath();
    //     ctx.arc(100, 75, 200, 0, 2*Math.PI);
    //     ctx.stroke();
    //     ctx.fill();
    // }

    // Not Working
    // let image = new Image();
    // image.src = './Images/stone.png';
    // console.log(image);
    // image.onload = function() {
    //     // create pattern
    //     var ptrn = ctx.createPattern(image, 'repeat');
    //     ctx.fillStyle = ptrn;
    //     ctx.beginPath();
    //     ctx.arc(window.width/2, window.height/2, 500, 0, 2*Math.PI, true);
    //     ctx.stroke();
    //     ctx.fill();
    // }
});