const button = document.querySelector('button')
const wrapper = document.querySelector('.popup-wrapper')
const close = document.querySelector('.popup-close') 


button.addEventListener('click', ()=>{
    wrapper.style.display = 'block';
})

setTimeout(() => {
    wrapper.style.display = 'block';
    
}, 3000);

close.addEventListener('click', ()=>{
    wrapper.style.display = 'none';
})

wrapper.addEventListener('click', ()=>{
    wrapper.style.display = 'none';
})

