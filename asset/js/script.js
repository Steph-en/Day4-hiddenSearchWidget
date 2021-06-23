const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener
    //the mouseenter works like a hover for the function
    (
        'mouseenter', () => {
            search.classList.toggle('active')
            input.focus()
        }
    )