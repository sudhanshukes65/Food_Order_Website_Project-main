// const navBtnContainer = document.querySelector(".nav-btn-container");
// const searchBtn = document.querySelector(".search-btn");
// const cartBtn = document.querySelector("cart-btn");

// searchBtn.addEventListener("click", () => {
//     searchBox.classList.add("active");
//     navBtnContainer.classList.add("active");
// });

// cartBtn.addEventListener("click", () => {
//     searchBox.classList.remove("active");
//     navBtnContainer.classList.remove("active");
// });


const productContainers = document.querySelector('.product-container');
console.log(productContainers);
const nxtBtn = document.querySelector('.nxt-btn');
console.log(nxtBtn);
const preBtn = document.querySelector('.pre-btn');
const videoPlayer = document.querySelector('.video-player');
const video = document.querySelector('.video');
const playBtn = document.querySelector('.play-button');

const openModalBtn = document.querySelectorAll('[data-modal-target]');
const closeModalBtns = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

// Popular items section
// productContainers.forEach(( ) => {
//     let containerDimensions = item.getBoundingClientRect();
//     console.log(containerDimensions);
//     let containerWidth = containerDimensions.width;
//     console.log(containerWidth);

//     nxtBtn.addEventListener('click', () => {
//         item.scrollLeft += containerWidth;
//     })

//     preBtn.addEventListener('click', () => {
//         item.scrollLeft -= containerWidth;
//     })
// })



let conwi = productContainers.getBoundingClientRect().width;
console.log(conwi);
 
nxtBtn.addEventListener('click',()=>{
    productContainers.scrollLeft += conwi;
})
preBtn.addEventListener('click',()=>{
    productContainers.scrollLeft -= conwi;
})


// Play and pause button
playBtn.addEventListener('click', (e) => {
    if (video.paused) {
        video.play()
        e.target.textContent = 'otherimages/Arrow.png'
    } else {
        video.pause()
        e.target.textContent = 'otherimages/Arrow.png'
    }
})

// Request a dish modal
openModalBtn.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        console.log(button.dataset.modalTarget);
        openModal(modal)

    })
})
// cart modal
// openModalBtn.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal1 = document.querySelector(button.dataset.modalTarget)
//         console.log(button.dataset.modalTarget)
//         openModal(modal1)
//         function noscroll(){
//             window.scrollTo(0,0);
//         }
//         window.addEventListener("scroll", noscroll)
//     })
// })


overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.cart-modal-container.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalBtns.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
        showData();
    })
})
closeModalBtns.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.cart-modal-container')
        closeModal(modal)
        

    })

})
var nameInput;


function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
    // (window).scroll(function() { return false; });
    // querySelectorAll(".body")(window).scroll(function(){return false;})
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

    function noscroll() {
        // var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        window.scrollTo(0, scrollTop);
    }
    window.addEventListener("scroll", noscroll)


    // data collection
    var nameInput = document.querySelector(".name-input").value;
    var range1Input = document.querySelector(".range-1").value;
    var range2Input = document.querySelector(".range-2").value;
    // console.log(nameInput);
    // console.log(range1Input);
    // console.log(range2Input);



    // if(nameInput&range1Input&range2Input){
    //     alert(1);
    //     let dataaa = {
    //         nameInput : nameInput,
    //         range1Input : range1Input,
    //         range2Input : range2Input
    //     }
    // }
    // console.log(dataa);
    // return dataa;



}
// submitButton = document.getElementById('submit-button');
// submitButton.addEventListener('click', (e) => {
//     var htmlp = document.querySelector(".data-here").innerHTML;
//     htmlp = "hello";

// })

function showData (){
    document.querySelector(".data-here").innerHTML = "hello";
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
    // window.addEventListener("scroll", ()=>{
    //     var scrollTopp = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    //     window.scrollTo(0,scrollTopp);
    // })
    delete window.scrollTo;
}