const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundobj1,score=0,particleobj,gameState="end",count=0;
var plinkos=[];
var particles=[];
var divisionobj=[];
function setup() {
createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  groundobj1 = new ground(100,795,1800,20)

//divisionobj1 = new Divisions(1,685,10,200)


for (var k=0;k<=width; k=k+80){
  divisionobj.push(new Divisions(k,685,10,200))
}

for (var j =40;j<=width; j=j+50){
 plinkos.push(new Pinko(j,75,5));
}

for (var j =15;j<=width-10; j=j+50){
  plinkos.push(new Pinko(j,175,5));
 }

 for (var j =40;j<=width; j=j+50){
  plinkos.push(new Pinko(j,275,5));
 }

 for (var j =15;j<=width-10; j=j+50){
  plinkos.push(new Pinko(j,375,5));
 }

  Engine.run(engine);
}

function draw() {
  background("black"); 

  fill("yellow");
  textSize(20)
  text("score: "+score,200,40);

  groundobj1.display();
 for(var i=0;i<plinkos.length;i=i+1){
   plinkos[i].display();
 }
 for(var t=0;t<divisionobj.length;t=t+1){
  divisionobj[t].display();
}
if(frameCount%60===0){
  particles.push(new particle(random(width/2-10,width/2+10),10,10))
}
for(var p=0;p<particles.length;p=p+1){
  particles[p].display();
}
if(particleobj!==undefined){
  console.log(particleobj)
  particleobj.display();
  console.log(particleobj.body.position.y)

  if(particleobj.body.position.y>760){
    console.log(particleobj.body.position.x)
    console.log(particleobj.body.position.y)

    if(particleobj.body.position.x<300){
      score=score+500;
      particleobj=null;
      if(count>=5)gameState="end";
    }
  }

}
  
  drawSprites();
}
function mousePressed() { 
  console.log(gameState)
  if(gameState!=="end"){
  console.log(gameState)
   count++;
   console.log(count)
     particleobj=new particle(mouseX, 10, 10);
     console.log(particleobj)
   }
  }