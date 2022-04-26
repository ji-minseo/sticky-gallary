const scrollable = document.querySelector('.scrollable');
const stickyProject = document.querySelector('.sticky-content')

let current = 0;
let target = 0;
const ease = 0.1;

function lerp(start, end, t) {
    return start * ( 1 - t) + end * t;
}

function init() {
    document.body.style.height = `${scrollable.getBoundingClientRect().height}px`;
}
function smoothScroll() {
    target = window.scrollY;
    current = lerp(current, target, ease);
    scrollable.style.transform = `translate3d(0, ${-current}px, 0)`;
    sticky();
    window.requestAnimationFrame(smoothScroll);
}

function sticky() {
    let offset = window.innerHeight * 2;/*200vh에 프로젝트 말ㅇ 있어서 - 여기부터 걸리게!*/
    if(current < offset) {
        stickyProject.style.transform = `translate3d(0, 0, 0)`;

    }
    if(current >= offset && current <= offset * 2 ){/*오프셋의 2배(400vh)가 되면 언스틱*/
        stickyProject.style.transform = `translate3d(0, ${current - offset}px, 0)`;
    }
    // if(current > offset * 2 ){/*오프셋의 2배(400vh)가 되면 언스틱*/
    //     stickyProject.style.transform = `translate3d(0, ${offset}px, 0)`;
    // }
}
init()
smoothScroll()