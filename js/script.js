let string = "";
let buttons = document.querySelectorAll("btn");
Array.from(buttons).forEach((btn)=>{
btn.addEventListener("click" , (e) =>{
    console.log(buttons);
} )
})