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


const productContainers = document.querySelectorAll('.product-container');
const nxtBtn = document.querySelectorAll('.nxt-btn');
const preBtn = document.querySelectorAll('.pre-btn');
const videoPlayer = document.querySelector('.video-player');
const video = videoPlayer.querySelector('.video');
const playBtn = videoPlayer.querySelector('.play-button');

const openModalBtn = document.querySelectorAll('[data-modal-target]');
const closeModalBtns = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

// Popular items section
productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
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
    })
})
closeModalBtns.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.cart-modal-container')
        closeModal(modal)

    })

})


function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
    // (window).scroll(function() { return false; });
    // querySelectorAll(".body")(window).scroll(function(){return false;})
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

    function noscroll() {
        window.scrollTo(0, scrollTop);
    }
    window.addEventListener("scroll", noscroll)


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