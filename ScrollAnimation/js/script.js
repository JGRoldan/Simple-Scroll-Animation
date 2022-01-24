let imagen=document.querySelectorAll('.imagen')
let p=document.querySelector('.lastP')

window.addEventListener('scroll',(e)=>{
        e.preventDefault();
        if(scrollY > 280 && scrollY < 1000){
                imagen[0].style.bottom=window.scrollY * .008 + '%';
        }else if(scrollY > 1200 && scrollY < 1900){
                imagen[1].style.bottom=window.scrollY * .004 + '%';
        }else{
                imagen[2].style.bottom=window.scrollY * .0025 + '%';
        }
})



