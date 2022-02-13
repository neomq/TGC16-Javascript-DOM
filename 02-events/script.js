let box = document.querySelector('#box');
let count = 0;
box.addEventListener('mouseenter',function(){
    box.style.backgroundColor = 'blue';
    count += 1;
    document.querySelector('#output').innerHTML=count;
});
box.addEventListener('mouseleave', function(){
    box.style.backgroundColor = 'white';
})