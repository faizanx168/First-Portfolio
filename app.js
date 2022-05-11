const ed  =document.querySelector('.slide');
const container = document.querySelectorAll('.slide section');
const prev  = document.querySelector('#prev');
const next = document.querySelector('#next');

let counter = 1;
const size = container[0].clientWidth;
ed.style.transform = 'translatex('+(-size * counter)+'px)';
next.addEventListener('click',()=> {
    ed.style.transition = "transform 0.4s ease-in-out";
    counter++;
    ed.style.transform = 'translatex(' +(-size *counter) +'px)';
  
});

prev.addEventListener('click',()=> {
    ed.style.transition = "transform 0.4s ease-in-out";
    counter--;
    ed.style.transform = 'translatex(' +(-size *counter) +'px)';
  
});

ed.addEventListener('transitionend', ()=> {
    console.log('fired');
    if(container[counter].id == 'last'){
        ed.style.transition = "none";
        counter = container.length - 4;
    ed.style.transform = 'translatex(' +(-size *counter) +'px)';

    }
    if(container[counter].id == 'first'){
        ed.style.transition = "none";
        counter = container.length - counter;
    ed.style.transform = 'translatex(' +(-size *counter) +'px)';

    }
})
