const cardShow = $("#cardShow");
const cardPanel = $("#cardPanel");
const cardEmail = $("#emailPanel")
const ffSendEmail = $("#ffSendEmail")
let email = false

function showCard() {
    cardShow.toggleClass("displayBlock")
    cardPanel.addClass("displayBlock")

    email = false
    cardEmail.removeClass("displayBlock")
}

function showEmail() {
    cardPanel.removeClass("displayBlock")

    email = true
    cardEmail.addClass("displayBlock")
}

function close() {
    email = false
    cardEmail.removeClass("displayBlock")
}

$(cardShow).click(function (e) {
    if ( !$(e.target).closest(cardPanel).length && !email) {
        $(cardShow).toggleClass("displayBlock")

    }else if ( !$(e.target).closest(cardEmail).length && email ){
        $(cardShow).toggleClass("displayBlock")
        close()
    }
});

$(ffSendEmail).click(function () {
    email = true
    $(cardShow).toggleClass("displayBlock")
    cardEmail.addClass("displayBlock")
});