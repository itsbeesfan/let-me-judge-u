const startScreen = document.getElementById('start-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');

const veredictEl = document.getElementById("veredict");
const commentEl = document.getElementById("comment");
const scoreEl = document.getElementById("score");

document.getElementById("judge-button").addEventListener("click", () => {
    startScreen.style.display = "none";
    loadingScreen.style.display = "block";

    setTimeout(() => {
        const score = Math.floor(Math.random() * 10) + 1;
        let veredict, comment, theme;

        if (score > 8) { veredict = "you're literally me";
            comment = "omg twin... can we be friends?";
            theme = "me";}
        else if (score > 6) { veredict = "niche asf";
        comment = "you're into cool weird stuff... you make good playlists tho."
        theme = "niche";}
        else if (score > 4) {
        veredict = "basic";
        comment = "do you own a starbucks cup? do you have a labubu?";
        theme = "basic";}
        else {
            veredict = "existential type shit";
            comment = "are you... ok?"
            theme = "existential";}

        loadingScreen.style.display = "none";
        resultScreen.style.display = "block";
        veredictEl.textContent = veredict;
        commentEl.textContent = comment;
        scoreEl.textContent = `score: ${score}/10`;

        document.body.className = theme;
    }, 2000);
});

document.getElementById("retry-button").addEventListener("click", () => {
    resultScreen.style.display = "none";
    startScreen.style.display = "block";
    document.body.className = '';
});