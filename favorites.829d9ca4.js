!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a),a("i8Q71"),a("4Qm2O");var o,i=a("boQj9"),n=(i=a("boQj9"),a("QPNXd")),c=a("b7ONl"),s="favorite",l=document.querySelector(".favorite-recipes-list"),d=document.querySelector(".hero-section-favorites"),u=document.querySelector(".favorite-filter"),f=document.querySelector(".tui-pagination"),v=document.querySelector(".empty-storage-wrapper"),m=null!==(o=JSON.parse(localStorage.getItem(s)))&&void 0!==o?o:[];0!==m.length?((0,i.createCardTemplate)(m,l),document.querySelectorAll(".js-add-to-fav").forEach((function(e){return e.checked=!0}))):(d.classList.add("hero-is-hidden"),u.classList.add("hiddenvisualy"),f.classList.add("hiddenvisualy"),v.classList.remove("hiddenvisualy"));l.addEventListener("click",(function(e){if(e.target.classList.contains("card-template-btn")){var t=e.target.closest(".card-template").dataset.id;(0,n.popUpFunction)(t)}e.target.classList.contains("js-add-to-fav")&&((0,c.removeFromFavorites)(s,e.target,m),e.target.closest(".card-template").remove())}));var y,g,p=document.querySelector(".favorite-filter"),L=document.querySelector(".favorite-filter-list"),b=document.querySelector(".favorite-recipes-list"),S=document.querySelector(".empty-storage-wrapper"),h=null!==(y=JSON.parse(localStorage.getItem(s)))&&void 0!==y?y:[],q=0,O=0,N=h.flatMap((function(e){return e.category})).filter((function(e,t,r){return r.indexOf(e)===t}));N.sort((function(e,t){return e.localeCompare(t)})),g=N.map((function(e){return'<li class="favorite-filter-item" data-category="'.concat(e,'">\n             <button type="button" class="favorite-filter-btn">\n            ').concat(e,"\n             </button>\n          </li>")})).join(""),L.innerHTML='<li class="favorite-filter-item" data-category="all">\n                          <button type="button" class="favorite-filter-btn favorite-active-btn all-category">\n                            All categories\n                          </button>\n                        </li >',L.insertAdjacentHTML("beforeend",g);var E=document.querySelector(".all-category");L.addEventListener("click",(function(e){if(e.target.classList.contains("favorite-filter-btn")){if(E.classList.remove("favorite-active-btn"),0!=O&&(E.classList.remove("in-focus"),O=0),0!=q)document.querySelector(".in-focus").classList.remove("in-focus"),q=0;var t=function(e){var t=JSON.parse(localStorage.getItem(s)),r=e.closest(".favorite-filter-item").dataset.category;if("all"===r)return E.classList.add("in-focus"),O+=1,t;return t.filter((function(e){return e.category===r}))}(e.target);(0,i.createCardTemplate)(t,b),document.querySelectorAll(".js-add-to-fav").forEach((function(e){return e.checked=!0}))}})),b.addEventListener("click",(function(e){if(e.target.classList.contains("js-add-to-fav")){var t=e.target.closest(".card-template").dataset.id,r=h.find((function(e){return e._id===t}));if((h=JSON.parse(localStorage.getItem(s))).some((function(e){return e.category===r.category}))){var a=document.querySelector('li[data-category="'.concat(r.category,'"]'));return void(E.classList.contains("in-focus")||E.classList.contains("favorite-active-btn")||(a.firstElementChild.classList.add("in-focus"),q+=1))}document.querySelector('li[data-category="'.concat(r.category,'"]')).remove(),q=0,E.classList.contains("favorite-active-btn")||(E.classList.add("in-focus"),(0,i.createCardTemplate)(h,b),O+=1),0===h.length&&(E.remove(),p.classList.add("hiddenvisualy"),S.classList.remove("hiddenvisualy"))}})),a("OtYKr"),a("dEcaA"),a("fz8By"),a("QPNXd"),a("lubkt"),a("b7ONl")}();
//# sourceMappingURL=favorites.829d9ca4.js.map
