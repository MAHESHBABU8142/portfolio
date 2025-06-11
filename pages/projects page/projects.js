
// JavaScript code for the To-Do List application

document.getElementById("btn").addEventListener("click", function showIt() {
   let newItem=document.createElement("li");
   let checkBox=document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
   let newTask=document.createElement("label");
    newTask.setAttribute("for", "todo-input");
   newTask.innerHTML=document.getElementById("task-input").value;
    checkBox.addEventListener("click", function() {
    if (checkBox.checked) {
        newTask.style.textDecoration="line-through";
        newTask.style.color="gray";
    }
    else {
        newItem.style.textDecoration="none";
        newItem.style.color="black";
    }
    }
    );
   let deleteButton=document.createElement("span");
   deleteButton.setAttribute("class", "material-symbols-outlined");
    deleteButton.innerHTML="delete";
    deleteButton.addEventListener("click", function() {
    newTask.remove();
    deleteButton.remove();
    checkBox.remove();
    newItem.remove();
    });
   newItem.appendChild(checkBox);
   newItem.appendChild(newTask);
   newItem.appendChild(deleteButton);
    document.querySelector("main ul").appendChild(newItem);
    document.getElementById("task-input").value="";
});

/*to do app dark mode*/
document.getElementById("dark-mode-btn").addEventListener("click", function darkMode() {
 document.querySelector("header").style.backgroundColor=" rgb(59, 56, 56";
 document.querySelector("header").style.color="white";
    document.querySelector("main").style.backgroundColor="black";
    document.querySelector("main").style.color="white";
    document.querySelector("main ul").style.color="black";
    document.querySelector("footer").style.backgroundColor=" rgb(59, 56, 56";

    console.log("dark mode");
});

 // JavaScript code for the calculator application
      for (let i=0; i <=18; i++) {
        document.querySelectorAll("#calculator-app main div button")[i].addEventListener("click", function showValue() {
        document.getElementById("display").innerHTML += this.value;
        console.log(this.value);
        });
    }
    document.querySelectorAll("#calculator-app main div button")[1].addEventListener("click", function clearDisplay() {
        document.getElementById("display").innerHTML = "";
    });
    document.querySelectorAll("#calculator-app main div button")[19].addEventListener("click", function allClearDisplay() {
        document.getElementById("display").innerHTML ="";
    });


