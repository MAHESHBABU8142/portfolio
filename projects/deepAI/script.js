let userInput=document.querySelector("footer input");
document.querySelector("footer #send-icon").addEventListener("click",function(){
    let words=userInput.value.split(" ");
    let index=0;
    let Interval= setInterval(function(){
            if (index<words.length){
            document.querySelector("#result p").innerHTML +=words[index]+" ";
            index++;
            }
            else{
                document.querySelector("#result p").innerHTML +="<br>";
                clearInterval(Interval);
            }
    },100);
       userInput.value = "";

});