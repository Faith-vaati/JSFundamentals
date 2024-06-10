// document.getElementById('count-el').innerText = 5;
let count = 0;
// console.log(count);
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

function increment() {
    countEl.innerText = count;
    count = count + 1;
console.log(count);
}

function save() {
    let countStr = count + ' - ';
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
    console.log(count);
}