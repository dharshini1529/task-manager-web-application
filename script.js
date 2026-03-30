function signup(){

let user=document.getElementById("signupUser").value;
let pass=document.getElementById("signupPass").value;

localStorage.setItem("username",user);
localStorage.setItem("password",pass);

alert("Account Created");

window.location.href="index.html";

}



function login(){

let user=document.getElementById("loginUser").value;
let pass=document.getElementById("loginPass").value;

let storedUser=localStorage.getItem("username");
let storedPass=localStorage.getItem("password");

if(user===storedUser && pass===storedPass){

window.location.href="task.html";

}

else{

alert("Invalid Login");

}

}



function addTask(){

let task=document.getElementById("taskInput").value;

let li=document.createElement("li");

li.innerHTML=`
<span onclick="completeTask(this)">${task}</span>

<div>

<button onclick="editTask(this)">Edit</button>

<button onclick="deleteTask(this)">Delete</button>

</div>
`;

document.getElementById("taskList").appendChild(li);

document.getElementById("taskInput").value="";

}



function deleteTask(btn){

btn.parentElement.parentElement.remove();

}



function editTask(btn){

let taskText=btn.parentElement.previousElementSibling;

let newTask=prompt("Edit Task",taskText.innerText);

taskText.innerText=newTask;

}



function completeTask(task){

task.style.textDecoration="line-through";

}