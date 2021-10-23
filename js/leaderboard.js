let scores = localStorage.getItem("LOCAL_STORAGE_GAME_SCORES");
if (!scores)
    scores = JSON.stringify({});
let scoreJs = JSON.parse(scores);

let table = document.getElementById('board');
let count = 0;
for (let i in scoreJs) {
    //if (9 > count) break;
    document.getElementById('name' + count).innerHTML = i;
    document.getElementById('result' + count).innerHTML = scoreJs[i];
    count++;
}