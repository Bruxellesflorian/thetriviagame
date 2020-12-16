const body = document.body
const footerBAR = document.querySelector("#footerBAR")
footerBAR.style.display ="none"
const win = document.querySelector("#win")
win.style.display="none"
const lose = document.querySelector("#lose")
lose.style.display="none"
const david = document.querySelector("#david")
david.style.display="none"

//______________________________________________________________Création table

const table = document.createElement("table")
const panelDeChoix = document.createElement("div")

const selector = document.createElement("select")

//______________________________________________________________Choix Genre

const listcategory = ["General knowledge", " Books", " Film", " Music", " Musicals & Theatres", " Television", " Video Games", " Board Games", "Science & Nature", "Science: Computers", "Science Mathematics", "Mythology", "Sports", "Geography", "History", "Politics", "Art", "Celebrities"]

const selectorCATEGORY = document.createElement("select")

for (let i = 0; i < listcategory.length; i++) {
    const optionCATEGORY = document.createElement("option")
    optionCATEGORY.innerHTML = listcategory[i]
    selectorCATEGORY.appendChild(optionCATEGORY)
    selectorCATEGORY.addEventListener("click",function(e){
    
        for (let u =0 ; u<listcategory.length;u++){
            if(e.target.value.match(listcategory[u])){
                opti = u+9
                console.log('opti:', opti)
                
            }
        }
    })
}


//______________________________________________________________Difficulty 

const difficultyList = ["easy", "medium", "hard"]
const selectorDIFFICULTY = document.createElement("select")
for (let i = 0; i < difficultyList.length; i++) {
    const optionDifficulty = document.createElement("option")
    optionDifficulty.innerText = difficultyList[i]
    selectorDIFFICULTY.appendChild(optionDifficulty)
}
//______________________________________________________________nb de question

for (let i = 0; i < 50; i++) {
    const option = document.createElement("option")
    option.innerHTML = i
    selector.appendChild(option)
}
const intro2 = document.querySelector("#intro")
selector.addEventListener("click", function () {
    if (selector.value > 0) {
        setTimeout(() => {
            intro2.innerHTML ="Prepare !"
        }, 1000);
        setTimeout(() => {
            intro2.innerHTML ="for"
        }, 2000);
        setTimeout(() => {
            intro2.innerHTML ="your"
        }, 3000);
        setTimeout(() => {
            intro2.innerHTML ="Destiny !!"
        }, 4000);
        setTimeout(() => {
            intro2.innerHTML =""
            intro2.classList.add("smallSize")
            sendApiRequest()
        }, 7000);
        
    }
})

//______________________________________________________________Start API
async function sendApiRequest() {
    console.log('opti:', opti)
    let response = await fetch("https://opentdb.com/api.php?amount=" + selector.value + "&category=" + opti + "&difficulty=" + selectorDIFFICULTY.value + "&type=boolean");
    let data = await response.json()
    console.log(data);
    useApiData(data)
    // .catch(error => {
    //     alert("bug")
    // })
}
const nice = document.querySelector("#nice")
let point = 0;
function useApiData(data) {
    
    let nbQuest = selector.value;
    const category = document.createElement("div")
    category.innerHTML = selectorCATEGORY.value
    intro2.appendChild(category)

    const difficulty = document.createElement("div")
    difficulty.innerHTML ="Difficulty : " + selectorDIFFICULTY.value
  
    intro2.appendChild(difficulty)

    let lastQuest = nbQuest
    function fin(){       
        if(lastQuest == 0){
            intro2.innerHTML = "Nice, this awesome game is over, like the music of Guetta and Kelly rowland <br> Your fucking score is "+ point
            david.style.display="block"
        }
    }

    for (let i = 0; i < nbQuest; i++) {
        intro2.style.height ="fit-content"
        const hr = document.createElement("hr")
        intro2.appendChild(hr)
        const question = document.createElement("div")
        question.innerHTML = `Question: ${data.results[i].question}`
        intro2.appendChild(question)
        const answer1 = document.createElement("button")
        answer1.innerHTML = data.results[i].correct_answer
        answer1.classList.add(".correct")
        const answer2 = document.createElement("button")
        answer2.innerHTML = data.results[i].incorrect_answers
        let rand = Math.floor(Math.random() * 2)
        if (rand == 0) {
            intro2.appendChild(answer1)
            intro2.appendChild(answer2)
        } else {
            intro2.appendChild(answer2)
            intro2.appendChild(answer1)
        }
        answer1.addEventListener("click", function () {
            lastQuest--
            console.log("gg");
            point++
            fin()
            nice.innerHTML = point
            answer1.style.display ="none"
            answer2.style.display ="none"
            question.style.display ="none"
            footerBAR.style.display ="block"
            win.style.display="block"
            setTimeout(() => {
                win.style.display="none" 
            }, 1500);
        })
        answer2.addEventListener("click", function () {
            lastQuest--
            fin()
            console.log("lose");
            answer1.style.display ="none"
            answer2.style.display ="none"
            question.style.display ="none"
            lose.style.display="block"
            setTimeout(() => {
                lose.style.display="none" 
            }, 1500);
        })
    }


}
