/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => { 
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    }); 

    document.addEventListener('click', (event)=> {  
        let isPopSection = () => {
            if(event.target.className == 'pop-section visible') return false;
            let target = event.target.parentElement;
            while(target){
                if(target.className == 'pop-section visible') return true;
                else {target = target.parentElement;}
            }
            return false;
        } 
        
        if(!isPopSection()) {
            const popSection_classList = document.querySelector('.pop-section').classList;
            for(const elClass of popSection_classList){
                if(elClass == 'visible') {
                    popSection_classList.remove('visible')
                    popSection_classList.add('hidden')
                }
            } 
        }
    })
});

for(el of window.document.getElementsByClassName('projects-image-wrapper')) {
    const id = el.id;  
    el.addEventListener('click', () => { 
        setTimeout(() => { 
            const popUp = document.querySelector('.pop-section');
            popUp.classList.remove('hidden');
            popUp.classList.add('visible');
            popUp.innerHTML = '';
            popUp.appendChild(PopSectionFactory.generateNode(id));
        }, 100);
    })
}

