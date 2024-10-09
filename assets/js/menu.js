
// Menu Lateral
// @alibhtty

$ = jQuery;
    /// ADD CLASS TO HEADER ON SCROLL ///
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 70) {
            $("header").addClass("active");
        } else {
            $("header").removeClass("active");
        }
    });

    AOS.init({
        easing: 'ease-in-out-sine'
    });

    /// SHOW/HIDE MENU ///
    $(document).ready(function() {
        $(".menuSeven, .hamburger_close, .fs_menu_overlay").click(function() {
            $(".logo-image").toggleClass("showmenu");
            $("html").toggleClass("no-scroll");
            if ($(".logo-image").hasClass("showmenu")) {
                $("body").append('<div class="blur-background"></div>');
                $("header").addClass("menu-active");
            } else {
                $(".blur-background").remove();
                $("header").removeClass("menu-active");
            }
        });
    });

    /// ANIMATED MENU ICON ///
    const menuSeven = document.querySelector('.menuSeven');

    function addClassFunSeven() {
        this.classList.toggle("clickMenuSeven");
    }
    menuSeven.addEventListener('click', addClassFunSeven);




// Swipe botón Instagram
    const button = document.querySelector('.make-btn-main');
    let startX = 0;
    let currentX = 0;

    button.addEventListener('touchstart', function(event) {
        startX = event.touches[0].clientX;
        button.classList.remove('swipe-out');
        button.querySelector('.carta').classList.add('active-blur');
    });

    button.addEventListener('touchmove', function(event) {
        currentX = event.touches[0].clientX - startX;
        button.style.transform = `translateX(${currentX}px)`;
    });

    button.addEventListener('touchend', function() {
        button.querySelector('.carta').classList.remove('active-blur');
        if (Math.abs(currentX) > button.offsetWidth / 2) {
            button.classList.add('swipe-out');
            button.style.transform = currentX > 0 ? `translateX(${window.innerWidth}px)` : `translateX(-${window.innerWidth}px)`;
        } else {
            button.style.transform = 'translateX(0)';
        }
    });