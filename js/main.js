var log = console.log.bind(console)
// 获取兄弟元素状态
// let aTags = document.getElementsByClassName('menuSlide')
// console.log(aTags[0])
// for (let i = 0; i < aTags.length; i++) {
//     aTags[i].onmouseenter = function(x) {
//         let a = x.currentTarget
//         let brother = a.nextSibling
//         while (brother.tagName !== 'UL') {
//             brother = brother.nextSibling
//         }
//         brother.classList.add('active')
//     }
//     aTags[i].onmouseleave = function(x) {
//         let a = x.currentTarget
//         let brother = a.nextSibling
//         while (brother.tagName !== 'UL') {
//             brother = brother.nextSibling
//         }
//         brother.classList.remove('active')
//     }
//
// }

// let liTags = document.getElementsByClassName('menuSlide')
//
// for (let i = 0; i < liTags.length; i++) {
//     liTags[i].onmouseenter = function(x) {
//         let li = x.currentTarget
//         // 没有明白这里为什么获取了一个数组
//         let brother = li.getElementsByTagName('ul')[0]
//         brother.classList.add('active')
//     }
//     liTags[i].onmouseleave = function(x) {
//         let li = x.currentTarget
//         let brother = li.getElementsByTagName('ul')[0]
//         brother.classList.remove('active')
//     }
//     }
let ulTags = document.querySelectorAll('nav > ul > li')

for (let i = 0; i < ulTags.length; i++) {
    ulTags[i].onmouseenter = function(x) {
        let ul = x.currentTarget.classList.add('active')
    }
    ulTags[i].onmouseleave = function(x) {
        let ul = x.currentTarget.classList.remove('active')
    }
    }

let liTags = document.querySelectorAll('nav > ul > li > a')

for (let i = 0; i < liTags.length; i++) {
    liTags[i].onclick = function(x) {
        x.preventDefault()
        let href = x.currentTarget.getAttribute('href')
        log(href)
        let element = document.querySelector(href)
        let top = element.offsetTop
        window.scrollTo(0, top - 80)
    }
}
