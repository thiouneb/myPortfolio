/*===== MENU SHOW Y HIDDEN =====*/
const toggleMenu = document.getElementById('nav-toggle'),
    navMenu = document.getElementById('nav-menu'),
    closeMenu = document.getElementById('nav-close')


// SHOW
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})

/*===== FERME MENU AU CLICK =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//--------------------------------------------------------------------------------------------------------------
// Icone menu
// const togglePopup = document.getElementById('popup-toggle'),
// popupWrapper = document.getElementById('popup-wrapper'),
// popupClose = document.getElementById('popup-close')

// togglePopup.addEventListener('click', ()=>{
//     popupWrapper.classList.toggle('toggleShow')
// })

// // HIDDEN
// popupClose.addEventListener('click', ()=>{
//     popupWrapper.classList.remove('toggleShow')
// })

function displayPopup(id) {
    var projectId = id.charAt(id.length - 1)
    var popup = document.getElementById("popup-wrapper-" + projectId)
    var style = popup.style.display
    console.log(projectId, popup, style)

    if (popup.style.display === "none" || !popup.style.display) {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
}

