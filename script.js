//creating canvas & getting context 
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
status = {
    user: false,
}
colors = {
    grass : "#33CC33",
    pavement : "#666666",
    netlight : "#FFFFFF",
    netdark: "#FF0000",
    yellowSRC: "https://imgur.com/LPdjhnl.jpg"
}
const user = {
    x : canvas.width/2,
    y : canvas.height-190,
    Vx : 0,
    Vy : 0,
    slow: 0.2,
    score : 0,
    passedYellow : false,
    passedGreen : false,
    lost : true,
    speedMultiplier: 0,
}
const net = {
    x : 75 ,
    y : 0,
    width : 450,
    height : 50,
}
//draw functions 
function drawRect(x, y, w, h, color){
    context.fillStyle = color;
    context.fillRect(x, y, w, h);
}
var colorI = 0;
var a = 0
function drawUser(x,y,lost){
    if(lost === false){
    var context = canvas.getContext("2d");
    context.save()
    context.translate(x,y)
    if(colors.grass==="#33CC33"){
    var user = document.getElementById(`userC`);
    }
    else if(colors.grass === "#00a900"){
    var user = document.getElementById(`userG`);
    }
    context.drawImage(user, 0, 0, 50, 90);
    context.restore();
    }
}
function drawText(text,x, y, color){
    context.fillStyle = color;
    context.font = "75px Arial";
    context.fillText(text, x, y);
}
function drawNet(){
    for(let i = -100; i <= canvas.height; i+=100){
        drawRect(net.x, net.y + i , net.width, net.height, colors.netlight);
    }
    
    for(let i =  -100; i <= canvas.height; i+=100){
        drawRect(net.x, net.y + i + 50, net.width, net.height, colors.netdark);
    }
    if(user.lost === false){
    net.y += 1.5 - user.Vy
    if(net.y >= 100){
        net.y = 0;
    }
}
}
function update(lost){
}
function render(){
drawNet()
drawRect(0, 0, canvas.width, canvas.height,"#000000");
}
function game(){
    render();
    update(user.lost)
}
setInterval(game,)
document.addEventListener('keydown', keyPressed)
document.addEventListener('keyup', keyUp)
function keyPressed(e){
    key = e.key
    if(key == " ") {
    e.preventDefault();
    if(user.lost === true){
    user.lost = false
    $(".ids").hide();
    $(".scores").show();
    }
  }
}
function keyUp(){
}
var i = 0
// function circularText(txt, radius, classIndex) {
//   txt = txt.split(""),
//     classIndex = document.getElementsByClassName("title")[classIndex];

//   var deg = 25 / txt.length,
//     origin = -12.5;

//   txt.forEach((ea) => {
//     ea = `<b><i><p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p></i></b>`;
//     classIndex.innerHTML += ea;
//     origin += deg;
//   });
// }

// circularText("MONACO GP", 1250, 0);
// function noScroll() {
//   window.scrollTo(0, 0);
// }
