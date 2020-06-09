let adultsCounter = document.querySelector('.adults');
let minusAdults = document.querySelector('.adults-minus');
let adults = adultsCounter.value;


minusAdults.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (adults > 0 && adults <= 10) {
    plusAdults.disabled = false;
    adults--;
    adultsCounter.value = adults;}
    else {
    minusAdults.disabled = true;
    }
});


let plusAdults = document.querySelector('.adults-plus');


plusAdults.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (adults >= 0 && adults < 10) {
    minusAdults.disabled = false;
    adults++;
    adultsCounter.value = adults;}
    else {
    plusAdults.disabled = true;
    }
});



let kidsCounter = document.querySelector('.kids');
let minusKids = document.querySelector('.kids-minus');
let kids = kidsCounter.value;


minusKids.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (kids > 0 && kids <= 10) {
    plusKids.disabled = false;
    kids--;
    kidsCounter.value = kids;}
    else {
    minusKids.disabled = true;
    }
});


let plusKids = document.querySelector('.kids-plus');


plusKids.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (kids >= 0 && kids < 10) {
    minusKids.disabled = false;
    kids++;
    kidsCounter.value = kids;}
    else {
    plusKids.disabled = true;
    }
});