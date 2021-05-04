const clickCount = 420;

const vals = ["4", "four", "Four", "四", "0100"]
let i = 0;
let count = 0;

function changeNumber() {
    document.getElementById("number").innerText = vals[i];

    i = (i + 1) % vals.length;

    count++;
    if (count == clickCount) {
        document.getElementById("number").innerText = Math.random();
        count = 0;
    }
}