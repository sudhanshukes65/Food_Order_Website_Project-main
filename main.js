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
