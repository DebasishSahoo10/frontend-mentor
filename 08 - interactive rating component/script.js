const messageComp = document.querySelector('#message-component')
const ratingBtns = document.querySelectorAll('.rating-btn')
const submitBtn = document.querySelector('#submit-btn')
const ratingComp = document.querySelector('#rating-component')



const hideMessage = () => {
    messageComp.style.display = "none"
}
window.addEventListener("load", hideMessage)


let ratingValue = 0
const getValue = (value) => {
    ratingValue = value
    console.log(ratingValue)
}
ratingBtns.forEach((e)=>{
    e.addEventListener("click", ()=>{
        getValue(e.value)
    })
})

const showMessageComp = () => {
    ratingComp.style.display = "none"
    messageComp.style.display = "block"
}
submitBtn.addEventListener("click", showMessageComp)