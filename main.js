prediction_1 = "";
prediction_2 = "";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image"src="'+data_uri+'"/>';

    });
}
console.log('ml5 version ',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/71wYgjoM5/model.json',modelLoaded);
function modelLoaded() {
    console.log("model loaded");
    
    }
    
    function speak() {
        var synth = window.speechSynthesis;
        speak_data_1 = "The First Prediction is "+prediction_1;
        speak_data_2 = "And The Second Prediction is "+prediction_2;
        var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
        synth.speak(utterThis);
    }
    function check() { 
     img = document.getElementById('captured_image');
     classifier.classify(img,got_result);
    
    }
    
    function got_result(error,results) {
        if(error){console.error(error);}
        else{console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = result[0].label;
        prediction_2 = result[1].label;
        speak();
        if(result[0].label =="Amazing") {
            document.getElementById("update_gesture").innerHTML =  "&#1280756;";
            
        }
        if(result[0].label =="Best") {
            document.getElementById("update_gesture").innerHTML =  "&#128077;";
            
        }
        if(result[0].label =="Victory") {
            document.getElementById("update_gesture").innerHTML =  "&#9996;";
            
        }
        if(result[1].label =="Amazing") {
            document.getElementById("update_gesture2").innerHTML =  "&#1280756";
            }
        if(result[1].label =="Best") {
                document.getElementById("update_gesture2").innerHTML =  "&#128077;";
        }
        if(result[1].label =="Victory") {
                    document.getElementById("update_gesture2").innerHTML =  "&#9996;";
        }
    }
    }