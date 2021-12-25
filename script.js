// var reteval = document.getElementById("rate").value;
//  document.getElementById("rate_val").innerText=reteval;
function compute()
{
   var principal = document.getElementById("principal").value;
   if(principal<=0){
       alert("Enter a positive number");
   }
   else{
    var reteval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=reteval+"%.";
   var rate = document.getElementById("rate").value;
   var years = document.getElementById("years").value;
   var interest =(parseInt( principal)*parseInt( years)*parseInt( rate))/100;
   var year =new Date().getFullYear()+parseInt(years);
   document.getElementById("result").innerHTML ="if your deposit "+ principal+"<br>at an interest rate of"+rate+ "%." + "<br>You will receive an amount of" +interest+"," +"<br>in the year"+ year+"<br>";
   }
}

S      

     
