
const body = $("body");
let windowWidths = window.innerWidth;
let windowHeights = window.innerHeight;

console.log(`W: ${windowWidths} H: ${windowHeights}`);
let min = 10;
let max = 15;
let nStars = Math.floor(Math.random() * (max - min + 1)) + min;


for (let i = 0; i < nStars; i++) {
    let tops = Math.floor(Math.random() * windowHeights);
    let lefts = Math.floor(Math.random() * windowWidths);
    let starDiameter = Math.floor(Math.random() * 2) + 1;

    let star = $("<div>",{
        id: "S"+`${i}`,
        class: "star"
    })    
    .css({
        "width": starDiameter,
        "height": starDiameter,
        "top": tops,
        "left": lefts,
    })

    body.append(star)
}

let milkway = $("<div>",{
    class: "milkway"
}) 

body.append(milkway)