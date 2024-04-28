if (!window.location.href.includes("nocpy")) {
    document.addEventListener("contextmenu", function(e){ 
        if (e.target.tagName === "IMG") {
            e.preventDefault();
        }
    }, false);
}