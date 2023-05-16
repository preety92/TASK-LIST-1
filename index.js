import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase,ref,push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"



const appSettings={
    databaseURL:"https://trial-7af47-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app =initializeApp(appSettings)
const database=getDatabase(app)
const moviesIndb=ref(database,"movies")

const inputFieldEl=document.getElementById("input-field");
const buttonEl=document.getElementById("add-button");
const shoppingList=document.getElementById("shopping-list");

buttonEl.addEventListener("click",function(){
let inputValue=inputFieldEl.value
push(moviesIndb,inputFieldEl.value)
console.log(`${inputValue} added to database`)

addshoppingList(inputValue)
clearinputFieldEl()



})
function clearinputFieldEl() {
    document.getElementById("input-field").value="";  
}
function addshoppingList(item) {
    shoppingList.innerHTML+=`<li>${item}</li>`
}