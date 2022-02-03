function setClock(){
    var digiHour = document.getElementById("hour");
    var digiMin  = document.getElementById("min");
    var digiSec  = document.getElementById("sec");
    var digiampm = document.getElementById("ampm");

   var crrentTime = new Date();
   var theHour    = crrentTime.getHours();
   var theMin     = crrentTime.getMinutes();
   var theSec     = crrentTime.getSeconds();
   if(theHour==0){
       theHour= 12;
   }

   if(theHour>12){
       digiampm.innerHTML="PM";
       theHour= theHour - 12
   }else{digiampm.innerHTML="AM"}

   if(theHour<10){
       theHour= "0" + theHour;
   }
   if(theMin<10){
       theMin= "0" + theMin;
   }
   if(theSec<10){
       theSec = "0" + theSec;
   }
   digiHour.innerHTML= theHour + " : ";
   digiMin.innerHTML= theMin + " : ";
   digiSec.innerHTML= theSec + " ";
}
setInterval(setClock,1000);
setClock();