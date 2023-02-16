// BUTTON
const input = document.querySelector('#getData')

input.addEventListener('click', ()=>{
    let text = document.querySelector('#userInput').value
    let price = document.querySelector('.data');
    price.innerHTML = text;
    return price.innerHTML
})