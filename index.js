const clickCount = 42;

const vals = ["4", "four", "Four", "四", "0100"]
let i = Math.floor(Math.random() * clickCount * 100) % vals.length;
let count = 0;

function changeNumber() {
    document.getElementById("party").style.display = "none";
    i = (i + 1) % vals.length;
    document.getElementById("number").innerText = vals[i];

    count++;
    console.log(count);
    if (count == clickCount) {
        document.getElementById("number").innerText = Math.floor(Math.random()* clickCount * 100);
        document.getElementById("party").style.display = "initial";
        count = 0;
    }
}