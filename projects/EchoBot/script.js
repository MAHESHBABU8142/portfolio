
document.querySelector("section input").addEventListener("keypress",function(){
   if (event.key==="Enter"){

//code for printing what user typed as input
 let userText=document.querySelector("section input").value ;
 let userWords=userText.split(" ")

let j=0;
 setInterval(function(){
      if (j<userWords.length) {
       document.querySelector("p").innerHTML+=userWords[j]+" ";
       j++;
      }
      else {
         let time=100*userWords.length;
         setTimeout(time);
      }
 },100);
    document.querySelector("p").innerHTML+="<br>";
    document.querySelector("section input").value="";
}
});