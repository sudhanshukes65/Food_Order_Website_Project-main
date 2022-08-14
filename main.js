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
    if(video.paused){
        video.play()
        e.target.textContent = 'Arrow.png'
    } else{
        video.pause()
        e.target.textContent = 'Arrow.png'
    }
})
