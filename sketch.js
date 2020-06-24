var bg,input,box,val1;
var x = 1,y= 1,z = 1;
var NAME = "Name";
localStorage.PWD = 123;
r = 150,g = 100,b = 300;
var dat = 1;
function preload(){
  bg  =loadImage("ad2.jpg")
  log = loadImage("logo.png")
  bg2 = loadImage("d.png")
}

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  logo = createSprite(width/2,height/10);
  logo.addImage(log)

  input = createInput("Name");
input.position(width/2.3,height/2);

input3 = createInput("New Password");
input3.position(width/2.3,-22222);

input2 = createInput(``,`password`);
input2.position(width/2.3,height/1.6);

button1 = createButton('Log In');
button1.position(width/2.2,height/1.45);
button1.mousePressed(check);
button1.style(`background`,`white`);

button2 = createButton('  Sign up   ');
button2.position(width/2,height/1.45);
button2.mousePressed(logt);
button2.style(`background`,`white`);

button3 = createButton('Set Pass   ');
button3.position(width/2,-3875835);
button3.mousePressed(logt);
button2.style(`background`,`white`);


button5 = createButton('↩Home');
button5.position(width/2.1,-5555);
button5.mousePressed(again);
button5.style(`background`,`red`);

box = createSprite(width/2,height/1.8,width/5,height/2);

}
// ↩↲↵
function draw(){
  r = r+2;
  g = g+0.5;
  b = b-6;

  if(g>255){
    r = random(0,255);
    g = random(180,250);
    b = random(0,255);
  }


  console.log(dat);
  background(bg);
  box.shapeColor =rgb(r,g,b,0.589)
 if(y===2){
  background(bg2)
  z= 4;
  box.visible = false;
 }
  drawSprites();
  if(x ===1){
  fill("white")
  textSize(20);
  text("Enter Your Name:",width/2.3,height/2.1);
  textSize(18);
  text("Enter Your Password:",width/2.3,height/1.65);
  textSize(30);
  text("Authenticate",width/2.3,height/2.6);
  }
 if(x === 3){
   textStyle("bold");
  textSize(18);
  fill(r+100,g+100,b+100);
text("Wrong User Id Or Password",width/2.4,height/1.3);

 }
 if(x === 4){
  textStyle("bold");
 textSize(25);
 fill("white");
text("New Password",width/2.3,height/2);

}
if(z===4){
// textStye("bold")
textSize(45);
fill("red");
textFont("AR DECODE")
text(val1,width/2.3,height/2.1);
text(date,width/4,height/1.3);
}
}

function check(){


   val1 = input.value();
  let val2 = input2.value();

  if(val1==NAME){
x=3
  }else{             
    
 }
 

  if(val2==localStorage.PWD&&val1!=NAME){
    removeSprite(box);
    removeSprite(logo);
  box.visible = false;
  b = -555

    input.position(width/2.3,-500);
    input2.position(width/2.3,-200);
    button1.position(width/2.2,-666);
    button2.position(width/2,-666);
    button3.position(width/2,-3875835);
    // next();

    y = 2;
    x = 2;
  }else{
x = 3;
  }

}

function logt(){
  x =4;
input3.position(width/2.3,height/1.7);

button3.position(width/2,height/1.45);
input.position(width/2.3,-55555);
  input2.position(width/2,-555);
  button1.position(-22220,-22222)
button2.position(width/2,-6486);

button5.position(width/2.3,height/1.45);
// button2.value("go for it")

localStorage.PWD = input3.value();

  
}
function update(){
}
function again(){
  x = 1
  input.position(width/2.3,height/2);
input3.position(width/2.3,-22222);
input2.position(width/2.3,height/1.6);
button1.position(width/2.2,height/1.45);
button2.position(width/2.1,-505);
button5.position(width/2.1,-11111);
button5.position(width/2.1,-5555);
}

/*
<ThANkYOU>
<h1>That's All</h1>
</ThankYou>

*/
