const add = document.querySelector('.add')
const btns = document.querySelector('.TowBtns')
const counter = document.querySelector('.counter')
const buy = document.querySelector('.buy')


btns.classList.add('none')
buy.classList.add('none')
counter.classList.add('none')


add.onclick = () => {
    btns.classList.remove('none')
    counter.classList.remove('none')
    buy.classList.remove('none')
    add.classList.add('none')
}

