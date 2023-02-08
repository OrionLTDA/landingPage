const radio1 = $("#radio1");
const radio2 = $("#radio2");
const radio3 = $("#radio3");
const radioButton = $(".manual-btn");

let timeout = 2000
radio1.checked = true 

radioButton.on("click", () => {
    changeRadioSelected()
})

function changeRadioSelected(){
    if(radio1.checked){
    radio2.checked = true;  
    }else if(radio2.checked){
        radio3.checked = true;
    }else if(radio3.checked){
        radio4.checked = true;  
    }else if(radio4.checked){
        radio1.checked = true; 
    }
}