(window.blocksyJsonP=window.blocksyJsonP||[]).push([[8],{29:function(e,t,n){"use strict";n.r(t),n.d(t,"mountMenuLevel",(function(){return l})),n.d(t,"handleUpdate",(function(){return u}));const i=()=>"rtl"===document.querySelector("html").dir,s=e=>e.classList.contains("animated-submenu")&&(!e.parentNode.classList.contains("menu")||-1===e.className.indexOf("ct-mega-menu")&&e.parentNode.classList.contains("menu"));const a="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),o=(e,t)=>{let{startPosition:n="end"}=t;const s=e.querySelector(".sub-menu"),a=(e=>{const t=function(e,t){for(var n=[];e.parentNode;)e.parentNode&&e.parentNode.matches&&e.parentNode.matches(t)&&n.push(e.parentNode),e=e.parentNode;return n[n.length-1]}(e,"li.menu-item");return t&&t.querySelector(".sub-menu .sub-menu .sub-menu")?t.getBoundingClientRect().left>innerWidth/2?"left":"right":i()?"left":"right"})(s),{left:o,width:r,right:c}=s.getBoundingClientRect();let l=a,d=e.getBoundingClientRect();if("left"===a){("end"===n?d.left:d.right)-r<0&&(l="right")}if("right"===a){("end"===n?d.right:d.left)+r>innerWidth&&(l="left")}e.dataset.submenu=l,e.addEventListener("click",()=>{})},r=e=>{const t=e.target.closest("li");t.classList.add("ct-active");let n=[...t.children].find(e=>e.matches(".ct-toggle-dropdown-desktop-ghost"));n||(n=t.firstElementChild),n&&(n.setAttribute("aria-expanded","true"),"button"===n.tagName.toLowerCase()&&n.setAttribute("aria-label",ct_localizations.collapse_submenu)),d({target:t})},c=e=>{const t=e.target.closest("li");t.classList.remove("ct-active");let n=[...t.children].find(e=>e.matches(".ct-toggle-dropdown-desktop-ghost"));n||(n=t.firstElementChild),n&&(n.setAttribute("aria-expanded","false"),"button"===n.tagName.toLowerCase()&&n.setAttribute("aria-label",ct_localizations.expand_submenu)),setTimeout(()=>{[...t.querySelectorAll("[data-submenu]")].map(e=>{e.removeAttribute("data-submenu")}),[...t.querySelectorAll(".ct-active")].map(e=>{e.classList.remove("ct-active")})},200)},l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};[...e.children].filter(e=>e.matches(".menu-item-has-children, .page_item_has_children")).map(e=>{if(e.classList.contains("ct-mega-menu-custom-width")){const t=e.querySelector(".sub-menu"),n=e.getBoundingClientRect(),i=t.getBoundingClientRect();n.left+n.width/2+i.width/2>innerWidth&&(e.dataset.submenu="left"),n.left+n.width/2-i.width/2<0&&(e.dataset.submenu="right")}s(e)&&o(e,t);let n=[...e.children].find(e=>e.matches(".ct-toggle-dropdown-desktop-ghost")),i=e.matches('[data-interaction*="click"] *');if(i||(e.addEventListener("mouseenter",t=>{a?r({target:e.firstElementChild}):setTimeout(()=>{r({target:e.firstElementChild})}),t.target.closest("li").addEventListener("focusout",e=>{t.target.closest("li").contains(e.target)||c(t)}),t.target.closest("li").addEventListener("mouseleave",()=>{c({target:e.firstElementChild})},{once:!0})}),e.addEventListener("click",t=>{e.classList.contains("ct-active")||t.preventDefault()})),i){let t=e.matches('[data-interaction*="item"] *')?e.firstElementChild:e.firstElementChild.querySelector(".ct-toggle-dropdown-desktop");t.hasEventListener||(t.hasEventListener=!0,t.addEventListener("click",t=>{t.preventDefault(),t.target.closest("li").classList.contains("ct-active")?c(t):(r(t),a&&t.target.closest("li").addEventListener("mouseleave",()=>{c({target:e.firstElementChild})},{once:!0}),setTimeout(()=>{document.addEventListener("click",e=>{t.target.closest("li").contains(e.target)||c(t)},{once:!0})}),t.target.closest("li").addEventListener("focusout",e=>{t.target.closest("li").contains(e.target)||c(t)}))}))}n&&!n.hasEventListener&&(n.hasEventListener=!0,n.addEventListener("click",e=>{e.target.closest("li").classList.contains("ct-active")?c(e):(r(e),e.target.closest("li").addEventListener("focusout",t=>{e.target.closest("li").contains(t.target)||c(e)}))}))})},d=e=>{let{target:t}=e;if(t.matches(".menu-item-has-children, .page_item_has_children")||(t=t.closest(".menu-item-has-children, .page_item_has_children")),t.parentNode.classList.contains("menu")&&t.className.indexOf("ct-mega-menu")>-1&&-1===t.className.indexOf("ct-mega-menu-custom-width")&&window.wp&&wp&&wp.customize&&wp.customize("active_theme")){t.querySelector(".sub-menu").style.left=Math.round(t.closest('[class*="ct-container"]').firstElementChild.getBoundingClientRect().x)-Math.round(t.closest("nav").getBoundingClientRect().x)+"px"}if(!s(t))return;const n=t.querySelector(".sub-menu");l(n),n.closest('[data-interaction="hover"]')&&(n._timeout_id&&clearTimeout(n._timeout_id),n.parentNode.addEventListener("mouseleave",()=>{n._timeout_id=setTimeout(()=>{n._timeout_id=null,[...n.children].filter(e=>s(e)).map(e=>e.removeAttribute("data-submenu"))},200)},{once:!0}))},u=e=>{e.parentNode||(e=document.querySelector(`[class="${e.className}"]`)),e&&(e.querySelector(".menu-item-has-children")||e.querySelector(".page_item_has_children"))&&e.closest('[data-interaction="hover"]')&&(e.removeEventListener("mouseenter",d),e.addEventListener("mouseenter",d))}}}]);