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
// console.log(menu_title, menu);

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

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

const pd_option_list=document.querySelectorAll(".pd_option_list li");
const txt_pd_option=document.querySelectorAll(".txt_pd_option li");
// console.log(pd_option_list, txt_pd_option);

for(let i=0;i<pd_option_list.length;i++){
    pd_option_list[i].addEventListener("click",e=>{
        for(let j=0;j<pd_option_list.length;j++){
                pd_option_list[j].style.border="1px solid white";
                txt_pd_option[j].style.display="none";
        }
        pd_option_list[i].style.border="1px solid black";
        txt_pd_option[i].style.display="block";
    });
}

const pd_img_list=document.querySelectorAll(".pd_img_list li");
const pd_main_img=document.querySelectorAll(".pd_main_img li");
// console.log(pd_img_list, pd_main_img);

for(let i=0;i<pd_img_list.length;i++){
    pd_img_list[i].addEventListener("click",e=>{
        for(let j=0;j<pd_img_list.length;j++){
            pd_img_list[j].style.border="1px solid white";
            pd_main_img[j].style.display="none";
        }
        pd_img_list[i].style.border="1px solid black";
        pd_main_img[i].style.display="block";
    });
}

const btn_buy_shop=document.querySelector(".btn_buy_shop");
const btn_buy_shop_a=document.querySelector(".btn_buy_shop a");
// console.log(btn_buy_shop);
btn_buy_shop.addEventListener("click",e=>{
    btn_buy_shop_a.href="https://www.clubclio.co.kr/";
})



const pd_tap_menu=document.querySelectorAll(".pd_tap_menu li");
const tap_open_wrap=document.querySelectorAll(".tap_open_wrap");
const line=document.querySelectorAll(".underline");
console.log(pd_tap_menu, tap_open_wrap,line);
line[0].style.width="70%";

for(let i=0;i<pd_tap_menu.length;i++){
    pd_tap_menu[i].addEventListener("click",e=>{
        for(let j=0;j<pd_tap_menu.length;j++){
            // document.styleSheets[0].pd_tap_menu[j].addRule('.pd_tap_menu li:after','opacity: 0');
            // pd_tap_menu[j].style.opacity="0";
            tap_open_wrap[j].style.display="none";
            line[j].style.width="0";
        }
        // document.styleSheets[0].pd_tap_menu[i].addRule('.pd_tap_menu li:after','opacity: 1');
        // pd_tap_menu[i].style.opacity="1";
        tap_open_wrap[i].style.display="block";
        line[i].style.width="70%";
    })
}


const pd_notice_title=document.querySelectorAll(".pd_notice_title");
const table_wrap=document.querySelectorAll(".table_wrap");
const pd_notice_title_img=document.querySelectorAll(".pd_notice_title img")
// console.log(pd_notice_title,table_wrap,pd_notice_title_img);

pd_notice_title.forEach(function(el){
    el.addEventListener("click",activetable)
});

function activetable(el){
    const targettext=el.currentTarget.nextElementSibling.classList;
    const target=el.currentTarget;
    const targetimg=el.currentTarget.children[1];
    // console.log(targettext, target, targetimg);

    if(targettext.contains("active")){
        targettext.remove("active");
        targetimg.classList.remove("anime");
    }
    else{
        pd_notice_title.forEach(function(el){
            pd_notice_title_img.forEach(function(el){
                el.classList.remove("anime");
            })
        });
        targettext.add("active");
        targetimg.classList.add("anime");
    }
}

$(".accordion_option").on("change",function(){
    let num=parseInt($(".accordion_option option:selected").val());
    // console.log(num);

    $(".accordion_info_color li").removeClass('active');
    $(".accordion_info_color li:eq("+(num-1)+")").addClass('active');
})

var swiper = new Swiper(".reco_swiper", {
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