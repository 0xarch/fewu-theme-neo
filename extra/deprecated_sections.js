// in files/Components/Neo/Basic/script.js
// 用于计算是否需要启用汉堡菜单。被 @media(max-width:768px) 替代。
// const NAV_BAR_CON = NAV_ROOT.querySelector('.kCon');
// const NAVIGATION_LOGO_WIDTH = NAV_ROOT.querySelector('.kLogo').clientWidth;
// const NAVIGATION_WIDTH = NAV_BAR_CON.clientWidth;
// let expandedHeight = Array.from(NAV_BAR_CON.childNodes).filter(v => v.nodeName == "A" || v.nodeName == "DIV").length * 48 + 'px';
// NAV_BAR_CON.style.setProperty('--expanded-height', expandedHeight);
// const NavBarIntelliJudge = () => {
//     if (document.documentElement.clientWidth < NAVIGATION_WIDTH + NAVIGATION_LOGO_WIDTH + window.SINGLE_REM*4) {
//         NAV_ROOT.classList.add('short');
//         NAV_ROOT.classList.remove('collapsed', 'enough');
//     } else {
//         NAV_ROOT.classList.remove('short');
//         NAV_ROOT.classList.add('collapsed', 'enough');
//     }
// }

// in files/Components/Neo/Basic/script.js
// 原用于适配不同系统样式，现已弃用。
// (function () {
//     let _M_ = false;['Android', 'iPhone', 'Mobi', 'webOS', 'iPod', 'BlackBerry'].forEach(v => navigator.userAgent.includes(v) && (_M_ = true));

//     const Q = (v, s) => v.querySelector(s),
//         D = document;
//     const debug = () => D.body.setAttribute('debug', 0);
//     const mobile = () => {
//         _M_ = !_M_; D.documentElement.setAttribute('isMobile', _M_);
//     }
//     D.documentElement.setAttribute('isMobile', _M_);
//     const { documentElement: root } = document;
//     if (navigator.userAgent.includes('Android')) root.classList.add('Android');
// })();