

const intro = document.querySelector("#intro")
setTimeout(() => {
    intro.innerHTML = "welcooome"
    intro.style.height = "fit-content"
}, 1000);
setTimeout(() => {
    intro.innerHTML = "toooo"
    intro.style.height = "fit-content"
}, 2000);
setTimeout(() => {
    intro.innerHTML = "Trivia Game !!!!"
    intro.classList.add("fontsize")
    intro.style.height = "fit-content"
}, 4000);
setTimeout(() => {
    intro.innerHTML = "Select your CATEGORY" + "<br>"
    intro.appendChild(selectorCATEGORY)
    intro.appendChild(suiv)
}, 6000);
let page = 0;
const suiv = document.createElement("div")
suiv.innerHTML = "valid"
suiv.classList.add("boutonValid")

let rec ,rec2, rec3;

suiv.addEventListener("click", function () {
    rec = selectorCATEGORY.value
    rec = selectorDIFFICULTY.value
    rec = selector.value
    selectorCATEGORY.style.visibility = "hidden"
    intro.innerHTML = ""
    if(page == 0){
        select2()
        page++
    }else if(page == 1){
        select3()
        page++
    }else if (page ==2){
        
        console.log(rec);
        console.log(rec2);
        console.log(rec3);
    }
})
function select2() {
    console.log(rec);
    setTimeout(() => {
        intro.innerHTML = "Select DIFFICULTY !!" + "<br>"
        intro.appendChild(selectorDIFFICULTY)
        intro.appendChild(suiv)
    }, 500);
}
function select3(){
    console.log(rec);
    console.log(rec2);
    setTimeout(() => {
        intro.innerHTML ="Select how many question ?" + "<br>"
        intro.appendChild(selector)
        intro.appendChild(suiv)
    }, 500);
}
