const burger =  document.querySelector(".burger")
const spanBir =  document.querySelector(".span1")
const spanIkki =  document.querySelector(".span2")
burger.addEventListener("click", function(){
    burger.classList.toggle('toggle')
    console.log("ishladi");
    spanBir.classList.toggle('span11')
    spanIkki.classList.toggle('span22')
})