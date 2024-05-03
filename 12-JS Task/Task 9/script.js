let count = document.querySelector('span');
let txtArea = document.querySelector('textarea')

// adding event listeners
    
txtArea.addEventListener('input',function(){
    console.log(txtArea.value.length);
    count.textContent = txtArea.value.length
})

