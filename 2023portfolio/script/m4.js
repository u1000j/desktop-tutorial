class CardFlipOnScroll {
    constructor(wrapper, sticky) {
    this.wrapper = wrapper
    this.sticky = sticky
    this.cards = sticky.querySelectorAll('.card')
    this.length = this.cards.length

    this.start = 0
    this.end = 0
    this.step = 0
    }

    init() {
    this.start = this.wrapper.offsetTop - 100
    this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight * 1.2
    this.step = (this.end - this.start) / (this.length * 2)
    }

    animate() {
    this.cards.forEach((card, i) => {
    const s = this.start + this.step * i
    const e = s + this.step * (this.length + 1)

    if (scrollY <= s) {
    card.style.transform = `
        perspective(100vw)
        translateX(100vw) 
        rotateY(180deg)`
    } else if (scrollY > s && scrollY <= e - this.step) {
    card.style.transform = `
        perspective(100vw)
        translateX(${100 + (scrollY - s) / (e - s) * -100}vw)
        rotateY(180deg)
        `
    } else if (scrollY > e - this.step && scrollY <= e) {
    card.style.transform = `
        perspective(100vw)
        translateX(${100 + (scrollY - s) / (e - s) * -100}vw)
        rotateY(${180 + -(scrollY - (e - this.step)) / this.step * 180}deg)`
    } else if (scrollY > e) {
    card.style.transform = `
        perspective(100vw)
        translateX(0vw) 
        rotateY(0deg)`
        }
    })
}
}

const full = document.querySelectorAll('.full_frame .full')
const card = document.querySelectorAll('.card-frame .card a')
const mainContent1 = document.querySelector('.main-content-1')
const sticky = document.querySelector('.sticky')
const cardFlipOnScroll = new CardFlipOnScroll(mainContent1, sticky)
console.log(full, card)
cardFlipOnScroll.init()

window.addEventListener('scroll', () => {
cardFlipOnScroll.animate()
})

window.addEventListener('resize', () => {
cardFlipOnScroll.init()
})

let product = document.querySelectorAll('.front .view')//클릭시 풀페이지 보기
let product_full= document.querySelectorAll('.full_frame .full')//클릭시 보여지는 페이지
let product_full_x = document.querySelectorAll('.full_frame .full .close')// 창닫기
console.log(product, product_full,product_full_x) 

//초기 sns_fill모두 숨기기
for(let s of product_full){
    s.style.display="none"
    s.style.opacity="0"
}
//sns_a 개별 클릭시 관련한 product_full 출력되기
product.forEach(function(t, i){
    t.addEventListener('click',function(e){
    e.preventDefault()
    product_full[i].style.display='block'
    product_full[i].style.opacity='1'
    })
})
//창닫기 클릭시 product_full 숨기기 
product_full_x.forEach(function(t,i){
    t.addEventListener('click',function(e){
        e.preventDefault()
        product_full[i].style.display='none'
        product_full[i].style.opacity='0'
    })
})

/* top */
const pro_top = document.querySelectorAll('.card_top .card a')
const full_top = document.querySelectorAll('.full_top .full')
const close_top = document.querySelectorAll('.full_top .close')

pro_top.forEach(function(t, i){
    t.addEventListener('click',function(e){
        e.preventDefault()
        full_top[i].style.display='block'
        full_top[i].style.opacity='1'
    })
})
close_top.forEach(function(t,i){
    t.addEventListener('click',function(){
        t.parentNode.style.display = 'none'
    })
})

/* btm */
const pro_btm = document.querySelectorAll('.card_btm .card a')
const full_btm = document.querySelectorAll('.full_btm .full')
const close_btm = document.querySelectorAll('.full_btm .close')

pro_btm.forEach(function(t, i){
    t.addEventListener('click',function(e){
        e.preventDefault()
        full_btm[i].style.display='block'
        full_btm[i].style.opacity='1'
    })
})
close_btm.forEach(function(t,i){
    t.addEventListener('click',function(){
        t.parentNode.style.display = 'none'
    })
})