const textArray = [
"Android Developer",
"Full Stack Developer",
"Fitness Tech Builder"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect(){

const element = document.getElementById("typing");

if(index >= textArray.length){
index = 0;
}

currentText = textArray[index];

if(!isDeleting){
element.textContent = currentText.substring(0,charIndex++);
if(charIndex > currentText.length){
isDeleting = true;
setTimeout(typeEffect,1000);
return;
}
}

else{
element.textContent = currentText.substring(0,charIndex--);
if(charIndex === 0){
isDeleting = false;
index++;
}
}

setTimeout(typeEffect,100);

}

typeEffect();
async function loadRepos(){

const response = await fetch("https://api.github.com/users/sahilahmed9786-droid/repos");

const repos = await response.json();

const container = document.getElementById("repo-container");

repos.slice(0,6).forEach(repo => {

const card = document.createElement("div");

card.className = "project";

card.innerHTML = `

<h3>${repo.name}</h3>
<p>${repo.description || "No description available"}</p>
<a href="${repo.html_url}" target="_blank">View Repository</a>
`;

container.appendChild(card);

});

}

loadRepos();
const textArray = [
"Android Developer",
"Full Stack Developer",
"Machine Learning Enthusiast"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect(){

const element = document.getElementById("typing");

if(index >= textArray.length){
index = 0;
}

currentText = textArray[index];

if(!isDeleting){

element.textContent = currentText.substring(0,charIndex++);
if(charIndex > currentText.length){
isDeleting = true;
setTimeout(typeEffect,1000);
return;
}

}

else{

element.textContent = currentText.substring(0,charIndex--);
if(charIndex === 0){
isDeleting = false;
index++;
}

}

setTimeout(typeEffect,80);

}

typeEffect();
