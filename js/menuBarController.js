const menuBtn = $("#menuBtn")
const menu =  $('.navbar ul')
const rocket = $('#rocket')
const rocketIcon = $('#rocket ion-icon')
const impulse = $('#impulse')

var menuOpen = false

menuBtn.on('click', () => {
    

    if (!menuOpen){

        menu.css({
            'transform': 'translateX(0)'
        });

        rocket.css({
            'transform': 'translateX(0)'
        });

        rocketIcon.css({
            'transition': '.5 ease-in-out',
            'transform': 'rotateZ(45deg)',
        })

        impulse.css({
            'transition': '.5 ease-in-out',
            'transform': 'rotateZ(180deg)',
            'left': '5px',
        })
        
    }else{
        menu.css({
            'transform': 'translateX( var(--navBarDist) )'
        });

        rocket.css({
            'transform': 'translateX( var(--navBarDist) )'
        });
        
        rocketIcon.css({
            'transition': '.5 ease-in-out',
            'transform': 'rotateZ(-135deg)',
        })

        impulse.css({
            'transition': '.5 ease-in-out',
            'transform': 'rotateZ(-180deg)',
            'left': '32px',
        })
    }

    menuOpen = !menuOpen
    
})