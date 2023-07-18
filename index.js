const swiper =new Swiper(".gallerySwiper",{
    slidesPerView:1,
    spaceBetween:20,
    pagination:{
        e1:".swiper-pagination",
        clickabe:true,
    },
    breakpoints:{
        800: {
            slidesPerView:3,
            spaceBetween:30,
        },
        600: {
            slidesPerView:2,
            spaceBetween:20,
        },
    },
});

//Navbar
const menu=document.querySelector('.menu');
const menuBtn=document.querySelector('.menu-btn');

menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('menu-open');
});

const pagination=document.querySelectorAll('.pagination li a');
const sections=document.querySelectorAll('.main-section');
const offset=100;

//Loop through sections
for(let i=0;i<sections.length;i++){
    //Set scroll event on window
    window.addEventListener('scroll',()=>{
        //Activate pagination whwn the corresponding section is scrolled over
        if(window.scrollY > sections[i].offsetTop-offset && window.scrollY < sections[i].offsetTop + sections[i].offsetHeight-offset){
            //Remove active class from all pagination
            pagination.forEach(pag=>{
                pag.classList.remove('active');
            });
            pagination[i].classList.add('active');
        }
    });
}
