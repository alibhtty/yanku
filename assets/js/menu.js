
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