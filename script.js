const numbers = document.querySelector('#btn-container')
const rating = document.querySelector('#rating');
const ratingCont = document.getElementById('container1');
const thanksCont = document.getElementById('container2')
const submit = document.querySelector('#submit')
let clicked = false;

numbers.addEventListener("click", e => {
    if(e.target.matches('button')){
        let selectedRating = e.target.innerHTML;
        rating.textContent = selectedRating;
        clicked = true;
    }
})

submit.addEventListener("click", () =>{
    if(clicked){
        ratingCont.style.display = "none";
        thanksCont.style.display = "block";
    }
})