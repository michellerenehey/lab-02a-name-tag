const buttonEl = document.getElementById ('go-button'); 
    console.log(buttonEl);
const inputEl = document.getElementById('name-input');
    console.log(inputEl);
    console.log(inputEl.value);
const headerEl = document.getElementById('white-space');
    console.log(headerEl);
const nametagEl = document.getElementById('nametag');
    console.log(headerEl);

buttonEl.addEventListener('click', () => {
    headerEl.textContent = inputEl.value;
    nametagEl.style.backgroundColor = "green";
    nametagEl.style.backgroundColor = "blue";
    nametagEl.style.backgroundColor = "yellow";
    });
