const seatYouGot = document.getElementById('seat-you-hired');
// const priceDisplay = document.getElementById('price-display');
const priceDisplay = document.getElementById('total-price-display');
const availAbleSeat = document.getElementById('Available-seat');
let seatYouHaveHired = 0;
let seatWeHaveAvailable = 40;
let ticketPrice = 550;

document.getElementById('discount-apply').addEventListener('click', function () {
    const specialCoupon = 'NEW15';
    const specialCouponNumTwo = 'COUPLE20';
    const couponValue = document.getElementById('discount-input').value;
    const validCpn = couponValue.toUpperCase();
    const validCouponValue=validCpn.split(' ').join('');
     
    if (validCouponValue === specialCoupon) {
        const grandTotal = totalTicketSell - (totalTicketSell * 0.15);
        const grandTotalRounded = Math.ceil(grandTotal);
        document.getElementById('grand-total').innerText = grandTotalRounded;

    } else if (validCouponValue === specialCouponNumTwo) {
        const grandTotalTwo = totalTicketSell - (totalTicketSell * 0.2);
        const grandTotalRounded = Math.ceil(grandTotalTwo);
        document.getElementById('grand-total').innerText = grandTotalRounded;
     } 
     else {
        document.getElementById('grand-total').innerText=totalTicketSell-0;
        alert('Invalid coupon code');
        
    }
    document.getElementById('cupon-container').classList.add('hidden')
});




function updateSeatCounts() {
    seatWeHaveAvailable = seatWeHaveAvailable - 1;
    seatYouHaveHired = seatYouHaveHired + 1;
    seatYouGot.innerText = seatYouHaveHired;
    availAbleSeat.innerText = seatWeHaveAvailable;

    if (seatYouHaveHired > 4) {
        seatYouGot.innerText = 4;
        availAbleSeat.innerText = 36;
        alert('You have selected more than 4 tickets');
        document.getElementById(elementId).classList.add('hidden');
    }
}

function setAppentFunction(event) {
    const gotSit = event.target.innerText;

    const nodeCont = document.createElement('div');
    const node = document.createElement("li");
    const node2 = document.createElement("li");
    const node3 = document.createElement("li");
    //   nodeCont.appendChild(node)
    const textnode = document.createTextNode(gotSit)
    const textnode2 = document.createTextNode('economy')
    const textnode3 = document.createTextNode(550)
    node.appendChild(textnode)
    node2.appendChild(textnode2)
    node3.appendChild(textnode3)
    nodeCont.appendChild(node)
    nodeCont.appendChild(node2)
    nodeCont.appendChild(node3)
    document.getElementById("totalDisplay").appendChild(nodeCont);
}


function setTotalPrice() {
    let sitSell = seatYouGot.innerText
    totalTicketSell = sitSell * ticketPrice
    priceDisplay.innerText = totalTicketSell;
    document.getElementById('grand-total').innerText=totalTicketSell;
}


function setSeatBg(elementId) {
    document.getElementById(elementId).classList.add('bg-[#1DD100]');
}




let busSeat = document.querySelectorAll('.bus-seat')

busSeat.forEach(el => el.addEventListener('click', function (event) {
    updateSeatCounts();
    setSeatBg(event.target.id);
    setTotalPrice();
    setAppentFunction(event);
}));



