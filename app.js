const redButtonEl = document.getElementById ('red-button'); 
const greenButtonEl = document.getElementById ('green-button'); 
const blueButtonEl = document.getElementById ('blue-button'); 
const yellowButtonEl = document.getElementById ('yellow-button'); 


const inputEl = document.getElementById('name-input');
const headerEl = document.getElementById('white-space');
const nametagEl = document.getElementById('nametag');

redButtonEl.addEventListener('click', () => {
    headerEl.textContent = inputEl.value;
    nametagEl.style.backgroundColor = "red";
    });

greenButtonEl.addEventListener('click', () => {
    headerEl.textContent = inputEl.value;
    nametagEl.style.backgroundColor = "green";
    });

blueButtonEl.addEventListener('click', () => {
    headerEl.textContent = inputEl.value;
    nametagEl.style.backgroundColor = "blue";
    });

yellowButtonEl.addEventListener('click', () => {
    headerEl.textContent = inputEl.value;
    nametagEl.style.backgroundColor = "yellow";
    });
  

