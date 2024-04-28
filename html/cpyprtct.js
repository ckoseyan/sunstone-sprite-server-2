document.addEventListener("contextmenu", function(e){ 
    if (e.target.tagName === "IMG") {
        if (e.target.cpyignore !== true) {
             e.preventDefault();
        }
    }
}, false);