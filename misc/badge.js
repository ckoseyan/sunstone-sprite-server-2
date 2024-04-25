(function AirFryer01ReplitBadgeReplacement(
    theme = "dark",
    position = "bottom-left",
    caption = null
  ) {
    // Suppress badge in ReplView
  
    // define positions
    // helps reduce polluting css classes
    const offset = "1.5rem";
    const validPositions = {
      "bottom-left": { bottom: "0rem", left: offset },
      "bottom-right": { bottom: "0rem", right: offset },
    };
  
    // ensure positions are valid
    if (!validPositions.hasOwnProperty(position)) {
      console.warn(
        `${position} is not a valid position, defaulting to bottom-left`
      );
      position = "bottom-left";
    }
  
    // create modifiable params
    const params = new URLSearchParams();
    params.append("theme", theme);
    if (typeof caption === "string" && caption.length > 0) {
      params.append("caption", caption);
    }
  
    // create link & styles
    const badgeAnchor = document.createElement("a");
    Object.assign(badgeAnchor, {
        target: "_blank",
      href: 'https://airfryer.zip/discord',
      draggable: false,
    });
  
    // create badge image & styles
    const badgeImage = document.createElement("img");
    badgeImage.src = `goosex.back.png`;
    badgeImage.draggable = false;
    badgeImage.id = "AirFryer01ReplitBadgeReplacement";
  
    Object.assign(badgeImage.style, validPositions[position]);
  
    // inject styles
    document.head.insertAdjacentHTML(
      "beforeend",
      `
      <style>
        #AirFryer01ReplitBadgeReplacement {
          position: fixed;
          cursor: pointer;
          z-index: 100;
          transition: transform 100ms ease-in-out;
          width:122px;
        }
  
        #AirFryer01ReplitBadgeReplacement:hover {
          //transform: scale(1.05);
        }
      </style>
    `
    );
  
    // append badge to page
    badgeAnchor.appendChild(badgeImage);
    document.body.appendChild(badgeAnchor);
  })(
    document.currentScript.getAttribute("theme"),
    document.currentScript.getAttribute("position"),
    document.currentScript.getAttribute("caption")
  );