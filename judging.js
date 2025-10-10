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

    startScreen.classList.add("fade-out");
    setTimeout(() => {
        startScreen.style.display = "none";
        startScreen.classList.remove("fade-out");
        loadingScreen.style.display = "block";
        loadingScreen.classList.add("fade-in");
        setTimeout (() => loadingScreen.classList.remove("fade-in"), 600);
    }, 500);


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
                veredict = "omg you're literally me :0 can we be friends??";
                break;
            case "existential":
                veredict = "are you okay? you stare at the ceiling at 2AM, don't you?";
                break;
            case "basic":
                veredict = "girl, you think you're the main character...";
                break;
            case "jazz":
                veredict = "you listen to analogue, sip espresso and have a goatee.";
                break;
            case "hiphop":
                veredict = "you got that laid back, effortlessly cool vibe."
                break;
            case "kpop":
                veredict = "you definitely have a bias. i can't judge you though.";
                break;
            case "spanishrock":
                veredict = "you're into the 'rock en español' classics and you scream every time one of your songs comes on.";
                break;
            case "spanish-trap":
                veredict = "you're an absolute party beast AND/OR you blast your music everywhere you go.";
                break;
            case "chill-rock":
                veredict = "you vibe to your own sound, and you probably know a little bit of guitar, bass or drums.";
                break;
            case "hype-rock":
                veredict = "you're either a really old millenial or young, fiery and passionate";
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

        // stickers and shiiiii
        const stickerContainer = document.getElementById("stickers");

        stickerContainer.innerHTML = ""

        const stickerSets = {
            me: [
                { src: "me-assets/tokyo%20station.png", top: "25%", left: "5%"},
                { src: "me-assets/exclamation.png", bottom: "15%", right: "10%" },
                { src: "me-assets/newspaper.jpg", top: "10%", right: "10%" },
                { src: "me-assets/comic.png", bottom: "10%", left: "20%" },
                { src: "me-assets/cat.png", bottom: "3%", right: "37%" },
            ],
            basic: [
                { src: "basic-assets/disco%20heart.png", top: "7%", left: "5%"},
                { src: "basic-assets/kiss.png", bottom: "25%", right: "10%" },
                { src: "basic-assets/matcha.png", top: "5%", right: "10%" },
                { src: "basic-assets/pink%20stamp.png", bottom: "25%", left: "15%" },
                { src: "basic-assets/book.png", bottom: "10%", right: "45%" },
            ],
            existential: [
                { src: "existential-assets/cat.png", top: "38%", left: "5%"},
                { src: "existential-assets/cloud.png", top: "2%", left: "8%" },
                { src: "existential-assets/eye.png", top: "7%", right: "10%" },
                { src: "existential-assets/typewriter.png", bottom: "8%", left: "37%" },
                { src: "existential-assets/hands.png", bottom: "23%", right: "14%" },
            ],
            hiphop: [
                { src: "hiphop-assets/graffiti.png", top: "26%", left: "3%"},
                { src: "hiphop-assets/headphones.png", bottom: "25%", right: "12%" },
                { src: "hiphop-assets/parental%20advisory.png", top: "7%", right: "8%" },
                { src: "hiphop-assets/vans.png", bottom: "7%", right: "38%" },
                { src: "hiphop-assets/wasted.png", bottom: "17%", left: "23%" },
            ],
            jazz: [
                { src: "jazz-assets/lick.png", top: "7%", left: "3%"},
                { src: "jazz-assets/coffee.png", bottom: "25%", right: "12%" },
                { src: "jazz-assets/pingu.png", top: "4%", right: "8%" },
                { src: "jazz-assets/sax-cat.png", bottom: "7%", right: "43%" },
                { src: "jazz-assets/vinyl.png", bottom: "23%", left: "14%" },
            ],
            spanishrock: [
                { src: "spanishrock-assets/cerati%20texto.png", top: "5%", left: "3%"},
                { src: "spanishrock-assets/cartman.png", bottom: "25%", right: "12%" },
                { src: "spanishrock-assets/gatito.png", top: "2%", right: "8%" },
                { src: "spanishrock-assets/guitarra.png", bottom: "7%", right: "43%" },
                { src: "spanishrock-assets/pedrito.png", bottom: "18%", left: "14%" },
            ],
            kpop: [
                { src: "kpop-assets/circle%20asset%20thing.png", top: "10%", left: "5%"},
                { src: "kpop-assets/flower%20asset.png", bottom: "25%", right: "10%" },
                { src: "kpop-assets/hollow%20star%20asset.png", top: "2%", right: "20%" },
                { src: "kpop-assets/star%20dash%20asset.png", bottom: "10%", left: "50%" },
                { src: "kpop-assets/star%20sticker%20asset.png", bottom: "30%", left: "15%" },
            ]
        };

        if (stickerSets[theme]) {
            stickerSets[theme].forEach(sticker => {
                const img = document.createElement("img");
                img.src = sticker.src;
                img.classList.add("sticker");
                if (sticker.top) img.style.top = sticker.top;
                if (sticker.bottom) img.style.bottom = sticker.bottom;
                if (sticker.left) img.style.left = sticker.left;
                if (sticker.right) img.style.right = sticker.right;
                stickerContainer.appendChild(img);
            });
        }

    }, 2500);
});


document.getElementById("retry-button").addEventListener("click", () => {
    resultScreen.classList.add("fade-out");

    const stickersContainer = document.getElementById("stickers");
    if (stickersContainer) stickersContainer.classList.add("fade-out");

    setTimeout(() => {
        resultScreen.style.display = "none";
        resultScreen.classList.remove("fade-out");

        if (stickersContainer) {
            stickersContainer.innerHTML = "";
            stickersContainer.classList.remove("fade-out");
        }

        startScreen.style.display = "block";
        startScreen.classList.add("fade-in");
        document.body.className = "";

        setTimeout(() => startScreen.classList.remove("fade-in"), 600);
    }, 500);
});

function getDominantCategory(arr) {
    if (!arr.length) return null;
    const freq = {};
    arr.forEach(cat => freq[cat] = (freq[cat] || 0) + 1);
    return Object.keys(freq).reduce((a, b) => freq[a] > freq[b] ? a : b);
}


