const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let a;t.addEventListener("click",(()=>{a=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.disabled=!0})),e.addEventListener("click",(()=>{t.disabled=!1,clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.47805379.js.map
