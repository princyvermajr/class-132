img="";
object=[];
status="";
function preload(){
    img=loadImage("tv.webp")
    }
    function setup(){
    canvas=createCanvas(500,400);
    canvas.center
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status detecting objects";

}
function modelLoaded(){
console.log("model loaded sucessfuly");
status=true;
objectDetector.detect(img,gotResult);

}
function gotResult(error,result){
if(error){
    console.log(error);

}
else{
    console.log(result);
    object=result;
}
}


    function draw(){
     image(img,0,0,500,400);
     if(status=""){
        for(i=0;i<object.length;i++){
           document.getElementById("status").innerHTML= "status object detected";
           fill("red");
        percent=Math.floor(object[i].confidence*100)
       text(object[i].label+""+percent+"%",object[i].x+15,object[i].y+15);
       noFill();
       stroke("black");
       rect(object[i].x,object[i].y,object[i].width,object[i].height);
       }
    }  
    }