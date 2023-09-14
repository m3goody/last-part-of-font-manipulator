noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(550,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftwristX=results[0].leftwrist.x;
        rightwristX=results[0].rightwrist.x;
        console.log("leftwristX="+leftwristX+",rightwristX="+rightwristX+",difference="+difference);
    }
}
function modelLoaded(){
    console.log('PoseNet Has initialized');
}
function draw(){
    background('#868685');
    document.getElementById("square_side").innerHTML="width and height of the square will be:"+diference+"px";
    textSize(difference);
    fill('2E00FG');
    stroke('00C9FF');
    text("Timothy Jung",250,450);
}