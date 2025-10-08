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
        let categories = [];

        artists.forEach(artist => {
            if (tasteDB[artist]) {
                const entry = tasteDB[artist];
                totalScore += entry.score;
                known++;
                comments.push(`${artist.toUpperCase()}: ${entry.comment}`);
                categories.push(entry.category);
            } else {
                comments.push(`${artist.toUpperCase()}: ive never ever heard of them... could be a red flag`);
            }
        });

        const avg = known > 0 ? totalScore / known : 5;

        const theme = getDominantCategory(categories);

        let veredict;
        switch(theme) {
            case "me":
                veredict = "omg youre literally me :0 can we be friends??";
                break;
            case "existential":
                veredict = "are you okay? you stare at the ceiling at 2AM, don't you?";
                break;
            case "basic":
                veredict = "girl, you think you're the main character...";
                break;
            case "jazz":
                veredict = "you like in black and white, sip espresso and have a goatee.";
                break;
            case "hiphop":
                veredict = "you got that laid back, effortlessly cool vibe."
                break;
            case "kpop":
                veredict = "you definitely have a bias. i can't judge you though.";
                break;
            default:
                veredict = "i literally cannot categorize you, idk what your vibe is..."
        }

        loadingScreen.style.display = "none";
        resultScreen.style.display = "block";
        veredictEl.textContent = veredict;
        commentEl.innerHTML = comments.join("<br>");
        scoreEl.textContent = `score: ${avg.toFixed(1)}/10`;

        document.body.className = theme || "";
    }, 2500);
});

document.getElementById("retry-button").addEventListener("click", () => {
    resultScreen.style.display = "none";
    startScreen.style.display = "block";
    document.body.className = "";
});

function getDominantCategory(arr) {
    if (!arr.length) return null;
    const freq = {};
    arr.forEach(cat => freq[cat] = (freq[cat] || 0) + 1);
    return Object.keys(freq).reduce((a, b) => freq[a] > freq[b] ? a : b);
}