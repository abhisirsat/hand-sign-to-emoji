Webcam.set({

width:350,
height:300,
image_format:'png',
png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image"src="'+data_uri+'"/> ';

    });
}

console.log('mml5 version :',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/x_5npq-2S/model.json',modelLoaded);

function modelLoaded(){
console.log('Model Loaded');

}

function speak(){

var synth = window.speechSynthesis;
speak_data1 = "the first prediction is " + prediction_1;
speak_data2 = "and the second prediction is " + prediction_2;
var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
synth.speak(utterThis);
}

function check(){

img=document.getElementById('captured_image');
classifier.classify(img,gotResult);

}

function gotResult(error,results){

if(error){

console.error(error);

}

else{

console.log(results);
document.getElementById("result_emotion").innerHTML=results[0].label;
document.getElementById("result_emotion2").innerHTML=results[1].label;
prediction_1=results[0].label;
prediction_2=results[1].label;
speak();


 if(results[1].label=="ok"){

    document.getElementById("result_emogi2").innerHTML="&#128077";
    
    }
    
    if(results[1].label=="rock"){
    
    document.getElementById("result_emogi2").innerHTML="&#129304";
        
    }
    
    if(results[1].label=="pointing"){
    
    document.getElementById("result_emogi2").innerHTML="&#128073";
            
     }    

     if(results[1].label=="gun"){
    
        document.getElementById("result_emogi2").innerHTML="&#128070";
                
         }    


         
         if(results[0].label=="ok"){

            document.getElementById("result_emogi2").innerHTML="&#128077";
            
            }
            
            if(results[0].label=="rock"){
            
            document.getElementById("result_emogi2").innerHTML="&#129304";
                
            }
            
            if(results[0].label=="pointing"){
            
            document.getElementById("result_emogi2").innerHTML="&#128073";
                    
             }    
        
             if(results[0].label=="gun"){
            
                document.getElementById("result_emogi2").innerHTML="&#128070";
                        
                 }    
        
}
}
