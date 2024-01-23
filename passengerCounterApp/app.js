
const onSeat = document.getElementById('on-seat');
const anotherBus = document.getElementById('btn-1');
const joinDBus = document.getElementById('btn-2');
const vacantSeat = document.getElementById('vacant-seat');
const slide = document.getElementById('slide');
let person;
let quote;

const quotes = ["Adventure is worthwhile in itself. - Amelia Earhart", "Travel makes one modest. You see what a tiny place you occupy in the world. - Gustave Flaubert", "The journey not the arrival matters. - T.S. Eliot", "Travel far, travel wide, travel boldly. - Unknown", "Life is short, and the world is wide. - Simon Raven", "The world is a book, and those who do not travel read only one page. - Saint Augustine", "Don't listen to what they say. Go see. - Nomolos29", "Travel is the only thing you can buy that makes you richer. - Nomolos29", "Explore the world with an open mind, a sturdy carry-on, and clothes that don’t wrinkle. - Madeleine Albright"];


// alert(quotes[quote]);
function randomOutPut(){
    person = Math.round(Math.random()*40);
    onSeat.innerHTML= person+"persons";
    vacantSeat.innerHTML = (50-person)+"Seats";
}
function slideShow(){
    quote = Math.round(Math.random()*quotes.length);
    slide.innerHTML = quotes[quote];
}


anotherBus.addEventListener("click", randomOutPut);

joinDBus.addEventListener("click", () =>{
    if(person<50){
        person++;
    }
    onSeat.innerHTML= person+"persons";
    vacantSeat.innerHTML = (50-person)+"Seats";
});

randomOutPut();
slideShow();



// alert('working');