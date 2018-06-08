function myMove() {
  //get all the elements that will be animated around in an ellipse
  var elem = document.getElementById("iman1");
  var elem2 = document.getElementById("iman2");
  var elem3 = document.getElementById("iman3");
  var elem4 = document.getElementById("iman4");
  var elem5 = document.getElementById("iman5");
  var elem6 = document.getElementById("iman6");
  var elem7 = document.getElementById("iman7");
  //major and minor radii
  var a;
  var b;
  //the center of the ellipse
  var initX;
  var initY;
  //Use polar coordinates to set the intitial start point of each element on the ellipse, gets multiplied by pi later on 
  var polar = 0.02;
  var polarB = 0.30;
  var polarC = 0.58;
  var polarD = 0.87;
  var polarE = 1.16;
  var polarF = 1.45;
  var polarG = 1.74;
  //next set the interval for the animation 
  setInterval(frame, 25);
  function frame() {
  	a = window.innerWidth/2 - ((elem.clientWidth)/2);
  	b = window.innerHeight/2 - ((elem.clientHeight)/2);
  	initX = window.innerWidth/2 - ((elem.clientWidth)/2);
  	initY = window.innerHeight/2 - ((elem.clientHeight)/2);
    if (polar == 2) {
      polar=0;
    } else {
      polar+= 0.001; 
      elem.style.left = initX + a * Math.cos(polar*Math.PI) + 'px';
      elem.style.top = initY + b * Math.sin(polar*Math.PI) + 'px'; 
      
    }
   
  	if (polarB == 2) {
      polarB=0;
    } else {
      polarB+= 0.001; 
      elem2.style.left = initX + a * Math.cos(polarB*Math.PI) + 'px';
      elem2.style.top = initY + b * Math.sin(polarB*Math.PI) + 'px'; 
      
    }

  	if (polarC == 2) {
      polarC=0;
    } else {
      polarC+= 0.001; 
      elem3.style.left = initX + a * Math.cos(polarC*Math.PI) + 'px';
      elem3.style.top = initY + b * Math.sin(polarC*Math.PI) + 'px'; 
      
    }

  	if (polarD == 2) {
      polarD=0;
    } else {
      polarD+= 0.001; 
      elem4.style.left = initX + a * Math.cos(polarD*Math.PI) + 'px';
      elem4.style.top = initY + b * Math.sin(polarD*Math.PI) + 'px'; 
      
    }

  	if (polarE == 2) {
      polarE=0;
    } else {
      polarE+= 0.001; 
      elem5.style.left = initX + a * Math.cos(polarE*Math.PI) + 'px';
      elem5.style.top = initY + b * Math.sin(polarE*Math.PI) + 'px'; 
      
    }

  	if (polarF == 2) {
      polarF=0;
    } else {
      polarF+= 0.001; 
      elem6.style.left = initX + a * Math.cos(polarF*Math.PI) + 'px';
      elem6.style.top = initY + b * Math.sin(polarF*Math.PI) + 'px'; 
      
    }

  	if (polarG == 2) {
      polarG=0;
    } else {
      polarG+= 0.001; 
      elem7.style.left = initX + a * Math.cos(polarG*Math.PI) + 'px';
      elem7.style.top = initY + b * Math.sin(polarG*Math.PI) + 'px'; 
      
    }
	}
}