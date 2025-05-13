
 document.querySelectorAll("header button")[1].addEventListener("click", function menuShow() {
   document.querySelector("header nav ul").style.display = "flex";
});
document.querySelector("header #close-btn").addEventListener("click", function menuClose() {
   document.querySelector("header nav ul").style.display = "none";
});

/*---------darkmode function----------------*/
 document.querySelector("#dark-mode-btn").addEventListener("click",function darkMode(){
    alert("Dark mode is not available yet");
 });