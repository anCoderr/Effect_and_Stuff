window.onload = function() {
    const canvasTesting = document.getElementById('canvasTest');
    const ctx = canvasTesting.getContext('2d');
    canvasTesting.width = window.innerWidth;
    canvasTesting.height = window.innerHeight;
    ctx.imageSmoothingEnabled = false;

    var img = document.getElementById("stone");

    ctx.drawImage(img, 0, 0);
    context.beginPath();
    context.arc(100, 75, 50, 0, 2*Math.PI);
    context.stroke();
};
