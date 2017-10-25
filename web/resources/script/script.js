var globalCanvas;
var globalCTX;
var tempCanvas;
var tempCTX;
MyFunction = function () {
    // if (globalCanvas ===undefined){
        var canvas = document.getElementById('myCanvas');
        var zoom1 = document.getElementById('j_idt9:myRange2').value;
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            canvas.onmousedown = drawDot;
            var zoom = zoom1 * 2.5;
            var plusX = (7 * 20) + 250;
            var plusY = (4 * 20) + 250;
            canvas.width = 780;
            canvas.height = 600;
            /*Batman*/
            ctx.beginPath();

            // ctx.scale(2,2);
            ctx.lineWidth = 0.1;

            ctx.clearRect(0, 0, 300, 300);
            ctx.strokeStyle = "#2aa5a0";
            ctx.moveTo(-7 * zoom + plusX, -0 + plusY);

            var xz;
            for (xz = -7 * zoom; xz < -3 * zoom; xz += 0.01) {
                var x = xz / zoom;
                var absX = Math.abs(x);
                var y = 1.5 * Math.sqrt((-Math.abs(absX - 1)) * Math.abs(3 - absX) / ((absX - 1) * (3 - absX))) * (1 + Math.abs(absX - 3) / (absX - 3)) * Math.sqrt(1 - (x / 7) * (x / 7)) + (4.5 + 0.75 * (Math.abs(x - 0.5) + Math.abs(x + 0.5)) - 2.75 * (Math.abs(x - 0.75) + Math.abs(x + 0.75))) * (1 + Math.abs(1 - absX) / (1 - absX));
                ctx.lineTo(xz + plusX, -y * zoom + plusY);
            }
            for (xz = -3 * zoom; xz < -1 * zoom - 1; xz++) {
                x = xz / zoom;
                absX = Math.abs(x);
                y = (2.71052 + 1.5 - 0.5 * absX - 1.35526 * Math.sqrt(4 - (absX - 1) * (absX - 1)));
                ctx.lineTo(xz + plusX, -y * zoom + plusY);
            }
            ctx.lineTo(-1 * zoom + plusX, -3 * zoom + plusY);
            ctx.lineTo((-0.5 * zoom) + plusX, -(2.2 * zoom) + plusY);
            ctx.lineTo((0.5 * zoom) + plusX, -(2.2 * zoom) + plusY);
            ctx.lineTo(1 * zoom + plusX, -3 * zoom + plusY);

            for (xz = 1 * zoom + 1; xz < 3 * zoom + 1; xz++) {
                x = xz / zoom;
                absX = Math.abs(x);
                y = (2.71052 + 1.5 - 0.5 * absX - 1.35526 * Math.sqrt(4 - (absX - 1) * (absX - 1)));
                ctx.lineTo(xz + plusX, -y * zoom + plusY);
            }
            for (xz = 3 * zoom + 1; xz < 7 * zoom + 1; xz++) {
                x = xz / zoom;
                absX = Math.abs(x);
                y = 1.5 * Math.sqrt((-Math.abs(absX - 1)) * Math.abs(3 - absX) / ((absX - 1) * (3 - absX))) * (1 + Math.abs(absX - 3) / (absX - 3)) * Math.sqrt(1 - (x / 7) * (x / 7)) + (4.5 + 0.75 * (Math.abs(x - 0.5) + Math.abs(x + 0.5)) - 2.75 * (Math.abs(x - 0.75) + Math.abs(x + 0.75))) * (1 + Math.abs(1 - absX) / (1 - absX));
                ctx.lineTo(xz + plusX, -y * zoom + plusY);
            }

            for (xz = 7 * zoom; xz > 4 * zoom; xz--) {
                x = xz / zoom;
                absX = Math.abs(x);
                y = (-3) * Math.sqrt(1 - (x / 7) * (x / 7)) * Math.sqrt(Math.abs(absX - 4) / (absX - 4));
                ctx.lineTo(xz + plusX, -y * zoom + plusY);
            }
            for (xz = 4 * zoom; xz > -4 * zoom; xz--) {
                x = xz / zoom;
                absX = Math.abs(x);
                y = Math.abs(x / 2) - 0.0913722 * x * x - 3 + Math.sqrt(1 - (Math.abs(absX - 2) - 1) * (Math.abs(absX - 2) - 1));
                ctx.lineTo(xz + plusX, -y * zoom + plusY);
            }

            for (xz = -4 * zoom - 1; xz > -7 * zoom - 1; xz--) {
                x = xz / zoom;
                absX = Math.abs(x);
                y = (-3) * Math.sqrt(1 - (x / 7) * (x / 7)) * Math.sqrt(Math.abs(absX - 4) / (absX - 4));
                ctx.lineTo(xz + plusX, -y * zoom + plusY);
            }

            ctx.fillStyle = "#2aa5a0";
            ctx.fill();
            ctx.stroke();

            ctx.closePath();
            // ctx.restore();


            /*Координатная плоскость*/
            // Вектора
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.moveTo(0, plusY);
            ctx.lineTo(2 * plusX, plusY);
            ctx.lineTo(2 * plusX - 5, plusY - 3);
            ctx.moveTo(2 * plusX - 5, plusY + 3);
            ctx.lineTo(2 * plusX, plusY);


            ctx.moveTo(plusX, 2 * plusY);
            ctx.lineTo(plusX, 0);
            ctx.lineTo(plusX - 3, 0 + 5);
            ctx.moveTo(plusX + 3, 0 + 5);
            ctx.lineTo(plusX, 0);
            ctx.stroke();
            // Разметка
            //    По вектору Х
            ctx.moveTo(-7 * zoom + plusX, plusY - 3);
            ctx.lineTo(-7 * zoom + plusX, plusY + 3);
            ctx.moveTo(plusX - (7 * zoom) / 2, plusY - 3);
            ctx.lineTo(plusX - (7 * zoom) / 2, plusY + 3);
            ctx.moveTo(plusX + (7 * zoom) / 2, plusY - 3);
            ctx.lineTo(plusX + (7 * zoom) / 2, plusY + 3);
            ctx.moveTo(plusX + (7 * zoom), plusY - 3);
            ctx.lineTo(plusX + (7 * zoom), plusY + 3);
            //    По вектору Y
            ctx.moveTo(plusX - 3, plusY - 7 * zoom / 2);
            ctx.lineTo(plusX + 3, plusY - 7 * zoom / 2);
            ctx.moveTo(plusX - 3, plusY + 7 * zoom / 2);
            ctx.lineTo(plusX + 3, plusY + 7 * zoom / 2);

            //    Числа для разметки
            ctx.font = '10px "Tahoma"';
            ctx.fillStyle = "black";
            ctx.fillText("-" + zoom1, -7 * zoom - 5 + plusX, plusY - 8);
            ctx.fillText("-" + zoom1 + "/2", plusX - (7 * zoom) / 2 - 10, plusY - 8);
            ctx.fillText(zoom1 + "/2", plusX + (7 * zoom) / 2 - 10, plusY - 8);
            ctx.fillText(zoom1, plusX + (7 * zoom) - 5, plusY - 8);

            ctx.fillText(zoom1 + "/2", plusX - 30, plusY - 7 * zoom / 2 + 3);
            ctx.fillText("-" + zoom1 + "/2", plusX - 30, plusY + 7 * zoom / 2 + 3);

            ctx.stroke();
            globalCanvas=document.createElement('canvas');
            globalCanvas.width=780;
            globalCanvas.height=600;
            globalCTX=globalCanvas.getContext('2d');
            globalCTX.clearRect(0,0,canvas.width,canvas.height);
            globalCTX.drawImage(canvas,0,0,canvas.width,canvas.height,0,0,canvas.width,canvas.height);
    }


    // zoom=zoom+10;

    // }
};
foAway = function () {
    var $table = document.getElementById('lol');

};
drawDot = function (e) {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var plusX = (7 * 20) + 250;
    var plusY = (4 * 20) + 250;
    ctx.beginPath();
    var coords = canvas.getBoundingClientRect();
    var x = e.pageX - coords.left - pageXOffset;
    var y = e.pageY -  coords.top - pageYOffset;
    var needX = Math.round((x- plusX)/7/2.5);
    var needY = Math.round((y- plusY)/7/2.5);
    ctx.fillStyle = "rgb(255,92,90)";
    ctx.arc(needX * 7 * 2.5 + plusX, needY * 7 * 2.5 + plusY, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    document.getElementById('formID:hiddenCoordX').value = needX;
    document.getElementById('formID:hiddenCoordY').value = -needY;
    console.log(document.getElementById('formID:hiddenCoordX').value+" "+document.getElementById('formID:hiddenCoordY').value);
    $(document.getElementById('formID:j_idt17')).click();
};
getCoords = function () {
    // checkIfFull(document.getElementById('coordX'), document.getElementById('coordY'));
    tempCanvas = document.getElementById('myCanvas');
    tempCTX = tempCanvas.getContext('2d');
    tempCTX.clearRect(0,0,globalCanvas.width,globalCanvas.height);
    tempCTX.drawImage(globalCanvas,0,0,globalCanvas.width,globalCanvas.height,0,0,globalCanvas.width,globalCanvas.height);
    var plusX = (7 * 20) + 250;
    var plusY = (4 * 20) + 250;
    var x = document.getElementById('coordX').value;
    var y = document.getElementById('coordY').value;
    tempCTX.beginPath();
    tempCTX.fillStyle = "#2b2a29";
    tempCTX.arc(parseInt(x, 10) * 7 * 2.5 + plusX, -parseInt(y, 10) * 7 * 2.5 + plusY, 3, 0, Math.PI * 2);
    tempCTX.fill();
};
addDot=function () {
    console.log(document.getElementById('j_idt25:hidden1')+" "+document.getElementById('coordX').value+" "+document.getElementById('coordY').value);
    tempCanvas = document.getElementById('myCanvas');
    tempCTX = tempCanvas.getContext('2d');
    tempCTX.clearRect(0,0,globalCanvas.width,globalCanvas.height);
    tempCTX.drawImage(globalCanvas,0,0,globalCanvas.width,globalCanvas.height,0,0,globalCanvas.width,globalCanvas.height);
    var plusX = (7 * 20) + 250;
    var plusY = (4 * 20) + 250;
    var x = document.getElementById('coordX').value;
    var y = document.getElementById('coordY').value;
    tempCTX.beginPath();
    if (document.getElementById('j_idt25:hidden1').value==='true'){
        console.log("green");
        tempCTX.fillStyle = "green";
    }else{
        console.log("red");
        tempCTX.fillStyle = "red";
    }
    console.log();
    tempCTX.arc(parseInt(x, 10) * 7 * 2.5 + plusX, -parseInt(y, 10) * 7 * 2.5 + plusY, 3, 0, Math.PI * 2);
    tempCTX.fill();
    globalCTX.clearRect(0,0,globalCanvas.width,globalCanvas.height);
    globalCTX.drawImage(tempCanvas,0,0,globalCanvas.width,globalCanvas.height,0,0,globalCanvas.width,globalCanvas.height);
};
drawDots = function (x, y, color) {
    var ctx = globalCanvas.getContext('2d');
    var plusX = (7 * 20) + 250;
    var plusY = (4 * 20) + 250;
    ctx.beginPath();
    if (color===true){
        ctx.fillStyle = "green";
    }else{
        ctx.fillStyle = "red";
    }
    ctx.arc(parseInt(x, 10) * 7 * 2.5 + plusX, -parseInt(y, 10) * 7 * 2.5 + plusY, 3, 0, Math.PI * 2);
    ctx.fill();
    getCoords();
};
swap = function (e) {
    MyFunction(e);
    getCoords();

};
swap2 = function () {
    check(document.getElementById('myRange2'));
    var x = document.getElementById('myRange2').value;
    if (x < 10) {
        document.getElementById('myRange2').value = 10;
        x = 10;
    }
    if (x > 20) {
        document.getElementById('myRange2').value = 20;
        x = 20;
    }
    document.getElementById('myRange2').value = x;
    MyFunction();
};

function check(input) {
    input.value = input.value.replace(/^0{2}/g, '0');
    input.value = input.value.replace(/[^0-9]|^0{2}/g, '');
}

function checkCoords(input) {
    checkIfFull(document.getElementById('coordX'), document.getElementById('coordY'));
    var ch = input.value;
    ch = ch.replace(/[^-\?+0-9]/g, '');
    if (ch >= 21) {
        ch = 21;
    } else {
        if (ch <= -21) {
            ch = -21
        }
    }
    input.value = ch;
    input.placeholder = "Не подходит";

}

function checkIfFull(input, input2) {
    if (input.value !== '' && input2.value !== '') {
        document.getElementById('submit').removeAttribute("disabled");
        if (input.value !== '') {
            input.placeholder = "Заполните, плизки";
        } else {
            input2.placeholder = "Заполните, плизки";
        }
    } else {
        document.getElementById('submit').setAttribute("disabled", 'disabled');
    }

}

var canvasBuffer;
var ctxBuffer;
var canvas;
var ctx ;
var plusX = (7 * 20) + 250;
var plusY = (4 * 20) + 250;
var t=1;
var dt=0.035;
var myReq;
flashX=function () {
    myReq=window.requestAnimationFrame(flashX);
    ctx.beginPath();
    ctx.lineWidth = t;
    ctx.strokeStyle = "rgb(255,92,90)";
    ctx.moveTo(0, plusY);
    ctx.lineTo(2 * plusX, plusY);
    ctx.lineTo(2 * plusX - 5, plusY - 3);
    ctx.moveTo(2 * plusX - 5, plusY + 3);
    ctx.lineTo(2 * plusX, plusY);
    ctx.stroke();
    if (t>5){
        t=2;
        stopFlashingAxis();
        flashX();
    }
    t+=dt;
};
flashY=function () {
    myReq=window.requestAnimationFrame(flashY);
    ctx.beginPath();
    ctx.lineWidth = t;
    ctx.strokeStyle = "rgb(255,92,90)";
    ctx.moveTo(plusX, 2 * plusY);
    ctx.lineTo(plusX, 0);
    ctx.lineTo(plusX - 3, 0 + 5);
    ctx.moveTo(plusX + 3, 0 + 5);
    ctx.lineTo(plusX, 0);
    ctx.stroke();
    if (t>5){
        t=2;
        stopFlashingAxis();
        flashY();
    }
    t+=dt;
};
flashingAxis = function (x) {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    canvasBuffer=document.createElement('canvas');
    ctxBuffer=canvasBuffer.getContext('2d');
    canvasBuffer.width=canvas.width;
    canvasBuffer.height=canvas.height;
    ctxBuffer.drawImage(canvas,0,0,canvas.width,canvas.height,0,0,canvasBuffer.width,canvasBuffer.height);
    if (x==='x'){
        flashX();

    }else{
        flashY();
    }

};
stopFlashingAxis=function () {
    t=3;
    window.cancelAnimationFrame(myReq);
    document.getElementById('myCanvas').getContext('2d').clearRect(0,0,canvasBuffer.width,canvasBuffer.height);
    document.getElementById('myCanvas').getContext('2d').drawImage(canvasBuffer,0,0,canvasBuffer.width,canvasBuffer.height,0,0,canvasBuffer.width,canvasBuffer.height);

};

function sendData() {

}
function updateHiddenX() {
    document.getElementById("formID:hiddenCoordX").value=document.getElementById('coordX').value;
    document.getElementById("formID:hiddenCoordY").value=document.getElementById('coordY').value;
    getCoords();
}
function updateHiddenY() {
    document.getElementById("formID:hiddenCoordX").value=document.getElementById('coordX').value;
    document.getElementById("formID:hiddenCoordY").value=document.getElementById('coordY').value;
    getCoords();
}
function updateHiddenZoom() {
    document.getElementById("formID:hiddenZoom").value=document.getElementById('j_idt9:myRange2').value;
    getCoords();

    $(document.getElementById('formID:j_idt19')).click();
}
function confirmDot() {

    tempCanvas = document.getElementById('myCanvas');
    tempCTX = tempCanvas.getContext('2d');
    tempCTX.clearRect(0,0,globalCanvas.width,globalCanvas.height);
    tempCTX.drawImage(globalCanvas,0,0,globalCanvas.width,globalCanvas.height,0,0,globalCanvas.width,globalCanvas.height);
    var plusX = (7 * 20) + 250;
    var plusY = (4 * 20) + 250;
    var x = document.getElementById('formID:hiddenCoordX').value;
    var y = document.getElementById('formID:hiddenCoordY').value;
    tempCTX.beginPath();
    if (document.getElementById('formID:hiddenInBatman').value==='true'){
        tempCTX.fillStyle = "green";
    }else{
        tempCTX.fillStyle = "red";
    }
    tempCTX.arc(parseInt(x, 10) * 7 * 2.5 + plusX, -parseInt(y, 10) * 7 * 2.5 + plusY, 3, 0, Math.PI * 2);
    tempCTX.fill();
    globalCTX.clearRect(0,0,globalCanvas.width,globalCanvas.height);
    globalCTX.drawImage(tempCanvas,0,0,globalCanvas.width,globalCanvas.height,0,0,globalCanvas.width,globalCanvas.height);
}

window.onload = function(){
    var timeInt = window.setInterval(function(){
        var now = new Date();
        var clock = document.getElementById("clock");
        clock.innerHTML = now.toLocaleTimeString();
    }, 1000);
    window.setInterval(function(){
        var now = new Date();
        var clock = document.getElementById("clock");
        clock.innerHTML = (now.getDate()<10?now.getDate()+"0":now.getDate())+"."+(now.getUTCMonth()+1<10?"0"+now.getUTCMonth()+1:now.getUTCMonth()+1)+"."+now.getFullYear();
        if (timeInt===null){
            timeInt = window.setInterval(function(){
                var now = new Date();
                var clock = document.getElementById("clock");
                clock.innerHTML = now.toLocaleTimeString();
            }, 1000);
        }else {
            window.clearInterval(timeInt);
            timeInt = null;
        }

    }, 9000);
};

/*
*
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        var plusX = 7*zoom;
        var plusY=4*zoom;

        ctx.beginPath();
        ctx.strokeStyle = "rgb(0, 0, 0)";
        ctx.moveTo(-7*zoom+plusX,0+plusY);

        var xz;
        for (xz = -7*zoom; xz < -3*zoom; xz++) {
            var x = xz / zoom;
            var absX = Math.abs(x);
            var y = 1.5 * Math.sqrt((-Math.abs(absX - 1)) * Math.abs(3 - absX) / ((absX - 1) * (3 - absX))) * (1 + Math.abs(absX - 3) / (absX - 3)) * Math.sqrt(1 - (x / 7) * (x / 7)) + (4.5 + 0.75 * (Math.abs(x - 0.5) + Math.abs(x + 0.5)) - 2.75 * (Math.abs(x - 0.75) + Math.abs(x + 0.75))) * (1 + Math.abs(1 - absX) / (1 - absX));
            ctx.lineTo(xz+7*zoom, y * zoom+4*zoom);
        }
        for (xz = -3*zoom; xz < -1*zoom-1; xz++) {
            x = xz / zoom;
            absX = Math.abs(x);
            y=(2.71052+1.5-0.5*absX-1.35526*Math.sqrt(4-(absX-1)*(absX-1)))*Math.sqrt(Math.abs(absX-1)/(absX-1));
            ctx.lineTo(xz+7*zoom, y * zoom+4*zoom);
        }

        ctx.lineTo(-1*zoom+plusX,3*zoom+plusY);
        ctx.lineTo((-0.5*zoom)+plusX,(2.2*zoom)+plusY);
        ctx.lineTo((0.5*zoom)+plusX,(2.2*zoom)+plusY);
        ctx.lineTo(1*zoom+plusX,3*zoom+plusY);

        for (xz = 1*zoom+1; xz < 3*zoom+1; xz++) {
            x = xz / zoom;
            absX = Math.abs(x);
            y=(2.71052+1.5-0.5*absX-1.35526*Math.sqrt(4-(absX-1)*(absX-1)))*Math.sqrt(Math.abs(absX-1)/(absX-1));
            ctx.lineTo(xz+plusX, y * zoom+plusY);
        }
        for (xz = 3*zoom+1; xz < 7*zoom+1; xz++) {
            x = xz / zoom;
            absX = Math.abs(x);
            y = 1.5*Math.sqrt((-Math.abs(absX-1))*Math.abs(3-absX)/((absX-1)*(3-absX)))*(1+Math.abs(absX-3)/(absX-3))*Math.sqrt(1-(x/7)*(x/7))+(4.5+0.75*(Math.abs(x-0.5)+Math.abs(x+0.5))-2.75*(Math.abs(x-0.75)+Math.abs(x+0.75)))*(1+Math.abs(1-absX)/(1-absX));
            ctx.lineTo(xz+plusX, y * zoom+plusY);
        }

        for (xz = 7*zoom; xz > 4*zoom; xz--) {
            x = xz / zoom;
            absX = Math.abs(x);
            y=(-3)*Math.sqrt(1-(x/7)*(x/7)) * Math.sqrt(Math.abs(absX-4)/(absX-4));
            ctx.lineTo(xz+plusX, y * zoom+plusY);
        }
        for (xz = 4*zoom; xz > -4*zoom; xz--) {
            x = xz / zoom;
            absX = Math.abs(x);
            y=Math.abs(x/2)-0.0913722*x*x-3+Math.sqrt(1-(Math.abs(absX-2)-1)*(Math.abs(absX-2)-1));
            ctx.lineTo(xz+plusX, y * zoom+plusY);
        }

        for (xz = -4*zoom-1; xz > -7*zoom-1; xz--) {
            x = xz / zoom;
            absX = Math.abs(x);
            y =(-3)*Math.sqrt(1-(x/7)*(x/7)) * Math.sqrt(Math.abs(absX-4)/(absX-4));
            ctx.lineTo(xz+plusX, y * zoom+plusY);
        }


        ctx.fill();
        ctx.rotate(180);
*/