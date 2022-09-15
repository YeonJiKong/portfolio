AOS.init();

const gnb_hamburger_click=document.querySelector(".gnb_hamburger");
const gnb_main=document.querySelector(".gnb_main");
gnb_hamburger_click.addEventListener("click",e=>{
    gnb_main.style.display="block";
})

const gnb_hamburger_close=document.querySelector(".gnb_close");
gnb_hamburger_close.addEventListener("click",e=>{
    gnb_main.style.display="none";
})

const menu_title=document.querySelectorAll(".gnb_menu_title");
const menu=document.querySelectorAll(".gnb_main_menu_list .gnb_main_list");
console.log(menu_title, menu);

for(let i=0;i<menu_title.length;i++){
    menu_title[i].addEventListener("mouseover",e=>{
        menu[i].style.opacity="1"
        menu[i].addEventListener("mouseover",e=>{
            menu[i].style.opacity="1";
        })
    })
    menu[i].addEventListener("mouseout",e=>{
        menu[i].style.opacity="0";
        menu_title[i].addEventListener("mouseout",e=>{
            menu[i].style.opacity="0";
        })
    })
}

const btn_shop=document.querySelector(".btn_shop a");
btn_shop.addEventListener("click",e=>{
    btn_shop.href="https://www.clubclio.co.kr/";
})

const btn_shop_hm=document.querySelector(".btn_shop_hm a");
btn_shop_hm.addEventListener("click",e=>{
    btn_shop_hm.href="https://www.clubclio.co.kr/";
})
const btn_top=document.querySelector(".btn_top");
btn_top.addEventListener("click",e=>{
    window.scrollTo({top:0, behavior: 'smooth'});
})

// var swiper = new Swiper(".mySwiper", {
//     pagination: {
//       el: ".swiper-pagination",
//     },
// });

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".best_swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});