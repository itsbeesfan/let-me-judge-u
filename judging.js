const startScreen = document.getElementById('start-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');

const veredictEl = document.getElementById("veredict");
const commentEl = document.getElementById("comment");
const scoreEl = document.getElementById("score");

document.getElementById("judge-button").addEventListener("click", () => {
    const rawInput = document.getElementById("artists").value.trim();

    const artists = rawInput
        .split(",")
        .map(a => a.trim().toLowerCase())
        .filter(a => a !== "");

    startScreen.style.display = "none";
    loadingScreen.style.display = "block";

    setTimeout(() => {
        let totalScore = 0;
        let known = 0;
        let comments = [];

        artists.forEach(artist => {
            if (tasteDB[artist]) {
                const entry = tasteDB[artist];
                totalScore += entry.score;
                known++;
                comments.push(`${artist.toUpperCase()}: ${entry.comment}`);
            } else {
                comments.push(`${artist.toUpperCase()}: ive never ever heard of them... could be a red flag`);
            }
        });

        const avg = known > 0 ? totalScore / known : 5;
        let veredict, theme;

        if (avg >= 9) { veredict = "elite taste, youre literally me"; theme = "me"; }
        else if (avg >= 7) { veredict = "existential"; theme = "existential"; }
        else if (avg <= 5) { veredict = "basic"; theme = "basic"; }

        loadingScreen.style.display = "none";
        resultScreen.style.display = "block";
        veredictEl.textContent = veredict;
        commentEl.innerHTML = comments.join("<br>");
        scoreEl.textContent = `score: ${avg.toFixed(1)}/10`;

        document.body.className = theme;
    }, 2500);
});

document.getElementById("retry-button").addEventListener("click", () => {
    resultScreen.style.display = "none";
    startScreen.style.display = "block";
    document.body.className = '';
});