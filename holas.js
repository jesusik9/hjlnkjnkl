song="";
function preload(){
song=loadSound("musica.mp3")


}
rightWristX=0;
leftWristY=0;
rightWristY=0;
leftWristX=0;

scoreRightWrist=0;
scoreLeftWrist=0;
function setup(){

    canvas=createCanvas(600,500);
  canvas.center();
  video=createCapture(VIDEO);
  video.hide();
poseNet=ml5.poseNet(video,hola);
poseNet.on("pose",holas);

}
function hola(){console.log ("poseNet esta activado")



}
function holas(bobi){
if(bobi.length>0){
    scoreRightWrist=bobi[0].pose.keypoints[10].score;
scoreLeftWrist=bobi[0].pose.keypoints[9].score;console.log("puntuacion"+scoreRightWrist+"puntuacion left"+scoreLeftWrist);
rightWristX=bobi[0].pose.rightWrist.x;
rightWristY=bobi[0].pose.rightWrist.y;
cons0le.log("posisionx"+rightWristX+"posisiony"+rightWristY);
leftWristX=bobi[0].pose.leftWrist.x;
leftWristY=bobi[0].pose.leftWrist.y;
console.log("posisiony"+leftWristX+"posisiony"+leftWristY);

}

}
function draw(){image(video,0,0,600,500);
fill("blue");
stroke("blue");
if(scoreRightWrist>0.2){circle(rightWristX,rightWristY,25);
    


}

}