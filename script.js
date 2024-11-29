let val = document.getElementById('value');
let increaseBtn = document.getElementById('increaseBtn');
let decreaseBtn = document.getElementById('decreaseBtn');
let resetBtn = document.getElementById('resetBtn');

// global value
let count = 0;

// add eventListner to button :
increaseBtn.addEventListener('click',()=>{
    count+=1;
    // updating the counter value :
    // val.textContent = count;
    updateCounter()
});

decreaseBtn.addEventListener('click',()=>{
    count-=1;
    // updating the counter value :
    // val.textContent = count;
    updateCounter()
});

resetBtn.addEventListener('click',()=>{
    count = 0;
    // updating the counter value :
    // val.textContent = count;
    updateCounter()
});

// update counter using function :

function updateCounter() {
    val.textContent = count;
}