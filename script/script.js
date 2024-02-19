const seatYouGot = document.getElementById('seat-you-hired');
// const priceDisplay = document.getElementById('price-display');
const priceDisplay = document.getElementById('total-price-display');
const availAbleSeat = document.getElementById('Available-seat');
let seatYouHaveHired = 0;
let seatWeHaveAvailable = 40;
let ticketPrice=550;

 

function updateSeatCounts() {
    seatWeHaveAvailable = seatWeHaveAvailable - 1;
    seatYouHaveHired = seatYouHaveHired + 1;
    seatYouGot.innerText = seatYouHaveHired;
    availAbleSeat.innerText = seatWeHaveAvailable;
     
    if (seatYouHaveHired > 4) {
        seatYouGot.innerText=4;
        alert('You have selected more than 4 tickets');
        document.getElementById(elementId).classList.add('hidden');

    }
   
    
 
}


function setSeatBg(elementId) {
    document.getElementById(elementId).classList.add('bg-[#1DD100]');
}

function handleClick(event) {
    updateSeatCounts();
    setSeatBg(event.target.id);

}

document.getElementById('A1').addEventListener('click', handleClick);
document.getElementById('A2').addEventListener('click', handleClick);
document.getElementById('A3').addEventListener('click', handleClick);
document.getElementById('A4').addEventListener('click', handleClick);
document.getElementById('B1').addEventListener('click', handleClick);
document.getElementById('B2').addEventListener('click', handleClick);
document.getElementById('B3').addEventListener('click', handleClick);
document.getElementById('B4').addEventListener('click', handleClick);
document.getElementById('C1').addEventListener('click', handleClick);
document.getElementById('C2').addEventListener('click', handleClick);
document.getElementById('C3').addEventListener('click', handleClick);
document.getElementById('C4').addEventListener('click', handleClick);
document.getElementById('D1').addEventListener('click', handleClick);
document.getElementById('D2').addEventListener('click', handleClick);
document.getElementById('D3').addEventListener('click', handleClick);
document.getElementById('D4').addEventListener('click', handleClick);DDDD

