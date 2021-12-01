const userInput = document.querySelector("#user-input");
const translateBtn = document.querySelector("#translate-btn");
const textOutput = document.querySelector("#text-output");


//API url

const url = "https://api.funtranslations.com/translate/minion.json";

translateBtn.addEventListener("click", translateText);

function translateText(){
    var text1 = userInput.value;
    var newUrl = `${url}?text=${text1}`;

    fetch(newUrl)
        .then(response => response.json())
        .then(response => {
            var translatedText = response.contents.translated;
            console.log(translateText)
            textOutput.innerText = translatedText;
        }).catch(err => {
            console.log("Server is down try after sometime")
            alert("Server error Try again later")
        } )

} 

