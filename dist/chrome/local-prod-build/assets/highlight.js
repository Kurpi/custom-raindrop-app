function ownKeys(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function _objectSpread(t){for(var e,i=1;i<arguments.length;i++)e=null==arguments[i]?{}:arguments[i],i%2?ownKeys(Object(e),!0).forEach((function(i){_defineProperty(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ownKeys(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}));return t}function _defineProperty(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function RdCopyText(t,e){var i=t.createElement("textarea");i.value=e,i.style.top="0",i.style.left="0",i.style.position="fixed",t.body.appendChild(i),i.focus(),i.select(),t.execCommand("copy"),t.body.removeChild(i)}function RdPrompt(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",i=2<arguments.length?arguments[2]:void 0;if("electron"==rdhPlatform){var o=window.open("","prompt","popup,frame=false,width=".concat(350,",height=").concat(100,",left=").concat(screen.width/2-175,",top=").concat(screen.height/2-50));o.document.documentElement.innerHTML=' <meta name="color-scheme" content="light dark"> <style> * { box-sizing: border-box; font: 14px -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji; margin: 0; } html, body, form { width: 100vw;height: 100vh;height: -webkit-fill-available; } form { display: flex; flex-direction: column; padding: 1em; gap: 1em; } input[type="text"] { flex: 1; display: block; padding: .5em; } div { display: flex; justify-content: flex-end; gap: .5em; } input[type="submit"] { order: 1; font-weight: bold; } </style> <form><input type="text" autoFocus placeholder="'.concat(t,'" /><div><input type="submit" value="OK" /><button>Cancel</button></div></form> ');var n=o.document.querySelector('input[type="text"]');n.value=e,o.document.querySelector("form").addEventListener("submit",(function(t){t.preventDefault(),o.closed||(i(n.value),o.close())}));var r=o.document.querySelector("button");return r.addEventListener("click",(function(t){t.preventDefault(),o.closed||(i(e),o.close())})),o.window.addEventListener("keydown",(function(t){"Escape"==t.code&&r.click()})),void o.window.addEventListener("blur",(()=>{r.click()}))}var a=prompt(t,e);i(null===a?e:a)}class RdTooltip{constructor(t,e){var{onColorClick:i,onNoteClick:o,onCopyClick:n,onRemoveClick:r}=e;_defineProperty(this,"_parent",null),_defineProperty(this,"_menu",null),_defineProperty(this,"_listeners",{}),_defineProperty(this,"_hidden",!0),_defineProperty(this,"_colors",["yellow","blue","green","red"]),_defineProperty(this,"_classMenu","rdhm"),_defineProperty(this,"_classButtonColor","rdhbh"),_defineProperty(this,"_classButtonNote","rdhbn"),_defineProperty(this,"_classButtonCopy","rdhbc"),_defineProperty(this,"_classButtonRemove","rdhbr"),_defineProperty(this,"_idCss","rdhss"),_defineProperty(this,"_attrColor","data-rdhsc"),this._parent=t,this._listeners={onColorClick:i,onNoteClick:o,onCopyClick:n,onRemoveClick:r},this._initStyles(),this._initMenu(),this.show=this.show.bind(this),this.hide=this.hide.bind(this),this._windowMouseDown=this._windowMouseDown.bind(this),this._windowResize=this._windowResize.bind(this),this._parent._isMobile?(this._parent._document.removeEventListener("touchstart",this._windowMouseDown),this._parent._document.addEventListener("touchstart",this._windowMouseDown),this._parent._document.removeEventListener("touchend",this._windowMouseUp),this._parent._document.addEventListener("touchend",this._windowMouseUp)):(this._parent._window.removeEventListener("mousedown",this._windowMouseDown),this._parent._window.addEventListener("mousedown",this._windowMouseDown)),this._parent._window.removeEventListener("resize",this._windowResize),this._parent._window.addEventListener("resize",this._windowResize)}show(t,e){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",o=!!(3<arguments.length&&void 0!==arguments[3])&&arguments[3],n=!!(4<arguments.length&&void 0!==arguments[4])&&arguments[4],r=t,a=e;this._parent._isMobile&&(r=t-this._menu.offsetWidth/2);var s=this._parent._window.scrollX+10,c=s+this._parent._window.innerWidth-this._menu.offsetWidth-10;r<s&&(r=s),r>c&&(r=c);var d=this._parent._window.scrollY+10,l=d+this._parent._window.innerHeight-this._menu.offsetHeight-10;if(a<d&&(a=d),a>l&&(a=l),this._menu.setAttribute("style","left: ".concat(r,"px !important; top: ").concat(a,"px !important;")),this._menu.querySelectorAll("[".concat(this._attrColor,"]")).forEach((t=>t.removeAttribute("data-active"))),i){var h=this._menu.querySelector("[".concat(this._attrColor,'="').concat(i.trim(),'"]'));h&&h.setAttribute("data-active","true")}var p=this._menu.querySelector(".".concat(this._classButtonNote));o?p.setAttribute("data-badge","1"):p.removeAttribute("data-badge"),this._menu.querySelector(".".concat(this._classButtonRemove)).setAttribute("hidden",n?"false":"true"),this._menu.removeAttribute("hidden"),this._hidden=!1}hide(){this._menu&&(this._hidden=!0,this._menu.setAttribute("hidden","true"))}_windowMouseDown(t){this._hidden||t.target==this._menu||this._menu.contains(t.target)||this.hide()}_windowResize(){this._hidden||this.hide()}_colorClick(t){t.preventDefault(),"function"!=typeof this._listeners.onColorClick||this._listeners.onColorClick(t.currentTarget.getAttribute(this._attrColor)||"")}_noteClick(t){t.preventDefault(),"function"!=typeof this._listeners.onNoteClick||this._listeners.onNoteClick(t.screenX-14,t.screenY-14)}_copyClick(t){t.preventDefault(),"function"!=typeof this._listeners.onCopyClick||this._listeners.onCopyClick()}_removeClick(t){t.preventDefault(),"function"!=typeof this._listeners.onRemoveClick||this._listeners.onRemoveClick()}_initMenu(){this._menu||(this._menu=this._parent._document.createElement("menu"),this._menu.className=this._classMenu,this._menu.setAttribute("hidden","true"),this._menu.innerHTML=' <li title="Add highlight to Raindrop.io"> '.concat(this._colors.map((t=>' <button class="'.concat(this._classButtonColor,'" ').concat(this._attrColor,'="').concat(t,'"><span /></button> '))).join(""),' </li> <button class="').concat(this._classButtonNote,'" title="Add annotation to Raindrop.io"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M10,2 C14.418278,2 18,5.581722 18,10 C18,14.418278 14.418278,18 10,18 C8.57827688,18 7.24317393,17.629135 6.08615605,16.9788699 L2,18 L3.0222629,13.9158589 C2.37129574,12.7583762 2,11.4225485 2,10 C2,5.581722 5.581722,2 10,2 Z M10,3 C6.13400675,3 3,6.13400675 3,10 C3,11.1072789 3.25670533,12.1753459 3.74159283,13.1395754 L3.89387602,13.4256645 L4.08897687,13.7725727 L3.375,16.625 L6.22947002,15.9123036 L6.57609819,16.107115 C7.61276874,16.6897427 8.78268976,17 10,17 C13.8659932,17 17,13.8659932 17,10 C17,6.13400675 13.8659932,3 10,3 Z M6,9 C6.55228475,9 7,9.44771525 7,10 C7,10.5522847 6.55228475,11 6,11 C5.44771525,11 5,10.5522847 5,10 C5,9.44771525 5.44771525,9 6,9 Z M10,9 C10.5522847,9 11,9.44771525 11,10 C11,10.5522847 10.5522847,11 10,11 C9.44771525,11 9,10.5522847 9,10 C9,9.44771525 9.44771525,9 10,9 Z M14,9 C14.5522847,9 15,9.44771525 15,10 C15,10.5522847 14.5522847,11 14,11 C13.4477153,11 13,10.5522847 13,10 C13,9.44771525 13.4477153,9 14,9 Z"/></svg> </button> <button class="').concat(this._classButtonCopy,'" title="Copy text"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill-rule="evenodd" d="M2 11.5c0 .8.7 1.5 1.5 1.5H7v-1H3.5a.5.5 0 0 1-.5-.5v-8c0-.3.2-.5.5-.5h8c.3 0 .5.2.5.5V7H8.5C7.7 7 7 7.7 7 8.5v8c0 .8.7 1.5 1.5 1.5h8c.8 0 1.5-.7 1.5-1.5v-8c0-.8-.7-1.5-1.5-1.5H13V3.5c0-.8-.7-1.5-1.5-1.5h-8C2.7 2 2 2.7 2 3.5v8Zm6-3c0-.3.2-.5.5-.5h8c.3 0 .5.2.5.5v8c0 .3-.2.5-.5.5h-8a.5.5 0 0 1-.5-.5v-8Z"/></svg> </button> <button class="').concat(this._classButtonRemove,'" title="Delete"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill-rule="evenodd" d="M5.5 2a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9ZM2 4.5c0-.3.2-.5.5-.5h15a.5.5 0 0 1 0 1H16v12c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1V5H2.5a.5.5 0 0 1-.5-.5ZM5 5h10v12H5V5Z"/></svg> </button> '),this._parent._container.appendChild(this._menu),this._menu.querySelectorAll(".".concat(this._classButtonColor)).forEach((t=>{this._colorClick=this._colorClick.bind(this),t.removeEventListener("mousedown",this._colorClick),t.addEventListener("mousedown",this._colorClick)})),this._menu.querySelectorAll(".".concat(this._classButtonNote)).forEach((t=>{this._noteClick=this._noteClick.bind(this),t.removeEventListener("mousedown",this._noteClick),t.addEventListener("mousedown",this._noteClick)})),this._menu.querySelectorAll(".".concat(this._classButtonCopy)).forEach((t=>{"function"==typeof this._listeners.onCopyClick?(this._copyClick=this._copyClick.bind(this),t.removeEventListener("mousedown",this._copyClick),t.addEventListener("mousedown",this._copyClick)):t.setAttribute("hidden","true")})),this._menu.querySelectorAll(".".concat(this._classButtonRemove)).forEach((t=>{this._removeClick=this._removeClick.bind(this),t.removeEventListener("mousedown",this._removeClick),t.addEventListener("mousedown",this._removeClick)})))}_initStyles(){if(!this._parent._container.querySelector("#".concat(this._idCss))){var t=this._parent._document.createElement("style");t.id=this._idCss,t.innerHTML=" :root { --r-menu-bg: Canvas; --r-menu-color: FieldText; --r-menu-active: GrayText; --r-menu-item-width: 30px; --r-menu-item-height: 30px; --r-menu-border-radius: 8px; } @supports (background-color: -apple-system-control-background) { :root { --r-menu-bg: -apple-system-control-background; } } /* mobile */ @media (pointer: coarse) { /* android */ @supports not (-webkit-backdrop-filter: blur(0)) { :root { --r-menu-item-width: 44px; --r-menu-item-height: 48px; --r-menu-border-radius: 24px; } /* android preferes system theme */ @media (prefers-color-scheme: dark) { :root { --r-menu-bg: #282828; --r-menu-color: white; --r-menu-active: rgba(255,255,255,.2); } } @media (prefers-color-scheme: light) { :root { --r-menu-bg: white; --r-menu-color: black; --r-menu-active: rgba(0,0,0,.2); } } } /* ios */ @supports (-webkit-backdrop-filter: blur(0)) { :root { /* ios safari always black */ --r-menu-bg: black; --r-menu-color: white; --r-menu-active: rgba(255,255,255,.3); --r-menu-item-width: 44px; --r-menu-item-height: 38px; --r-menu-border-radius: 8px; } } } .".concat(this._classMenu," { position: absolute !important; display: flex !important; z-index: 99999999 !important; background-color: var(--r-menu-bg) !important; background-image: linear-gradient(to bottom, rgba(255,255,255,.1) 0, rgba(255,255,255,.1) 100%) !important; box-shadow: 0 0 0 .5px rgba(0,0,0,.15), 0 .5px 0 rgba(0,0,0,.1), 0 6px 12px rgba(0,0,0,.1), 0 10px 20px rgba(0,0,0,.05) !important; margin: 4px !important; width: auto !important; height: auto !important; left: 0 !important; top: 0 !important; animation: none !important; transition: opacity .1s ease-in-out, transform .1s ease-in-out !important; will-change: opacity; border: 0 !important; padding: 0 !important; border-radius: var(--r-menu-border-radius) !important; overflow: hidden !important; } .").concat(this._classMenu,", .").concat(this._classMenu," * { margin: 0 !important; } .").concat(this._classMenu,", .").concat(this._classMenu," * { box-sizing: border-box !important; user-select: none !important; -webkit-user-select: none !important; } .").concat(this._classMenu,"[hidden='true'] { transition-duration: .2s !important; pointer-events: none !important; opacity: 0 !important; } .").concat(this._classMenu,"[hidden='false'] { opacity: 1 !important; } /* Dropdown */ .").concat(this._classMenu," > li { display: flex !important; flex-direction: row !important; flex-wrap: wrap !important; } /* Dropdown grow down on desktop on hover */ @media (pointer: fine) { .").concat(this._classMenu," > li { display: grid !important; max-height: var(--r-menu-item-height) !important; transition: max-height .2s ease-in-out !important; transition-delay: .25s !important; will-change: max-height; overflow: hidden !important; } .").concat(this._classMenu," > li:hover { transition-delay: .15s !important; max-height: ").concat(32*this._colors.length,"px !important; } } /* Buttons */ .").concat(this._classMenu," button { -webkit-tap-highlight-color: transparent !important; flex-shrink: 0 !important; cursor: default !important; color: var(--r-menu-color) !important; width: var(--r-menu-item-width) !important; height: var(--r-menu-item-height) !important; appearance: none !important; background: transparent !important; border: 0 !important; border-radius: 0 !important; box-shadow: none !important; margin: 0 !important; padding: 0 !important; display: flex !important; align-items: center !important; justify-content: center !important; transition: none !important; will-change: background, color; filter: none !important; position: relative !important; } .").concat(this._classMenu," button:hover { background: rgba(150,150,150,.2) !important; } .").concat(this._classMenu," button:active { background: var(--r-menu-active) !important; } .").concat(this._classMenu," button[hidden='true'] { display: none !important; } .").concat(this._classMenu," button[hidden='false'] { display: flex !important; } .").concat(this._classMenu,' button[data-badge]:before { content: "" !important; width: 12px !important; height: 12px !important; border-radius: 6px !important; display: flex !important; align-items: center !important; justify-content: center !important; background: red !important; color: white !important; position: absolute !important; top: 3px !important; right: 2px !important; font-size: 11px !important; line-height: 11px !important; font-weight: 600 !important; } @media (pointer: fine) { .').concat(this._classMenu," button[data-active='true'] { order: -1 !important; } } @media (pointer: coarse) { .").concat(this._classMenu," button[data-active='true'] { display: none !important; } } .").concat(this._classMenu," * { fill: var(--r-menu-color) !important; } /* Color */ .").concat(this._classMenu," button[").concat(this._attrColor,"] span { position: relative !important; background-image: linear-gradient(to bottom, rgba(255,255,255,.3) 0, rgba(255,255,255,.3) 100%) !important; } .").concat(this._classMenu," button[").concat(this._attrColor,"] span, .").concat(this._classMenu," button[").concat(this._attrColor,"] span:before { display: block !important; width: 17px !important; height: 17px !important; border-radius: 17px !important; } ").concat(this._colors.map((t=>" .".concat(this._classMenu," button[").concat(this._attrColor,"=").concat(t,"] span { background-color: ").concat(t," !important; } "))).join("")," .").concat(this._classMenu," button[").concat(this._attrColor,"] span:before { position: absolute !important; content: '' !important; left: 0 !important; top: 0 !important; right: 0 !important; bottom: 0 !important; box-shadow: inset 0 0 0 .5px var(--r-menu-color) !important; opacity: .35; mix-blend-mode: multiply; } "),this._parent._container.appendChild(t)}}}class RdSelection{constructor(t){_defineProperty(this,"_parent",null),_defineProperty(this,"_tooltip",null),this._parent=t,this._tooltip=new RdTooltip(t,{onColorClick:t=>this._parent.addSelection({color:t}),onNoteClick:(t,e)=>this._parent.noteSelection(t,e)}),this.render=this.render.bind(this),this._onSelectionChange=this._onSelectionChange.bind(this),this._parent._document.removeEventListener("selectionchange",this._onSelectionChange),this._parent._document.addEventListener("selectionchange",this._onSelectionChange),this._parent._window.removeEventListener("focus",this.render),this._parent._window.addEventListener("focus",this.render),this._parent._window.removeEventListener("blur",this.render),this._parent._window.addEventListener("blur",this.render),this._onSelectionChange()}have(){var t=this._parent._window.getSelection();return t&&0<t.rangeCount&&!t.isCollapsed&&0<t.toString().trim().length}render(){if(this._parent.enabled&&this.have()&&this._parent._document.hasFocus()){var t=this._parent._window.getSelection(),{x:e,y:i,width:o,height:n}=t.getRangeAt(0).getBoundingClientRect(),r=this._parent._window.scrollX+e+o,a=this._parent._window.scrollY+i-32;this._parent._isMobile&&(r=this._parent._window.scrollX+e+o/2,a=this._parent._window.scrollY+i+n+(80<i?16:80)),this._tooltip.show(r,a)}else this._tooltip.hide()}_onSelectionChange(){clearTimeout(this._selectTimeout),this._tooltip.hide(),this._selectTimeout=setTimeout(this.render,this.have()?this._parent._isMobile?400:250:0)}}class RdHighlight{constructor(t){_defineProperty(this,"_container",null),_defineProperty(this,"_window",null),_defineProperty(this,"_document",null),_defineProperty(this,"_isMobile",matchMedia("(pointer:coarse)").matches),_defineProperty(this,"_selection",null),_defineProperty(this,"_tooltip",null),_defineProperty(this,"_activeMarkId",null),_defineProperty(this,"_attrId","data-rdhid"),_defineProperty(this,"_idCss","rdhs"),_defineProperty(this,"_cssColorVar","--rdhc"),_defineProperty(this,"_classNoteIcon","rdhni"),_defineProperty(this,"_classNav","rdhnav"),_defineProperty(this,"enabled",!1),_defineProperty(this,"pro",!1),_defineProperty(this,"nav",!1),_defineProperty(this,"onUpdate",(()=>{})),_defineProperty(this,"onRemove",(()=>{})),_defineProperty(this,"onAdd",(()=>{})),this._container=t,this._document=this._container.ownerDocument,this._window=this._document.defaultView,this._markClick=this._markClick.bind(this),this._markColorClick=this._markColorClick.bind(this),this._markNoteClick=this._markNoteClick.bind(this),this._markCopyClick=this._markCopyClick.bind(this),this._markRemoveClick=this._markRemoveClick.bind(this),this._navClick=this._navClick.bind(this),this._selection=new RdSelection(this),this._tooltip=new RdTooltip(this,{onColorClick:this._markColorClick,onNoteClick:this._markNoteClick,onCopyClick:this._markCopyClick,onRemoveClick:this._markRemoveClick})}apply(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];if(this.reset(),this._initStyles(),Array.isArray(t))for(var e of t)this.mark(this._getRanges(this._getTextNodes(this._container),e.text),e)}test(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";if(5e3<t.length)return!1;var e=this._getTextNodes(this._container);return 0<this._getRanges(e,t).length}getSelectionText(){var t=!!(0<arguments.length&&void 0!==arguments[0])&&arguments[0],e=this._window.getSelection();if(e.rangeCount){var i=e.getRangeAt(0).toString().trim();return t&&!this.test(i)?void alert("Unfortunately we can't add this text"):i}}reset(){this._container.querySelectorAll("mark[".concat(this._attrId,"]")).forEach((t=>t.outerHTML=t.innerText)),this._container.querySelectorAll(".".concat(this._classNav)).forEach((t=>t.remove()))}scrollToId(t){if(t){var e=this._container.querySelector("mark[".concat(this._attrId,'="').concat(t+"",'"]'));e&&e.scrollIntoView((navigator.vendor||"").includes("Apple")?{}:{behavior:"smooth",block:"center"})}}addSelection(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if("function"==typeof this.onAdd){var e=this.getSelectionText(!0);e&&(this.onAdd(_objectSpread(_objectSpread({},t),{},{text:e})),this._window.getSelection().removeAllRanges())}}noteSelection(){if(!this.pro)return alert("Annotations available in Raindrop.io Pro");var t=this.getSelectionText(!0);t&&RdPrompt("Notes","",(e=>{(e||"").trim()&&(this.onAdd({note:e,text:t}),this._window.getSelection().removeAllRanges())}))}copySelection(){this._document.execCommand("copy")}mark(t,e){var{_id:i,color:o,note:n}=e;t.forEach(((e,r)=>{var a=this._document.createElement("mark");if(a.setAttribute(this._attrId,i),o&&"yellow"!=o&&a.setAttribute("style","".concat(this._cssColorVar,": ").concat(o)),n&&a.setAttribute("title",n),a.addEventListener("click",this._markClick),a.addEventListener("contextmenu",this._markClick),e.surroundContents(a),r==t.length-1&&n&&a.insertAdjacentHTML("beforeend",'<svg class="'.concat(this._classNoteIcon,'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"> <path d="M8 0a2 2 0 0 1 2 2v8L6 8H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h6ZM2 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/> </svg>')),this.nav&&0==r){var s=this._document.createElement("a");s.className=this._classNav,s.setAttribute(this._attrId,i);var c=e.getBoundingClientRect();s.setAttribute("style"," ".concat(o&&"yellow"!=o?"".concat(this._cssColorVar,": ").concat(o,";"):""," top: ").concat(100/this._document.documentElement.scrollHeight*(this._window.scrollY+c.top-10),"%; ").trim()),s.addEventListener("click",this._navClick),this._container.appendChild(s)}e.detach()}))}_markClick(t){if("A"!=t.currentTarget.parentElement.tagName){t.preventDefault(),t.stopPropagation();var e=t.currentTarget,i=e.getAttribute(this._attrId),o=(getComputedStyle(e).getPropertyValue(this._cssColorVar)||"yellow").trim(),n=e.hasAttribute("title");this._activeMarkId=i,this._tooltip.show(t.pageX+5,t.pageY+5,o,n,!0)}}_markColorClick(t){this._activeMarkId&&(this.onUpdate({_id:this._activeMarkId,color:t}),this._tooltip.hide())}_markNoteClick(){if(!this.pro)return alert("Annotations available in Raindrop.io Pro");if(this._activeMarkId){var t=this._container.querySelector("[".concat(this._attrId,'="').concat(this._activeMarkId,'"]')).getAttribute("title")||"";RdPrompt("Notes",t,(e=>{t!=e&&this.onUpdate({_id:this._activeMarkId,note:e})})),this._tooltip.hide()}}_markCopyClick(){if(this._activeMarkId){var t=this._container.querySelectorAll("mark[".concat(this._attrId,'="').concat(this._activeMarkId,'"]'));if(t.length){var e=new Range;e.setStartBefore(t[0]),e.setEndAfter(t[t.length-1]),RdCopyText(this._document,e.toString()),e.detach()}this._tooltip.hide()}}_markRemoveClick(){if(this._activeMarkId){var t=!0;if(this._container.querySelector("[".concat(this._attrId,'="').concat(this._activeMarkId,'"]')).hasAttribute("title"))try{t=confirm("Remove highlight?")}catch(t){}t&&(this.onRemove({_id:this._activeMarkId}),this._tooltip.hide())}}_navClick(t){t.preventDefault(),t.stopPropagation();var e=t.currentTarget.getAttribute(this._attrId);this.scrollToId(e)}_initStyles(){if(!this._container.querySelector("#".concat(this._idCss))){var t=this._document.createElement("style");t.id=this._idCss,t.innerHTML=" mark[".concat(this._attrId,"], .").concat(this._classNav,":before { background: var(").concat(this._cssColorVar,", #ffee00) !important; user-select: none !important; -webkit-user-select: none !important; } mark[").concat(this._attrId,"] { background-image: linear-gradient(to bottom, rgba(255,255,255,.7) 0, rgba(255,255,255,.7) 100%) !important; color: black !important; -webkit-text-fill-color: black !important; cursor: pointer !important; } .").concat(this._classNoteIcon," { display: inline !important; margin: 0 !important; padding: 0 !important; border: 0 !important; color: inherit !important; opacity: 0.5 !important; fill: currentColor !important; background: transparent !important; border-radius: 0 !important; margin-left: 0.3em !important; margin-right: 0.3em !important; width: 0.85em !important; height: 0.85em !important; } .").concat(this._classNav," { position: fixed !important; right: 0px !important; padding: 10px !important; padding-right: 6px !important; cursor: pointer !important; } .").concat(this._classNav,":before { content: '' !important; display: block !important; width: 10px !important; height: 10px !important; border-radius: 10px !important; box-shadow: 0 0 0 0.5px ButtonShadow, 0 5px 30px rgb(0 0 0 / 30%) !important; background-image: linear-gradient(to bottom, rgba(255,255,255,.2) 0, rgba(255,255,255,.2) 100%) !important; } .").concat(this._classNav,":hover:before { background-image: linear-gradient(to bottom, rgba(255,255,255,.5) 0, rgba(255,255,255,.5) 100%) !important; } .").concat(this._classNav,":active { filter: brightness(50%) !important; } "),this._container.appendChild(t)}}_getRanges(t,e){var i=e.replace(/\s+/g,""),o="",n=[],r=function(){for(var t in a.textContent){var e=a.textContent[t];"string"==typeof e&&e.trim()&&(n[o.length]=[a,parseInt(t)],o+=e)}var r=o.indexOf(i);if(-1==r)return"continue";var s=n.slice(r,r+i.length),c=new Map;return s.forEach(((t,e)=>{var i=c.get(t[0])||[-1,-1];-1==i[0]&&(i[0]=t[1]),e==s.length-1?i[1]=t[1]+1:-1==i[1]&&(i[1]=t[0].textContent.length),c.set(t[0],i)})),{v:Array.from(c).map((t=>{var e=new Range;return e.setStart(t[0],t[1][0]),e.setEnd(t[0],t[1][1]),e}))}};for(var a of t){var s=r();if("continue"!==s&&"object"==typeof s)return s.v}return[]}_getTextNodes(t){if(t&&t.childNodes){var e=[];for(var i of t.childNodes)switch(i.nodeType){case 1:i.hasAttribute(this._attrId)||e.push(...this._getTextNodes(i));break;case 3:e.push(i)}return e}}}var rdh,rdhPlatform,rdhEmbed={enabled:!1,wait:[],send:()=>{},receive:()=>{}};if("object"==typeof chrome&&chrome.runtime&&chrome.runtime.onMessage||"object"==typeof browser&&browser.runtime&&browser.runtime.onMessage){var{runtime}="object"==typeof browser?browser:chrome;rdhEmbed.enabled=!0,rdhEmbed.send=(t,e)=>runtime.sendMessage(null,{type:t,payload:e});var onMessage=(t,e)=>{var{type:i,payload:o}=t;e.id!=runtime.id||"string"!=typeof i||void 0!==o&&"object"!=typeof o||rdhEmbed.receive(i,o)};runtime.onMessage.removeListener(onMessage),runtime.onMessage.addListener(onMessage),rdhPlatform="extension"}else if(window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.rdh)rdhEmbed.enabled=!0,rdhEmbed.send=(t,e)=>window.webkit.messageHandlers.rdh.postMessage({type:t,payload:e}),window.rdhSend=t=>rdhEmbed.receive(t.type,t.payload),rdhPlatform="wkwebview";else if("function"==typeof require){rdhEmbed.enabled=!0;var{ipcRenderer}=require("electron");rdhEmbed.send=(t,e)=>ipcRenderer.sendToHost("RDH",{type:t,payload:e});var _onMessage=(t,e)=>rdhEmbed.receive(e.type,e.payload);ipcRenderer.removeListener("RDH",_onMessage),ipcRenderer.on("RDH",_onMessage),rdhPlatform="electron"}else if("ReactNativeWebView"in window)rdhEmbed.enabled=!0,rdhEmbed.send=(t,e)=>window.ReactNativeWebView.postMessage(JSON.stringify({type:t,payload:e})),window.ReactNativeWebViewSendMessage=t=>rdhEmbed.receive(t.type,t.payload),rdhPlatform="reactnative";else if(window.self!==window.top){rdhEmbed.enabled=!0,rdhEmbed.send=(t,e)=>window.parent.postMessage({type:t,payload:e},"*");var _onMessage2=t=>{var{data:e,source:i}=t;i!==window.parent||"object"!=typeof e||"string"!=typeof e.type||void 0!==e.payload&&"object"!=typeof e.payload||rdhEmbed.receive(e.type,e.payload)};window.removeEventListener("message",_onMessage2),window.addEventListener("message",_onMessage2),rdhPlatform="iframe"}if(rdhEmbed.enabled){function a(){clearTimeout(window._rh_delay),window._rh_delay=setTimeout((function(){if(window.removeEventListener("DOMContentLoaded",a),(rdh=new RdHighlight(document.body)).onUpdate=t=>rdhEmbed.send("RDH_UPDATE",t),rdh.onRemove=t=>rdhEmbed.send("RDH_REMOVE",t),rdh.onAdd=t=>rdhEmbed.send("RDH_ADD",t),rdhEmbed.wait.length){for(var{type:t,payload:e}of rdhEmbed.wait)rdhEmbed.receive(t,e);rdhEmbed.enabled=[]}rdhEmbed.send("RDH_READY",{url:location.href}),window.addEventListener("load",(()=>{rdhEmbed.send("RDH_READY",{url:location.href})}))}),150)}rdhEmbed.receive=(t,e)=>rdh?void("RDH_APPLY"===t?rdh.apply(e):"RDH_CONFIG"===t?("boolean"==typeof e.enabled&&(rdh.enabled=e.enabled),"boolean"==typeof e.pro&&(rdh.pro=e.pro),"boolean"==typeof e.nav&&(rdh.nav=e.nav)):"RDH_SCROLL"===t?rdh.scrollToId(e._id):"RDH_ADD_SELECTION"===t?rdh.addSelection(e):"RDH_NOTE_SELECTION"===t&&rdh.noteSelection()):void rdhEmbed.wait.push({type:t,payload:e}),"loading"==document.readyState?(window.removeEventListener("DOMContentLoaded",a),window.addEventListener("DOMContentLoaded",a)):a()}