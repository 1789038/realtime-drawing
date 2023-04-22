function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background("#87CEEB");
}

function modelLoaded(){
    console.log('PoseNet is initialized!');
}

function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
    }
}
