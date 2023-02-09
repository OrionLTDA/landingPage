const radio1 = $("#radio1");
const radio2 = $("#radio2");
const radio3 = $("#radio3");
const manualBtn = $(".manual-btn")

let timeout = 2000
radio1.click()

function changeRadioSelected(){
  
    let btn
    if (radio1.is(":checked")) {    
        radio2.click() 
        btn = radio2
    }else if(radio2.is(":checked")){
        radio3.click()
        btn = radio3
    }else if(radio3.is(":checked")){
        radio1.click()
        btn = radio1
    }

    // btn.css
}


manualBtn.on("hover", () => {
    timeout = 0;
})

setInterval( function(){
    changeRadioSelected()
}, timeout ) 
