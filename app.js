
const toggleBtn = document.querySelector('.toggle-btn')
const navBar = document.querySelector('ul.navlist')
const getStarted = document.querySelector('div.get-started')


toggleBtn.addEventListener('click', (e) => {
  if (navBar.style.left === "-120%") {
    navBar.style.left = "0%"
  } else {
    navBar.style.left = "-120%"
  }


  if (getStarted.style.left === "-100%") {
    getStarted.style.left = "28%"
  } else {
    getStarted.style.left = "-100%"
  }
})





