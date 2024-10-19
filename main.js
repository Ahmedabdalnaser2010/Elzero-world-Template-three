let otherLinksButton = document.getElementsByClassName("links")
let hiddenMenu = document.getElementsByClassName("hidden-menu")
let topArrow = document.getElementsByClassName("top-arrow")

console.log(topArrow[0])

document.addEventListener("click", function (e) {

    if (e.target.classList.contains("links")) {

        hiddenMenu[0].style.opacity = 1;
        hiddenMenu[0].style.display = 'flex';
        hiddenMenu[0].style.top = 'calc(100% + 2px)';

    } else {
        hiddenMenu[0].style.opacity = 0;

    }


})


// ================================================================================================

// top arrow


window.onload = function () {
    topArrow[0].style.display = "none"
}

window.onscroll = function () {

    if (window.scrollY >= 1000) {

        topArrow[0].style.display = "block"
    } else {
        topArrow[0].style.display = "none"
    }
}

topArrow[0].addEventListener("click", function () {
    window.scrollTo({
        top: 0, left: 0, behaviour: "smooth"
    })
})



// ================================================================================================

// Event Counter





let counter = setInterval(() => {

    let currentDate = new Date().getTime()

    let eventDate = new Date("jan 20 2025 16:40:10").getTime()

    let dateDiff = eventDate - currentDate

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24))

    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60))

    let seconds = Math.floor((dateDiff % (1000 * 60)) / (1000))

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : `${days}`

    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : `${hours}`

    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : `${minutes}`

    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : `${seconds}`

}, 1000)

if (dateDiff == 0) {
    clearInterval(counter)
}
