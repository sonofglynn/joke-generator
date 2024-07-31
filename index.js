// main.js 

let joke;

function generateSetup(button) {
    // get rid of button
    let setupButtonContainer = document.getElementById("setup-button-container");
    setupButtonContainer.innerHTML = "<p class=\"sub-title\">Joke:</p>";

    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(json => {
            // display setup
            joke = json;
            let setup = joke.setup;

            let setupP = document.createElement("p");
            setupP.classList.add('joke-text')
            let setupNode = document.createTextNode(setup);
        

            setupP.appendChild(setupNode);
        
            let setupContainer = document.getElementById("setup-container");
            setupContainer.appendChild(setupP);

            // create new button that will display punchline onclick
            let punchlineButton = document.createElement("button")
            punchlineButton.innerHTML = "?";
            punchlineButton.addEventListener("click", function () {
                generatePunchline(this, joke.punchline)
            });
            let punchlineButtonContainer = document.getElementById("punchline-button-container");
            punchlineButtonContainer.appendChild(punchlineButton);
        });
}

function generatePunchline(button, punchline) {
    let punchlineButtonContainer = document.getElementById("punchline-button-container");
    punchlineButtonContainer.innerHTML = "<p class='sub-title'>Punchline:</p>"

    let punchlineP = document.createElement("p");
    punchlineP.classList.add('joke-text');
    let punchlineNode = document.createTextNode(punchline);
    punchlineP.appendChild(punchlineNode);
    let punchlineContainer = document.getElementById("punchline-container");
    punchlineContainer.appendChild(punchlineP);

    let newJokeButton = document.createElement("button")
    newJokeButton.innerHTML = "Wanna hear another joke?";
    newJokeButton.addEventListener("click", function () {
        resetJoke();
    });
    let newJokeButtonContainer = document.getElementById("new-joke-button-container");
    newJokeButtonContainer.appendChild(newJokeButton);

}

function resetJoke() {
    // leave setup button container the way it is
    // clear the rest

    let setupContainer = document.getElementById("setup-container");
    setupContainer.innerHTML = "";

    let punchlineButtonContainer = document.getElementById("punchline-button-container");
    punchlineButtonContainer.innerHTML = "";

    let punchlineContainer = document.getElementById("punchline-container");
    punchlineContainer.innerHTML = "";

    let newJokeButtonContainer = document.getElementById("new-joke-button-container");
    newJokeButtonContainer.innerHTML = "";

    // display new joke setup
    generateSetup();
}