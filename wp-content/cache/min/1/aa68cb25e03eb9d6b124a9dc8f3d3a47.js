var c=document.body.className;c=c.replace(/everest-forms-no-js/,'everest-forms-js');document.body.className=c;var ZakraNavHelper={getChildNodes:function(e){var t,n=[];for(t in e.childNodes)e.childNodes.hasOwnProperty(t)&&1===e.childNodes[t].nodeType&&n.push(e.childNodes[t]);return n},offset:function(e){var t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,a=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+a,left:t.left+n}},dimension:function(e){return parseInt(document.defaultView.getComputedStyle(e,"").getPropertyValue("width"))+parseInt(document.defaultView.getComputedStyle(e,"").getPropertyValue("margin-left"))+parseInt(document.defaultView.getComputedStyle(e,"").getPropertyValue("padding-left"))+parseInt(document.defaultView.getComputedStyle(e,"").getPropertyValue("padding-right"))+parseInt(document.defaultView.getComputedStyle(e,"").getPropertyValue("margin-right"))},getOverflowItems:function(e){navigation.style.flex="0 0 "+navUlTempWidth+"px";for(var t=[],n=0;n<e.length;n++){var a,i,r;i=e[n],r=this.offset(i).top,0===n&&(a=r),r>a&&(i.classList.contains("tg-menu-item-search")||i.classList.contains("tg-menu-item-cart")||i.classList.contains("tg-header-button-wrap")||i.classList.contains("tg-menu-extras-wrap")||t.push(i))}return t}};window.zakraNavHelper=ZakraNavHelper,function(){var e,t,n,a,i;if(e=document.getElementById("site-navigation")){for((t=e.getElementsByTagName("ul")[0]).setAttribute("aria-expanded","false"),-1===t.className.indexOf("nav-menu")&&(t.className+=" nav-menu"),a=0,i=(n=t.getElementsByTagName("a")).length;a<i;a++)n[a].addEventListener("focus",r,!0),n[a].addEventListener("blur",r,!0);!function(e){var t,n,a=e.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");if("ontouchstart"in window)for(t=function(e){var t,n=this.parentNode;if(n.classList.contains("focus"))n.classList.remove("focus");else{for(e.preventDefault(),t=0;t<n.parentNode.children.length;++t)n!==n.parentNode.children[t]&&n.parentNode.children[t].classList.remove("focus");n.classList.add("focus")}},n=0;n<a.length;++n)a[n].addEventListener("touchstart",t,!1)}(e)}function r(){for(var e=this;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}}(),function(){var e,t=document.querySelectorAll(".tg-primary-menu li.menu-item-has-children, .tg-primary-menu li.page_item_has_children"),n=t.length;for(e=0;e<n;e++)t[e].addEventListener("mouseenter",(function(e){var t,n,a=e.currentTarget;a&&(t=a.querySelectorAll(".sub-menu, .children")[0])&&(0<=(n=t.getBoundingClientRect()).left&&n.right<=(window.innerWidth||document.documentElement.clientWidth)||t.classList.add("tg-edge"))}),!1),t[e].addEventListener("mouseleave",(function(e){var t,n=e.currentTarget;n&&((t=n.querySelectorAll(".sub-menu, .children")[0]).classList.remove("tg-edge"),t.classList.contains("tg-edge")&&t.classList.remove("tg-edge"))}),!1)}(),function(){var e,t,n,a,i,r,s,l,o,d,c,u,m,g;navigation=document.getElementById("site-navigation"),null!==navigation&&navigation.classList.contains("tg-extra-menus")&&(e=navigation.getElementsByClassName("tg-menu-extras-wrap")[0],null!==(m=document.getElementById("tg-menu-extras"))&&(d=navigation.getElementsByClassName("nav-menu")[0],c=ZakraNavHelper.getChildNodes(d),g=navigation.offsetWidth,t=navigation.getElementsByClassName("tg-menu-item-search")[0],n=navigation.getElementsByClassName("tg-menu-item-cart")[0],a=navigation.getElementsByClassName("tg-header-button-wrap")[0],i=navigation.getElementsByClassName("tg-header-button-wrap")[1],r=t?ZakraNavHelper.dimension(t):0,s=n?ZakraNavHelper.dimension(n):0,l=a?ZakraNavHelper.dimension(a):0,l+=i?ZakraNavHelper.dimension(i):0,o=e?ZakraNavHelper.dimension(e):0,navUlTempWidth=g-(r+s+l+o),u=0,c.forEach((function(e,t){u+=ZakraNavHelper.dimension(e)})),u>g?ZakraNavHelper.getOverflowItems(c).forEach((function(e){m.appendChild(e)})):e.parentNode.removeChild(e),console.log("flex here"),navigation.style.flex=""))}(),function(){for(var e=document.querySelectorAll("#mobile-navigation li a"),t=document.querySelector(".tg-mobile-toggle"),n=e.length,a=0;a<n;a++)e[a].addEventListener("click",(function(){t.click()}))}();/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",(function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}),!1);var ZakraFrontend={toggleMenu:function(e,t,n,o,s){e.addEventListener("click",(function(){this.classList.toggle("tg-mobile-toggle--opened"),t.classList.toggle("tg-mobile-navigation--opened"),n&&n.classList.toggle("overlay-show"),t.getElementsByClassName("tg-mobile-navigation-close").length||t.insertBefore(o,t.childNodes[0])})),n&&n.addEventListener("click",(function(){this.classList.toggle("overlay-show"),s.classList.toggle("tg-mobile-toggle--opened"),t.classList.toggle("tg-mobile-navigation--opened")}))}};window.zakraFrontend=ZakraFrontend,document.addEventListener("DOMContentLoaded",(function(){try{!function(){var e,t,n,o,s,l,a,c,i,r,u,d,g=document.getElementById("mobile-navigation"),m=document.querySelector(".tg-mobile-toggle"),h=document.querySelector(".tg-overlay-wrapper"),p=document.getElementById("wpadminbar");if((l=document.createElement("button")).classList.add("tg-mobile-navigation-close"),l.setAttribute("aria-label","Close Button"),g&&(t=g.querySelectorAll("li.page_item_has_children, li.menu-item-has-children"),document.body.contains(p)&&(e=p.getBoundingClientRect().height,a=getComputedStyle(g),c=parseInt(a.paddingTop)+e,l.style.top=e+"px",g.style.paddingTop=c+"px")),m&&g&&(l.addEventListener("click",(function(){m.click()})),zakraFrontend.toggleMenu(m,g,h,l,m),m.addEventListener("click",(function(){'a, button, input[type="search"]',r=g.querySelectorAll('a, button, input[type="search"]'),r=Array.prototype.slice.call(r),u=r[0],d=r[r.length-1],setTimeout((function(){u.focus()}),100),g.addEventListener("keydown",(function(e){"Tab"===e.key&&(e.shiftKey?document.activeElement===u&&(e.preventDefault(),d.focus()):document.activeElement===d&&(e.preventDefault(),u.focus()))}))}))),t){var y=t.length;for(i=0;i<y;i++)if((o=document.createElement("button")).classList.add("tg-submenu-toggle"),(n=t[i]).insertBefore(o,n.childNodes[1]),null!==(s=n.querySelector(".tg-submenu-toggle"))&&s.addEventListener("click",(function(e){e.preventDefault(),this.parentNode.classList.toggle("submenu--show")})),null!==n.querySelector("a")){var f=n.querySelector("a").getAttribute("href"),v=n.querySelector("a");f&&"#"!==f||v.addEventListener("click",(function(e){g.classList.toggle("tg-mobile-navigation--opened"),this.parentNode.classList.toggle("submenu--show")}))}}}()}catch(e){console.log(e.message)}var e;(e=document.getElementById("tg-scroll-to-top"))&&(window.addEventListener("scroll",(function(){500<window.scrollY?e.classList.add("tg-scroll-to-top--show"):500>window.scrollY&&e.classList.remove("tg-scroll-to-top--show")})),e.addEventListener("click",(function(e){e.preventDefault(),0!==window.scrollY&&window.scrollTo({top:0,behavior:"smooth"})}))),function(){var e,t,n;function o(n){"hide"!==n?(t.classList.toggle("show-search"),t.classList.contains("show-search")&&(t.getElementsByTagName("input")[0].focus(),document.querySelector(".tg-menu-item-search").addEventListener("keydown",(function(n){n.shiftKey||"Tab"!==n.key||document.activeElement!==t.getElementsByTagName("input")[0]||(n.preventDefault(),e.focus()),n.shiftKey&&"Tab"===n.key&&document.activeElement===e&&t.classList.contains("show-search")&&(n.preventDefault(),t.getElementsByTagName("input")[0].focus())})))):t.classList.remove("show-search")}e=document.querySelector(".tg-menu-item-search > a"),t=document.getElementsByClassName("tg-menu-item-search")[0],n=function(e,t){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;0<=--n&&t.item(n)!==this;);return-1<n});e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},null!==e&&(e.addEventListener("click",(function(e){e.preventDefault(),o()})),document.addEventListener("click",(function(e){switch(typeof e.target.closest){case"undefined":if(n(e.target,".tg-menu-item-search")||n(e.target,".tg-icon-search"))return;break;default:if(e.target.closest(".tg-menu-item-search")||e.target.closest(".tg-icon-search"))return}o("hide")})),document.addEventListener("keyup",(function(e){t.classList.contains("show-search")&&"Escape"===e.key&&o("hide")})))}();var t=document.getElementsByTagName("body")[0],n=t.getElementsByClassName("tg-site-header-top")[0];t.classList.contains("has-transparent-header")&&void 0!==n&&n.classList.contains("tg-site-header-top")&&function(e,t){var n=t.offsetHeight,o=document.getElementById("main"),s=document.getElementById("colophon");o.style.position="relative",o.style.top=n+"px",s.style.position="relative",s.style.top=n+"px"}(0,n)}));/*! This file is auto-generated */
!function(c,d){"use strict";var e=!1,n=!1;if(d.querySelector)if(c.addEventListener)e=!0;if(c.wp=c.wp||{},!c.wp.receiveEmbedMessage)if(c.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){for(var r,a,i,s=d.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),n=d.querySelectorAll('blockquote[data-secret="'+t.secret+'"]'),o=0;o<n.length;o++)n[o].style.display="none";for(o=0;o<s.length;o++)if(r=s[o],e.source===r.contentWindow){if(r.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;r.height=i}if("link"===t.message)if(a=d.createElement("a"),i=d.createElement("a"),a.href=r.getAttribute("src"),i.href=t.value,i.host===a.host)if(d.activeElement===r)c.top.location.href=t.value}}},e)c.addEventListener("message",c.wp.receiveEmbedMessage,!1),d.addEventListener("DOMContentLoaded",t,!1),c.addEventListener("load",t,!1);function t(){if(!n){n=!0;for(var e,t,r=-1!==navigator.appVersion.indexOf("MSIE 10"),a=!!navigator.userAgent.match(/Trident.*rv:11\./),i=d.querySelectorAll("iframe.wp-embedded-content"),s=0;s<i.length;s++){if(!(e=i[s]).getAttribute("data-secret"))t=Math.random().toString(36).substr(2,10),e.src+="#?secret="+t,e.setAttribute("data-secret",t);if(r||a)(t=e.cloneNode(!0)).removeAttribute("security"),e.parentNode.replaceChild(t,e)}}}}(window,document)