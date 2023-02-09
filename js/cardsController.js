const screenWidth = screen.width;
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

console.log("S: " + screenWidth + " W: " + windowWidth)
console.log("H: " + windowHeight)

if ( screenWidth <= 900 || windowWidth <= 900){
    
    const surgimento = $("#surgimento ");
    const missao = $("#missao");
    const principios = $("#principios");

    const gestao = $(".text div");

    surgimento.on("click", () => {
        $("#surgimento p").toggle()
    })

    missao.on("click", () => {
        $("#missao p").toggle()
    })

    principios.on("click", () => {
        $("#principios ul").toggle()
    })


    gestao.on("click", () => {
        $(".text ul").toggle()
    })




}