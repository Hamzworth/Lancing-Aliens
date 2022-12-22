 function start() {
      navigator.mediaDevices.getUserMedia({ audio: true });
      classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
 }

  function modelReady(){
    console.log("We are ready")
    classifier.classify(gotResults);
  }

  function gotResults (error, results) {
    if(error){
        console.error(error);
    }
    else {
        console.log(results);
        random_r= Math.floor(Math.random() * 255) + 1;
        random_g= Math.floor(Math.random() * 255) + 1;
        random_b= Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML="I can hear sound of: " + results[0].label ;
        document.getElementById("result_confidence").innerHTML=" Accuracy : " + (results[0].confidence * 100).toFixed(2) + " %" ;
        document.getElementById("result_label").style.color="rgb(" + random_r + "," + random_g + "," + random_b + ")";

        image1=document.getElementById("alien1");
        image2=document.getElementById("alien2");
        image3=document.getElementById("alien3");
        image4=document.getElementById("alien4");

         if (results[0].label=="Clap"){
          image1.src='alien-colourful.gif';
          image2.src='alien-white.png';
          image3.src='alien-background.png';
          image4.src='alien-green.png';
        }
        else if (results[0].label == "Bell"){
          image1.src='alien-colourful.png';
          image2.src='alien-white.gif';
          image3.src='alien-background.png';
          image4.src='alien-green.png';
        }
        else if (results[0].label == "Snapping"){
          image1.src='alien-colourful.png';
          image2.src='alien-white.png';
          image3.src='alien-background.gif';
          image4.src='alien-green.png';
        }
        else {
          image1.src='alien-colourful.png';
          image2.src='alien-white.png';
          image3.src='alien-background.png';
          image4.src='alien-green-gif.gif';
        }
        
        
  }
  }