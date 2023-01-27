window.onload=function(){


    //nav_a관련 변수
    let link = document.querySelectorAll('nav a')
    let main = document.querySelectorAll('.main')
    //main변수
    let m_all = document.querySelectorAll('main .main')
    //m4_c1변수
    let c1 = document.querySelectorAll('.c1 > a')
    let c1_full = document.querySelectorAll('.c1 .full')
    let c1_close = document.querySelectorAll('.c1 .full .close')
    //m5_c2변수
    let view_btn = document.querySelectorAll('.c2 > li > .view')
    let c2_full = document.querySelectorAll('.c2 > li > .full')
    let c2_close = document.querySelectorAll('.c2 > li > .full > .close')

    //콘솔점검
    console.log(link, main, view_btn, c2_full, c2_close, m_all)

    //이벤트

    //nav_a 누르면 해당 mainPage로 이동
    link.forEach(function(t,i){
        t.addEventListener('click',function(e){
            e.preventDefault()
            window.scrollTo(0, main[i].offsetTop)
        })
    })

    //main 각 스크롤시 천천히 나타나기
    window.addEventListener('scroll',function(){
        m_all.forEach(function(t){
            if(t.getBoundingClientRect().y <= 400){
                t.classList.add('m_opacity')
            }
        })
    })

    //m4_img클릭 시 관련한 c1_full출력
    c1.forEach(function(t,i){
        console.log(t,i)
        t.addEventListener('click',function(e){
            e.preventDefault()
            c1_full[i].style.display = 'block'
        })
    })
    //m4_창닫기 클릭 시 c1_full 숨기기
    c1_close.forEach(function(t,i){
        console.log(t,i)
        t.addEventListener('click',function(e){
            e.preventDefault()
            this.parentNode.style.display = 'none'
        })
    })


    //m5_view_btn 클릭 시 관련한 c2_full 출력
    view_btn.forEach(function(t,i){
        console.log(t,i)
        t.addEventListener('click',function(e){
            e.preventDefault()
            c2_full[i].style.display = 'block'
        })
    })
    //m5_창닫기 클릭 시 c2_full 숨기기
    c2_close.forEach(function(t,i){
        console.log(t,i)
        t.addEventListener('click',function(e){
            e.preventDefault()
            this.parentNode.style.display = 'none'
        })
    })

}