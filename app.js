var rate = document.querySelectorAll('span');
let rate1 = document.getElementById('rate1');
let rate2 = document.getElementById('rate2');
let rate3 = document.getElementById('rate3');
let rate4 = document.getElementById('rate4');
let rate5 = document.getElementById('rate5');
let btn = document.getElementById('btn-submit');

let x = 0;

rate1.addEventListener('click', function(){
    x = 1;
    rate1.style.background = 'hsl(25, 97%, 53%)'
    rate2.style.background = 'gray'
    rate3.style.background = 'gray'
    rate4.style.background = 'gray'
    rate5.style.background = 'gray'
})

rate2.addEventListener('click', function(){
    x = 2;
    rate1.style.background = 'gray'
    rate2.style.background = 'hsl(25, 97%, 53%)'
    rate3.style.background = 'gray'
    rate4.style.background = 'gray'
    rate5.style.background = 'gray'
})

rate3.addEventListener('click', function(){
    x = 3;
    rate1.style.background = 'gray';
    rate2.style.background = 'gray';
    rate3.style.background = 'hsl(25, 97%, 53%)';
    rate4.style.background = 'gray';
    rate5.style.background = 'gray';
})

rate4.addEventListener('click', function(){
    x = 4;
    rate1.style.background = 'gray';
    rate2.style.background = 'gray';
    rate3.style.background = 'gray';
    rate4.style.background = 'hsl(25, 97%, 53%)';
    rate5.style.background = 'gray';
})

rate5.addEventListener('click', function(){
    x = 5;
    rate1.style.background = 'gray';
    rate2.style.background = 'gray';
    rate3.style.background = 'gray';
    rate4.style.background = 'gray';
    rate5.style.background = 'hsl(25, 97%, 53%)';
})



btn.addEventListener('click', function(){
    document.getElementById('txt').innerHTML = ('You selected ' + x + ' out of 5')
    document.getElementById('card').style.display = 'none';
    document.getElementById('card1').style.transition = '300ms';
    document.getElementById('card1').style.display = 'flex';
    rate1.style.background = 'gray';
    rate2.style.background = 'gray';
    rate3.style.background = 'gray';
    rate4.style.background = 'gray';
    rate5.style.background = 'gray';

    setInterval(() => {
        alert('Check us on YT CODEwithCREST')
    }, 30000);

    
})
