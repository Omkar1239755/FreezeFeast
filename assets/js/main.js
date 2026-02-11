/* ==============
 ========= js documentation ==========================

 * template name: Mozzo
 * version: 1.0
 * date: 10.8.2025
 * description: Online Food Order HTML5 Template
 * author: 
 * author-url: https://themeforest.net/user/

    ==================================================

     01. Mobile Menu
     -------------------------------------------------
     02. sidebar toggle 
     -------------------------------------------------
     03. open offcanvas nav
     -------------------------------------------------
     04. sticky header
     -------------------------------------------------
     05. video popup
     -------------------------------------------------
     06. video iframe
     -------------------------------------------------
     07. counter up
     -------------------------------------------------
     08. wow animation
     -------------------------------------------------
     09. nice select
     -------------------------------------------------
     10. testimonial slider
     -------------------------------------------------
     11. banner slider
     -------------------------------------------------
     12. apartment slider
     -------------------------------------------------
     13. offering slider
     -------------------------------------------------
     14. city slider
     -------------------------------------------------
     15. city slider two
     -------------------------------------------------
     16. add active class to the current link
     -------------------------------------------------
     17. on window resize functions
     -------------------------------------------------
     18. project slider
     -------------------------------------------------
     19. project slider two
     -------------------------------------------------
     20. testimonial slider two
     -------------------------------------------------
     21. progress bar
     -------------------------------------------------
     22. back to top
     -------------------------------------------------
     23. price range 
     -------------------------------------------------
     24. increment and decrement
     -------------------------------------------------
     25. preloader
     -------------------------------------------------
     26. countdown
     -------------------------------------------------
     27. counter up
     -------------------------------------------------
     29. title animation
     -------------------------------------------------
     30. template options
     -------------------------------------------------
     
    ==================================================
============== */

(function ($) {
    ("use strict");

    $(document).ready(function () {
        //<< Menu Offcanvas >>//
        $(".menu-style-offcanvas .submenu").hide();
        $(".menu-style-offcanvas").on("click", ".clickAble", function (e) {
            e.preventDefault();
            $(this).next(".submenu").slideToggle(200);
        });

        //<< 01 >> Mobile Menu Js Start <<//
        if (typeof $.fn.meanmenu === 'function') {
            $("#mobile-menu").meanmenu({
                meanMenuContainer: ".mobile-menu",
                meanScreenWidth: "1199",
                meanExpand: ['<i class="far fa-plus"></i>'],
            });
        }

        //<< Custom Mobile Menu Toggle >>// 
        // Populate mobile user section based on login state
        const $mobileUserSection = $('#mobileUserSection');
        if ($mobileUserSection.length > 0) {
            const isLoggedIn = localStorage.getItem('ff_logged_in') === 'true';
            if (isLoggedIn) {
                $mobileUserSection.html(`
					<p class="ff-mobile-user-title">Account</p>
					<a href="profile.html" class="ff-mobile-user-link">
						<i class="fa-solid fa-user"></i>
						<span>Profile</span>
					</a>
					<a href="my-orders.html" class="ff-mobile-user-link">
						<i class="fa-solid fa-box"></i>
						<span>My Orders</span>
					</a>
					<a href="shipping-address.html" class="ff-mobile-user-link">
						<i class="fa-solid fa-truck-fast"></i>
						<span>Shipping Address</span>
					</a>
					<a href="change-password.html" class="ff-mobile-user-link">
						<i class="fa-solid fa-lock"></i>
						<span>Change Password</span>
					</a>
					<button class="ff-mobile-logout-btn" id="mobileLogoutBtn">
						<i class="fa-solid fa-right-from-bracket"></i>
						<span>Logout</span>
					</button>
				`);
            } else {
                $mobileUserSection.html(`
					<a href="login.html" class="ff-mobile-nav-link">
						<i class="fa-solid fa-right-to-bracket"></i>
						<span>Login</span>
					</a>
					<a href="register.html" class="ff-mobile-nav-link">
						<i class="fa-solid fa-user-plus"></i>
						<span>Register</span>
					</a>
				`);
            }
        }

        // Mobile menu toggle
        $(document).on('click', '.ff-mobile-toggle', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $('.ff-mobile-menu').addClass('active');
            $('.ff-mobile-overlay').addClass('active');
            $('body').css('overflow', 'hidden');
        });

        // Close mobile menu
        $(document).on('click', '.ff-mobile-menu-close, .ff-mobile-overlay', function () {
            $('.ff-mobile-menu').removeClass('active');
            $('.ff-mobile-overlay').removeClass('active');
            $('body').css('overflow', '');
        });

        // Mobile logout
        $(document).on('click', '#mobileLogoutBtn', function () {
            localStorage.removeItem('ff_logged_in');
            window.location.href = 'login.html';
        });

        // Close mobile menu on link click
        $(document).on('click', '.ff-mobile-nav-link, .ff-mobile-user-link', function () {
            $('.ff-mobile-menu').removeClass('active');
            $('.ff-mobile-overlay').removeClass('active');
            $('body').css('overflow', '');
        });

        // Close mobile menu on Escape key
        $(document).on('keydown', function (e) {
            if (e.key === 'Escape' && $('.ff-mobile-menu').hasClass('active')) {
                $('.ff-mobile-menu').removeClass('active');
                $('.ff-mobile-overlay').removeClass('active');
                $('body').css('overflow', '');
            }
        });

        //<< 02 >> Sidebar Toggle Js Start <<//
        $(document).on(
            "click",
            ".offcanvas__close, .offcanvas__overlay",
            function () {
                $(".offcanvas__info").removeClass("info-open");
                $(".offcanvas__overlay").removeClass("overlay-open");
            }
        );

        $(document).on("click", ".sidebar__toggle", function () {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        //<< 03 >> Body Overlay Js Start <<//
        $(document).on("click", ".body-overlay", function () {
            $(".offcanvas__area, .df-search-area").removeClass(
                "offcanvas-opened opened"
            );
            $(".body-overlay").removeClass("opened");
        });

        //<< 04 >> Sticky Header Js Start <<//
        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 450) {
                $("#header-sticky").addClass("sticky");
            } else {
                $("#header-sticky").removeClass("sticky");
            }
        });

        //<< 05 >> Video Popup Start <<//
        if (typeof $.fn.magnificPopup === 'function') {
            $(".img-popup").magnificPopup({
                type: "image",
                gallery: {
                    enabled: true,
                },
            });

            //<< 06 >> Video iframe Start <<//
            $(".video-popup").magnificPopup({
                type: "iframe",
                callbacks: {},
            });
        }

        //<< 07 >> Counter up Start <<//
        if (typeof $.fn.counterUp === 'function') {
            $(".count").counterUp({
                delay: 15,
                time: 4000,
            });
        }

        //<< 08 >> Wow Animation Start <<//
        if (typeof WOW === 'function') {
            new WOW().init();
        }

        //<< 09 >> Nice Select Start <<//
        if (typeof $.fn.niceSelect === 'function') {
            $("select").niceSelect();
        }

        //>> 10 Search Popup Start <<//
        const $searchWrap = $(".search-wrap");
        const $navSearch = $(".nav-search");
        const $searchClose = $("#search-close");

        $(".search-trigger").on("click", function (e) {
            e.preventDefault();
            $searchWrap.animate({ opacity: "toggle" }, 500);
            $navSearch.add($searchClose).addClass("open");
        });

        $(".search-close").on("click", function (e) {
            e.preventDefault();
            $searchWrap.animate({ opacity: "toggle" }, 500);
            $navSearch.add($searchClose).removeClass("open");
        });

        function closeSearch() {
            $searchWrap.fadeOut(200);
            $navSearch.add($searchClose).removeClass("open");
        }

        $(document.body).on("click", function (e) {
            closeSearch();
        });

        $(".search-trigger, .main-search-input").on("click", function (e) {
            e.stopPropagation();
        });

        //<< Mozzo >>//
        if (typeof Swiper === 'function') {
            var swiper = new Swiper(".mySwiper", {
                loop: true,
                spaceBetween: 10,
                freeMode: true,
                slidesPerView: 2,
                watchSlidesProgress: true,
                breakpoints: {
                    470: {
                        slidesPerView: 4,
                    },
                },
            });
            var swiper2 = new Swiper(".mySwiper2", {
                loop: true,
                spaceBetween: 10,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                thumbs: {
                    swiper: swiper,
                },
            });
        }

        // Swiper Sliders - wrapped in try-catch to prevent errors if Swiper not loaded
        try {
            //<< Super Deals Slide >>//
            const superDealsSlider = new Swiper(".superDeals-slider", {
                spaceBetween: 24,
                speed: 1000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    // disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });

            //<< Super Deals Slide >>//
            const aboutSaysSlider = new Swiper(".about-says-slider", {
                spaceBetween: 24,
                speed: 1000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    // disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });

            //<< Super Deals Slide >>//
            const menuSlidWrap = new Swiper(".menu-slid-wrap", {
                spaceBetween: 24,
                speed: 1000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    // disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 7,
                    },
                    991: {
                        slidesPerView: 7,
                    },
                    767: {
                        slidesPerView: 6,
                    },
                    575: {
                        slidesPerView: 4,
                    },
                    400: {
                        slidesPerView: 3,
                    },
                    0: {
                        slidesPerView: 2,
                    },
                },
            });

            //<< 10 >> Testimonial Slider Start <<//
            if ($(".testimonial-slider").length > 0) {
                const testimonialSlider = new Swiper(".testimonial-slider", {
                    spaceBetween: 30,
                    speed: 2000,
                    loop: true,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false,
                    },
                    navigation: {
                        nextEl: ".array-prev",
                        prevEl: ".array-next",
                    },
                    pagination: {
                        el: ".swiper-dot",
                    },
                    breakpoints: {
                        991: {
                            slidesPerView: 1,
                        },
                        767: {
                            slidesPerView: 1,
                        },
                        575: {
                            slidesPerView: 1,
                        },
                        400: {
                            slidesPerView: 1,
                        },
                        0: {
                            slidesPerView: 1,
                        },
                    },
                });
            }

            //<< 16 >> Brand Slider Start <<//
            if ($(".brand-slider").length > 0) {
                const brandSlider = new Swiper(".brand-slider", {
                    spaceBetween: 30,
                    speed: 2000,
                    loop: true,
                    centeredSlides: true,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false,
                    },
                    breakpoints: {
                        1199: {
                            slidesPerView: 7,
                        },
                        991: {
                            slidesPerView: 6,
                        },
                        767: {
                            slidesPerView: 5,
                        },
                        575: {
                            slidesPerView: 4,
                        },
                        400: {
                            slidesPerView: 3,
                        },
                        0: {
                            slidesPerView: 2,
                        },
                    },
                });
            }

            //<< 19 >> Testimonial Slider Start <<//
            if ($(".testimonial-wrap02").length > 0) {
                const testimonialWrap02 = new Swiper(".testimonial-wrap02", {
                    spaceBetween: 24,
                    speed: 1000,
                    loop: true,
                    autoplay: {
                        delay: 1000,
                        disableOnInteraction: false,
                    },
                    navigation: {
                        nextEl: ".array-prev",
                        prevEl: ".array-next",
                    },
                    breakpoints: {
                        991: {
                            slidesPerView: 2,
                        },
                        767: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 1,
                        },
                        400: {
                            slidesPerView: 1,
                        },
                        0: {
                            slidesPerView: 1,
                        },
                    },
                });
            }

            //--Text Custom Slide
            const sponsor__text__slide = new Swiper(".sponsor-text-slide", {
                speed: 6000,
                loop: true,
                slidesPerView: "auto",
                centeredSlides: true,
                autoplay: {
                    delay: 1,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    991: {
                        spaceBetween: 12,
                    },
                    600: {
                        spaceBetween: 12,
                    },
                    400: {
                        spaceBetween: 12,
                    },
                    0: {
                        spaceBetween: 12,
                    },
                },
            });

            const sponsor__text__slide2 = new Swiper(".sponsor-text-slide2", {
                speed: 6000,
                loop: true,
                slidesPerView: "auto",
                centeredSlides: true,
                autoplay: {
                    delay: 1,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    991: {
                        spaceBetween: 12,
                    },
                    600: {
                        spaceBetween: 12,
                    },
                    400: {
                        spaceBetween: 12,
                    },
                    0: {
                        spaceBetween: 12,
                    },
                },
            });

            //<< 11 >> Banner Slider1
            const heroSLider = new Swiper(".hero-slider", {
                // Optional parameters
                speed: 4500,
                loop: true,
                slidesPerView: 1,
                simulateTouch: false,
                autoplay: true,
                effect: "fade",
                breakpoints: {
                    1600: {
                        slidesPerView: 1,
                    },
                    1400: {
                        slidesPerView: 1,
                    },
                    1200: {
                        slidesPerView: 1,
                    },
                    992: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },

                    a11y: false,
                },
                pagination: {
                    el: ".dots",
                    clickable: true,
                },

                navigation: {
                    prevEl: ".array-next",
                    nextEl: ".array-prev",
                },
            });

            //<< Mozzo >>//

            //<< 12 >> Apartment Slider Start <<//
            const apartmentSlider = new Swiper(".apartment-slider", {
                spaceBetween: 24,
                speed: 2000,
                loop: true,
                centeredSlides: true,
                autoplay: {
                    delay: 2000,
                    // disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination-cus",
                    type: "fraction",
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 1.5,
                    },
                    991: {
                        slidesPerView: 1.2,
                    },
                    767: {
                        slidesPerView: 1,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });

            //<< 13 >> Offering Slider Start <<//
            const offinformationSlider = new Swiper(".offinformation-slider", {
                spaceBetween: 24,
                speed: 2000,
                loop: true,
                centeredSlides: true,
                autoplay: {
                    delay: 2000,
                    // disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination-cus",
                    type: "fraction",
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 3.8,
                    },
                    991: {
                        slidesPerView: 2.2,
                    },
                    767: {
                        slidesPerView: 1.5,
                    },
                    575: {
                        slidesPerView: 1.4,
                    },
                    400: {
                        slidesPerView: 1.2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });

            //<< 14 >> city-slider-wrap Start <<//
            const citySliderWrap = new Swiper(".city-slider-wrap", {
                spaceBetween: 0,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 2000,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 3,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    400: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });

            //<< 15 >> city-slider-wrap2 Start <<//
            const citySliderWrap2 = new Swiper(".city-slider-wrap2", {
                spaceBetween: 24,
                speed: 2000,
                loop: true,
                centeredSlides: true,
                autoplay: {
                    delay: 2000,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 2.8,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 14,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 14,
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 14,
                    },
                    400: {
                        slidesPerView: 2,
                        spaceBetween: 14,
                    },
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 14,
                    },
                },
            });

            //<< 16 >> Brand Slider Start <<//
            if ($(".brand-slider").length > 0) {
                const brandSlider = new Swiper(".brand-slider", {
                    spaceBetween: 30,
                    speed: 2000,
                    loop: true,
                    centeredSlides: true,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false,
                    },
                    breakpoints: {
                        1199: {
                            slidesPerView: 7,
                        },
                        991: {
                            slidesPerView: 6,
                        },
                        767: {
                            slidesPerView: 5,
                        },
                        575: {
                            slidesPerView: 4,
                        },
                        400: {
                            slidesPerView: 3,
                        },
                        0: {
                            slidesPerView: 2,
                        },
                    },
                });
            }

            //<< 17 >> Project Slider Start <<//
            if ($(".project-slider").length > 0) {
                const projectSlider = new Swiper(".project-slider", {
                    spaceBetween: 30,
                    speed: 2000,
                    loop: true,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false,
                    },
                    navigation: {
                        nextEl: ".array-prev",
                        prevEl: ".array-next",
                    },
                    breakpoints: {
                        1199: {
                            slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 3,
                        },
                        767: {
                            slidesPerView: 3,
                        },
                        575: {
                            slidesPerView: 2,
                        },
                        400: {
                            slidesPerView: 1,
                        },
                        0: {
                            slidesPerView: 1,
                        },
                    },
                });
            }

            //<< 18 >> Project Slider Start <<//
            if ($(".project-slider-2").length > 0) {
                const projectSlider2 = new Swiper(".project-slider-2", {
                    spaceBetween: 30,
                    speed: 2000,
                    loop: true,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false,
                    },
                    navigation: {
                        nextEl: ".array-prev",
                        prevEl: ".array-next",
                    },
                    breakpoints: {
                        1199: {
                            slidesPerView: 4,
                        },
                        991: {
                            slidesPerView: 3,
                        },
                        767: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 1,
                        },
                        400: {
                            slidesPerView: 1,
                        },
                        0: {
                            slidesPerView: 1,
                        },
                    },
                });
            }

            //<< 19 >> Testimonial Slider Start <<//
            if ($(".testimonial-slider-2").length > 0) {
                const testimonialSlider2 = new Swiper(".testimonial-slider-2", {
                    spaceBetween: 30,
                    speed: 1000,
                    loop: true,
                    autoplay: {
                        delay: 1000,
                        disableOnInteraction: false,
                    },
                    navigation: {
                        nextEl: ".array-prev",
                        prevEl: ".array-next",
                    },
                    breakpoints: {
                        991: {
                            slidesPerView: 2,
                        },
                        767: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 1,
                        },
                        400: {
                            slidesPerView: 1,
                        },
                        0: {
                            slidesPerView: 1,
                        },
                    },
                });
            }
        } catch (e) { console.log('Swiper not loaded:', e.message); }

        //<< 20 >> Progress Bar Js Start <<//
        if (typeof $.fn.waypoint === 'function') {
            $(".progress-bar").waypoint(
                function () {
                    $(".progress-bar").css({
                        animation: "animate-positive 2.6s",
                        opacity: "1",
                    });
                },
                { offset: "75%" }
            );
        }

        //<< 21 >> Back To Top Slider Start <<//
        $(window).scroll(function () {
            if ($(this).scrollTop() > 20) {
                $("#back-top").addClass("show");
            } else {
                $("#back-top").removeClass("show");
            }
        });
        $("#back-top").on("click", function () {
            $("html, body").animate({ scrollTop: 0 }, 800);
            return false;
        });
    }); // End Document Ready Function

    //<< 22 >> Price Range Slideer
    document.addEventListener("DOMContentLoaded", function () {
        const minSlider = document.getElementById("min-slider");
        const maxSlider = document.getElementById("max-slider");
        const amount = document.getElementById("amount");

        function updateAmount() {
            const minValue = parseInt(minSlider.value, 10);
            const maxValue = parseInt(maxSlider.value, 10);

            // Ensure the minimum value is always lower than the maximum value
            if (minValue > maxValue) {
                minSlider.value = maxValue;
            }

            // Update the displayed price range
            amount.value = "$" + minSlider.value + " - $" + maxSlider.value;

            // Calculate the percentage positions of the sliders
            const minPercent =
                ((minSlider.value - minSlider.min) /
                    (minSlider.max - minSlider.min)) *
                100;
            const maxPercent =
                ((maxSlider.value - maxSlider.min) /
                    (maxSlider.max - maxSlider.min)) *
                100;

            // Update the background gradient to show the active track color
            minSlider.style.background = `linear-gradient(to right, #000 ${minPercent}%, #000 ${minPercent}%, #000 ${maxPercent}%, #000 ${maxPercent}%)`;
            maxSlider.style.background = `linear-gradient(to right, #000 ${minPercent}%, #000 ${minPercent}%, #000 ${maxPercent}%, #000 ${maxPercent}%)`;
        }

        // Initialize the sliders and track with default values
        amount && updateAmount();

        // if (minSlider && maxSlider) {

        // Add event listeners for both sliders
        minSlider && minSlider.addEventListener("input", updateAmount);
        maxSlider && maxSlider.addEventListener("input", updateAmount);
        // }
    });
    document.addEventListener("DOMContentLoaded", function () {
        const bookingForm = document.querySelector("#booking-form");

        if (bookingForm) {
            bookingForm.addEventListener("submit", function (e) {
                e.preventDefault();

                const checkIn = bookingForm.querySelector("#check-in").value;
                const checkOut = bookingForm.querySelector("#check-out").value;
                const adults = bookingForm.querySelector("#adults").value;
                const children = bookingForm.querySelector("#children").value;

                // Validate dates
                if (!checkIn || !checkOut) {
                    alert("Please select both check-in and check-out dates.");
                    return;
                }

                // Ensure check-out is after check-in
                if (new Date(checkOut) <= new Date(checkIn)) {
                    alert("Check-out date must be after check-in date.");
                    return;
                }

                alert(`Booking Details:
                Check-in: ${checkIn}
                Check-out: ${checkOut}
                Adults: ${adults}
                Children: ${children}`);
            });
        }
    });

    //<< 23 >> quntity increment and decrement
    $(document).on("click", ".quantityIncrement", function () {
        const input = $(this).siblings("input");
        input.val(parseInt(input.val(), 10) + 1);
    });
    $(document).on("click", ".quantityDecrement", function () {
        const input = $(this).siblings("input");
        const currentVal = parseInt(input.val(), 10);
        if (currentVal > 1) input.val(currentVal - 1);
    });

    //<< 24 >> Preloader
    function loader() {
        $(window).on("load", function () {
            // Animate loader off screen
            $(".preloader").addClass("loaded");
            $(".preloader").delay(600).fadeOut();
        });
    }

    $(document).ready(function () {
        // When accordion opens
        $(".accordion-collapse").on("show.bs.collapse", function () {
            $(this).closest(".accordion-item").addClass("active");
        });

        // When accordion closes
        $(".accordion-collapse").on("hide.bs.collapse", function () {
            $(this).closest(".accordion-item").removeClass("active");
        });

        // On page load: check if any item is already open
        $(".accordion-collapse.show").each(function () {
            $(this).closest(".accordion-item").addClass("active");
        });
    });

    loader();
})(jQuery); // End jQuery

/* ========================================
   FREEZE FEAST - Custom JavaScript
======================================== */

document.addEventListener('DOMContentLoaded', function () {

    // ========================================
    // Header Search Icon - Scroll to Products Section
    // ========================================
    const headerSearchBtn = document.getElementById('headerSearchBtn');
    const productsSection = document.querySelector('.ff-products');

    if (headerSearchBtn && productsSection) {
        headerSearchBtn.addEventListener('click', function () {
            const elementPosition = productsSection.offsetTop;
            const offset = 100; // space from top

            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        });
    }

    // ========================================
    // Product List Page - Search Functionality
    // ========================================
    const productSearchInput = document.getElementById('productSearchInput');

    if (productSearchInput) {
        productSearchInput.addEventListener('input', function () {
            const searchTerm = this.value.toLowerCase().trim();
            const productCards = document.querySelectorAll('#productsGrid .ff-product-card');
            let visibleCount = 0;

            productCards.forEach(function (card) {
                const productName = card.querySelector('.ff-product-name');
                if (productName) {
                    const name = productName.textContent.toLowerCase();

                    if (name.includes(searchTerm)) {
                        card.style.display = '';
                        visibleCount++;
                    } else {
                        card.style.display = 'none';
                    }
                }
            });

            // Update results count
            const resultsText = document.querySelector('.ff-results-text');
            if (resultsText) {
                const totalCount = productCards.length;
                if (searchTerm === '') {
                    resultsText.textContent = 'Showing 1–' + totalCount + ' of ' + totalCount + ' results';
                } else {
                    resultsText.textContent = 'Showing ' + visibleCount + ' of ' + totalCount + ' results';
                }
            }
        });
    }

    // ========================================
    // Category Scroll Controls
    // ========================================
    const categoryScroll = document.getElementById('categoryScroll');
    const scrollLeftBtn = document.getElementById('categoryScrollLeft');
    const scrollRightBtn = document.getElementById('categoryScrollRight');

    if (categoryScroll && scrollLeftBtn && scrollRightBtn) {
        const scrollWrapper = categoryScroll.parentElement;
        const scrollAmount = 300;

        function updateScrollButtons() {
            const isAtStart = categoryScroll.scrollLeft <= 0;
            const isAtEnd = categoryScroll.scrollLeft >= (categoryScroll.scrollWidth - categoryScroll.clientWidth - 5);

            scrollLeftBtn.disabled = isAtStart;
            scrollRightBtn.disabled = isAtEnd;

            if (categoryScroll.scrollLeft > 0) {
                scrollWrapper.classList.add('scrolled-left');
            } else {
                scrollWrapper.classList.remove('scrolled-left');
            }

            if (isAtEnd) {
                scrollWrapper.classList.add('scrolled-end');
            } else {
                scrollWrapper.classList.remove('scrolled-end');
            }
        }

        scrollLeftBtn.addEventListener('click', function () {
            categoryScroll.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        scrollRightBtn.addEventListener('click', function () {
            categoryScroll.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        categoryScroll.addEventListener('scroll', updateScrollButtons);
        window.addEventListener('resize', updateScrollButtons);
        updateScrollButtons();
    }

    // ========================================
    // Feature Products
    // ========================================
    const featureScroll = document.getElementById('featureScroll');
    const featureLeftBtn = document.getElementById('featureScrollLeft');
    const featureRightBtn = document.getElementById('featureScrollRight');

    if (featureScroll && featureLeftBtn && featureRightBtn) {
        const scrollWrapper = featureScroll.parentElement;
        const scrollAmount = 300;

        function updateScrollButtons() {
            const isAtStart = featureScroll.scrollLeft <= 0;
            const isAtEnd = featureScroll.scrollLeft >= (featureScroll.scrollWidth - featureScroll.clientWidth - 5);

            featureLeftBtn.disabled = isAtStart;
            featureRightBtn.disabled = isAtEnd;
        }

        featureLeftBtn.addEventListener('click', function () {
            featureScroll.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        featureRightBtn.addEventListener('click', function () {
            featureScroll.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        featureScroll.addEventListener('scroll', updateScrollButtons);
        window.addEventListener('resize', updateScrollButtons);
        updateScrollButtons();
    }

    // ========================================
    // Quantity Control
    // ========================================
    function initQuantityControls() {
        document.querySelectorAll('.ff-qty-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                const control = this.closest('.ff-quantity-control');
                const valueEl = control.querySelector('.ff-qty-value');
                let value = parseInt(valueEl.textContent);

                if (this.classList.contains('plus')) {
                    value++;
                } else if (this.classList.contains('minus') && value > 0) {
                    value--;
                }

                valueEl.textContent = value;
            });
        });
    }

    initQuantityControls();

    // ========================================
    // Add to Cart Button
    // ========================================
    document.querySelectorAll('.ff-add-cart-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const footer = this.closest('.ff-product-footer');

            this.outerHTML = `
                <div class="ff-quantity-control" data-in-cart="true">
                    <button class="ff-qty-btn minus"><i class="fa-solid fa-minus"></i></button>
                    <span class="ff-qty-value">1</span>
                    <button class="ff-qty-btn plus"><i class="fa-solid fa-plus"></i></button>
                </div>
            `;

            // Rebind events for new quantity control
            footer.querySelectorAll('.ff-qty-btn').forEach(function (qtyBtn) {
                qtyBtn.addEventListener('click', function () {
                    const control = this.closest('.ff-quantity-control');
                    const valueEl = control.querySelector('.ff-qty-value');
                    let value = parseInt(valueEl.textContent);

                    if (this.classList.contains('plus')) {
                        value++;
                    } else if (this.classList.contains('minus') && value > 0) {
                        value--;
                    }

                    valueEl.textContent = value;
                });
            });
        });
    });

    // ========================================
    // Password Toggle (Login & Register Pages)
    // ========================================

    // Handle single toggle button (login page - backward compatibility)
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            // Toggle icon
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-eye');
            icon.classList.toggle('fa-eye-slash');
        });
    }

    // Handle multiple password toggle buttons (register page)
    document.querySelectorAll('.password-toggle[data-target]').forEach(function (toggleBtn) {
        toggleBtn.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetInput = document.getElementById(targetId);

            if (targetInput) {
                const type = targetInput.getAttribute('type') === 'password' ? 'text' : 'password';
                targetInput.setAttribute('type', type);

                // Toggle icon
                const icon = this.querySelector('i');
                icon.classList.toggle('fa-eye');
                icon.classList.toggle('fa-eye-slash');
            }
        });
    });

    // ========================================
    // Product Detail Page - Gallery Slider
    // ========================================
    if (document.querySelector('.ff-gallery-slider')) {
        const galleryThumbs = new Swiper('.ff-thumbs-slider', {
            spaceBetween: 12,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
        });

        const galleryMain = new Swiper('.ff-gallery-slider', {
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs,
            },
        });
    }

    // ========================================
    // Product Detail Page - Quantity Selector
    // ========================================
    const qtyMinus = document.querySelector('.ff-qty-minus');
    const qtyPlus = document.querySelector('.ff-qty-plus');
    const qtyInput = document.querySelector('.ff-qty-input');

    if (qtyMinus && qtyPlus && qtyInput) {
        qtyMinus.addEventListener('click', function () {
            let value = parseInt(qtyInput.value);
            if (value > 1) {
                qtyInput.value = value - 1;
            }
        });

        qtyPlus.addEventListener('click', function () {
            let value = parseInt(qtyInput.value);
            if (value < 99) {
                qtyInput.value = value + 1;
            }
        });

        qtyInput.addEventListener('change', function () {
            let value = parseInt(this.value);
            if (isNaN(value) || value < 1) {
                this.value = 1;
            } else if (value > 99) {
                this.value = 99;
            }
        });
    }

    // ========================================
    // Product Detail Page - Tabs
    // ========================================
    const tabBtns = document.querySelectorAll('.ff-tab-btn');
    const tabPanes = document.querySelectorAll('.ff-tab-pane');

    tabBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');

            // Remove active from all buttons
            tabBtns.forEach(function (b) {
                b.classList.remove('active');
            });

            // Remove active from all panes
            tabPanes.forEach(function (p) {
                p.classList.remove('active');
            });

            // Add active to clicked button
            this.classList.add('active');

            // Add active to corresponding pane
            const targetPane = document.getElementById(tabId);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // ========================================
    // Product Detail Page - Rating Selection
    // ========================================
    const ratingStars = document.querySelectorAll('.ff-rating-select i');
    let selectedRating = 0;

    ratingStars.forEach(function (star, index) {
        star.addEventListener('mouseenter', function () {
            highlightStars(index + 1);
        });

        star.addEventListener('mouseleave', function () {
            highlightStars(selectedRating);
        });

        star.addEventListener('click', function () {
            selectedRating = index + 1;
            highlightStars(selectedRating);
        });
    });

    function highlightStars(count) {
        ratingStars.forEach(function (star, index) {
            if (index < count) {
                star.classList.remove('fa-regular');
                star.classList.add('fa-solid', 'active');
            } else {
                star.classList.remove('fa-solid', 'active');
                star.classList.add('fa-regular');
            }
        });
    }

    // ========================================
    // Product List Page - Dual Handle Price Range Slider
    // ========================================
    const rangeMin = document.querySelector('.ff-range-min');
    const rangeMax = document.querySelector('.ff-range-max');
    const rangeProgress = document.querySelector('.ff-range-progress');
    const priceMinLabel = document.querySelector('.ff-price-min');
    const priceMaxLabel = document.querySelector('.ff-price-max');

    if (rangeMin && rangeMax && rangeProgress) {
        const minPriceValue = 5;
        const maxPriceValue = 100;
        const priceGap = 5; // Minimum gap between min and max

        function updateDualRange() {
            let minVal = parseInt(rangeMin.value);
            let maxVal = parseInt(rangeMax.value);

            // Ensure min doesn't exceed max - gap
            if (maxVal - minVal < priceGap) {
                if (this === rangeMin) {
                    rangeMin.value = maxVal - priceGap;
                    minVal = maxVal - priceGap;
                } else {
                    rangeMax.value = minVal + priceGap;
                    maxVal = minVal + priceGap;
                }
            }

            // Calculate actual prices
            const actualMinPrice = Math.round(minPriceValue + (maxPriceValue - minPriceValue) * (minVal / 100));
            const actualMaxPrice = Math.round(minPriceValue + (maxPriceValue - minPriceValue) * (maxVal / 100));

            // Update price labels
            if (priceMinLabel) priceMinLabel.textContent = '$' + actualMinPrice;
            if (priceMaxLabel) priceMaxLabel.textContent = '$' + actualMaxPrice;

            // Update progress bar position
            rangeProgress.style.left = minVal + '%';
            rangeProgress.style.right = (100 - maxVal) + '%';
        }

        // Initialize
        updateDualRange.call(rangeMin);

        // Add event listeners
        rangeMin.addEventListener('input', updateDualRange);
        rangeMax.addEventListener('input', updateDualRange);

        // Touch support
        [rangeMin, rangeMax].forEach(function (slider) {
            slider.addEventListener('touchstart', function (e) {
                e.stopPropagation();
            }, { passive: true });

            slider.addEventListener('touchmove', function (e) {
                e.stopPropagation();
            }, { passive: true });
        });
    }

    // Legacy single slider support
    const priceRangeSlider = document.querySelector('.ff-range-slider');
    const priceLabel = document.querySelector('.ff-price-label');

    if (priceRangeSlider && priceLabel) {
        const minPrice = 5;
        const maxPrice = 50;

        function updatePriceRange() {
            const value = priceRangeSlider.value;
            const percentage = value;
            const currentPrice = Math.round(minPrice + (maxPrice - minPrice) * (value / 100));

            // Update label
            priceLabel.textContent = 'Price: $' + minPrice + ' - $' + currentPrice;

            // Update slider track fill
            priceRangeSlider.style.background = `linear-gradient(to right, var(--ff-primary) ${percentage}%, var(--ff-border) ${percentage}%)`;
        }

        // Initialize
        updatePriceRange();

        // Add event listeners for all input types
        priceRangeSlider.addEventListener('input', updatePriceRange);
        priceRangeSlider.addEventListener('change', updatePriceRange);

        // Fix for touch devices and after scroll
        priceRangeSlider.addEventListener('touchstart', function (e) {
            e.stopPropagation();
        }, { passive: true });

        priceRangeSlider.addEventListener('touchmove', function (e) {
            e.stopPropagation();
        }, { passive: true });
    }

    // ========================================
    // Cart Page Functionality
    // ========================================

    // Quantity Controls
    const cartQuantityBtns = document.querySelectorAll('.ff-cart-qty-btn');

    cartQuantityBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const input = this.parentElement.querySelector('.ff-cart-qty-input');
            let value = parseInt(input.value) || 1;

            if (this.classList.contains('minus')) {
                if (value > 1) value--;
            } else if (this.classList.contains('plus')) {
                if (value < 99) value++;
            }

            input.value = value;
            updateCartTotals();
        });
    });

    // Quantity Input Change
    const cartQuantityInputs = document.querySelectorAll('.ff-cart-qty-input');

    cartQuantityInputs.forEach(input => {
        input.addEventListener('change', function () {
            let value = parseInt(this.value) || 1;
            if (value < 1) value = 1;
            if (value > 99) value = 99;
            this.value = value;
            updateCartTotals();
        });
    });

    // Remove Cart Item
    const removeButtons = document.querySelectorAll('.ff-cart-remove');

    removeButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const row = this.closest('tr');

            row.style.opacity = '0';
            row.style.transform = 'translateX(-20px)';
            row.style.transition = 'all 0.3s ease';

            setTimeout(() => {
                row.remove();
                updateCartTotals();
                checkEmptyCart();
            }, 300);
        });
    });

    // Update Cart Totals
    function updateCartTotals() {
        const rows = document.querySelectorAll('.ff-cart-table tbody tr');
        let subtotal = 0;

        rows.forEach(row => {
            const priceEl = row.querySelector('.ff-cart-price');
            const qtyInput = row.querySelector('.ff-cart-qty-input');
            const subtotalEl = row.querySelector('.ff-cart-subtotal');

            if (priceEl && qtyInput && subtotalEl) {
                const price = parseFloat(priceEl.textContent.replace('$', '')) || 0;
                const qty = parseInt(qtyInput.value) || 1;
                const itemSubtotal = price * qty;

                subtotalEl.textContent = '$' + itemSubtotal.toFixed(2);
                subtotal += itemSubtotal;
            }
        });

        const subtotalEl = document.querySelector('.ff-summary-subtotal');
        const totalEl = document.querySelector('.ff-summary-total');
        const discountEl = document.querySelector('.ff-discount');

        if (subtotalEl) {
            subtotalEl.textContent = '$' + subtotal.toFixed(2);
        }

        const discount = discountEl ? parseFloat(discountEl.textContent.replace('-$', '')) || 0 : 0;
        const delivery = 2.00;
        const tax = subtotal * 0.08;
        const total = subtotal - discount + delivery + tax;

        if (totalEl) {
            totalEl.textContent = '$' + total.toFixed(2);
        }

        const cartCount = document.querySelector('.ff-cart-count');
        if (cartCount) {
            cartCount.textContent = rows.length;
        }
    }

    // Check if cart is empty
    function checkEmptyCart() {
        const rows = document.querySelectorAll('.ff-cart-table tbody tr');
        const tableWrapper = document.querySelector('.ff-cart-table-wrapper');

        if (rows.length === 0 && tableWrapper) {
            tableWrapper.innerHTML = `
                <div class="ff-empty-cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <h3>Your Cart is Empty</h3>
                    <p>Looks like you haven't added anything to your cart yet.</p>
                    <a href="product-list.html" class="ff-btn-shop">
                        <i class="fa-solid fa-arrow-left"></i>
                        Continue Shopping
                    </a>
                </div>
            `;
        }
    }

    // Coupon Code Application
    const couponBtn = document.querySelector('.ff-btn-coupon');
    const couponInput = document.querySelector('.ff-coupon-input');

    if (couponBtn && couponInput) {
        couponBtn.addEventListener('click', function () {
            const code = couponInput.value.trim().toUpperCase();

            if (code === '') {
                showNotification('Please enter a coupon code', 'error');
                return;
            }

            const validCoupons = {
                'SAVE10': 10,
                'SAVE20': 20,
                'FREEZE25': 25
            };

            if (validCoupons[code]) {
                const discount = validCoupons[code];
                showNotification('Coupon applied! You saved $' + discount, 'success');

                const discountEl = document.querySelector('.ff-discount');
                if (discountEl) {
                    discountEl.textContent = '-$' + discount.toFixed(2);
                }

                updateCartTotals();
                couponBtn.textContent = 'Applied!';
                couponBtn.disabled = true;
                couponInput.disabled = true;
            } else {
                showNotification('Invalid coupon code', 'error');
            }
        });
    }

    // Payment Method Selection
    const paymentIcons = document.querySelectorAll('.ff-payment-icon');

    paymentIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            paymentIcons.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Checkout Button
    const checkoutBtn = document.querySelector('.ff-btn-checkout');

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function () {
            const rows = document.querySelectorAll('.ff-cart-table tbody tr');

            if (rows.length === 0) {
                showNotification('Your cart is empty', 'error');
                return;
            }

            this.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
            this.disabled = true;

            setTimeout(() => {
                showNotification('Redirecting to checkout...', 'success');
            }, 1500);
        });
    }

    // Cancel Order Button
    const cancelBtn = document.querySelector('.ff-btn-cancel');

    if (cancelBtn) {
        cancelBtn.addEventListener('click', function () {
            if (confirm('Are you sure you want to cancel your order?')) {
                const rows = document.querySelectorAll('.ff-cart-table tbody tr');
                rows.forEach(row => row.remove());
                checkEmptyCart();
                showNotification('Order cancelled', 'info');
            }
        });
    }

    // Notification Helper
    function showNotification(message, type) {
        type = type || 'info';
        const existing = document.querySelector('.ff-notification');
        if (existing) existing.remove();

        const notification = document.createElement('div');
        notification.className = 'ff-notification ff-notification-' + type;
        notification.innerHTML = '<i class="fa-solid ' + (type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle') + '"></i><span>' + message + '</span>';

        notification.style.cssText = 'position: fixed; top: 100px; right: 20px; background: ' + (type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#0066FF') + '; color: white; padding: 16px 24px; border-radius: 12px; display: flex; align-items: center; gap: 12px; font-weight: 600; font-size: 14px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); z-index: 9999; animation: slideIn 0.3s ease;';

        document.body.appendChild(notification);

        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = '@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }';
            document.head.appendChild(style);
        }

        setTimeout(() => {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Initialize cart totals
    if (document.querySelector('.ff-cart-table')) {
        updateCartTotals();
    }

    // ========================================
    // About Page - Counter Animation
    // ========================================

    const statNumbers = document.querySelectorAll('.ff-stat-number');

    if (statNumbers.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(stat => {
            counterObserver.observe(stat);
        });

        function animateCounter(element) {
            const target = parseInt(element.getAttribute('data-count')) || parseInt(element.textContent);
            const duration = 2000;
            const start = 0;
            const startTime = performance.now();

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const current = Math.floor(start + (target - start) * easeOutQuart);

                element.textContent = current + (element.getAttribute('data-suffix') || '');

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target + (element.getAttribute('data-suffix') || '');
                }
            }

            requestAnimationFrame(updateCounter);
        }
    }

    // ========================================
    // Contact Page - FAQ Accordion
    // ========================================

    const faqQuestions = document.querySelectorAll('.ff-faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Close all FAQ items
            document.querySelectorAll('.ff-faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });

    // ========================================
    // Contact Page - Form Validation
    // ========================================

    const contactForm = document.querySelector('.ff-contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = this.querySelector('input[placeholder="Your Name"]');
            const email = this.querySelector('input[placeholder="Email Address"]');
            const message = this.querySelector('textarea');

            let isValid = true;

            if (name && name.value.trim() === '') {
                isValid = false;
                name.style.borderColor = '#EF4444';
            } else if (name) {
                name.style.borderColor = '';
            }

            if (email && !isValidEmail(email.value)) {
                isValid = false;
                email.style.borderColor = '#EF4444';
            } else if (email) {
                email.style.borderColor = '';
            }

            if (message && message.value.trim() === '') {
                isValid = false;
                message.style.borderColor = '#EF4444';
            } else if (message) {
                message.style.borderColor = '';
            }

            if (isValid) {
                showNotification('Message sent successfully!', 'success');
                this.reset();
            } else {
                showNotification('Please fill in all required fields', 'error');
            }
        });
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // ========================================
    // Product Variant Options Handler
    // ========================================

    const productVariants = document.getElementById('productVariants');

    if (productVariants) {
        // Check if URL has options=true parameter
        const urlParams = new URLSearchParams(window.location.search);
        const hasOptions = urlParams.get('options') === 'true';
        

        if (!hasOptions) {
            // Hide variants section if product doesn't have options
            productVariants.style.display = 'none';
            $('.ff-product-quantity').show();
        }else{
            $('.ff-product-quantity').hide();
        }

        // Clear options button handler
        const clearBtn = document.getElementById('clearOptions');
        if (clearBtn) {
            clearBtn.addEventListener('click', function () {
                const flavorSelect = document.getElementById('flavorSelect');
                const sizeSelect = document.getElementById('sizeSelect');

                if (flavorSelect) flavorSelect.selectedIndex = 0;
                if (sizeSelect) sizeSelect.selectedIndex = 0;
            });
        }
    }

    // ========================================
    // User Authentication & Profile Dropdown
    // ========================================

    const loginLink = document.getElementById('loginLink');
    const userDropdown = document.getElementById('userDropdown');
    const userBtn = document.getElementById('userBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const logoutBtn = document.getElementById('logoutBtn');

    // Check login state on page load
    function checkLoginState() {
        const isLoggedIn = localStorage.getItem('ff_logged_in') === 'true';

        if (loginLink && userDropdown) {
            if (isLoggedIn) {
                loginLink.style.display = 'none';
                userDropdown.style.display = 'block';
            } else {
                loginLink.style.display = 'block';
                userDropdown.style.display = 'none';
            }
        }
    }

    // Initialize login state check
    checkLoginState();

    // Toggle dropdown menu
    if (userBtn) {
        userBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            const dropdown = this.closest('.ff-user-dropdown');
            if (dropdown) {
                dropdown.classList.toggle('active');
            }
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (userDropdown && !userDropdown.contains(e.target)) {
            userDropdown.classList.remove('active');
        }
    });

    // Logout functionality
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
            localStorage.removeItem('ff_logged_in');
            localStorage.removeItem('ff_user_email');
            window.location.href = 'login.html';
        });
    }

    // ========================================
    // CART PAGE FUNCTIONALITY
    // ========================================

    // Quantity Controls
    document.querySelectorAll('.ff-qty-controls .ff-qty-btn.minus').forEach(btn => {
        btn.addEventListener('click', function () {
            const qtyValue = this.closest('.ff-qty-controls').querySelector('.ff-qty-value');
            if (qtyValue) {
                let qty = parseInt(qtyValue.textContent);
                if (qty > 1) {
                    qtyValue.textContent = qty - 1;
                }
            }
        });
    });

    document.querySelectorAll('.ff-qty-controls .ff-qty-btn.plus').forEach(btn => {
        btn.addEventListener('click', function () {
            const qtyValue = this.closest('.ff-qty-controls').querySelector('.ff-qty-value');
            if (qtyValue) {
                let qty = parseInt(qtyValue.textContent);
                qtyValue.textContent = qty + 1;
            }
        });
    });

    // Delivery Option Toggle
    document.querySelectorAll('.ff-delivery-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.ff-delivery-btn').forEach(b => {
                b.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Payment Option Toggle
    document.querySelectorAll('.ff-payment-option').forEach(option => {
        option.addEventListener('click', function () {
            document.querySelectorAll('.ff-payment-option').forEach(o => {
                o.classList.remove('active');
            });
            this.classList.add('active');
            const radio = this.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
            }
        });
    });

    // Remove Cart Item
    document.querySelectorAll('.ff-remove-item').forEach(btn => {
        btn.addEventListener('click', function () {
            const cartItem = this.closest('.ff-cart-item');
            if (cartItem) {
                cartItem.remove();
            }
        });
    });

    // ========================================
    // PROFILE PAGE FUNCTIONALITY
    // ========================================

    // Avatar Upload Preview
    const avatarUpload = document.getElementById('avatarUpload');
    const avatarPreview = document.getElementById('avatarPreview');

    if (avatarUpload && avatarPreview) {
        avatarUpload.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    avatarPreview.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Load saved profile data
    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
        const savedProfile = localStorage.getItem('ff_user_profile');
        if (savedProfile) {
            const profile = JSON.parse(savedProfile);
            const firstNameInput = document.getElementById('firstName');
            const lastNameInput = document.getElementById('lastName');
            const emailInput = document.getElementById('email');
            const phoneInput = document.getElementById('phone');
            const cityInput = document.getElementById('city');
            const postcodeInput = document.getElementById('postcode');
            const addressInput = document.getElementById('address');

            if (firstNameInput) firstNameInput.value = profile.firstName || '';
            if (lastNameInput) lastNameInput.value = profile.lastName || '';
            if (emailInput) emailInput.value = profile.email || localStorage.getItem('ff_user_email') || '';
            if (phoneInput) phoneInput.value = profile.phone || '';
            if (cityInput) cityInput.value = profile.city || '';
            if (postcodeInput) postcodeInput.value = profile.postcode || '';
            if (addressInput) addressInput.value = profile.address || '';
        } else {
            // Pre-fill email from login
            const userEmail = localStorage.getItem('ff_user_email');
            const emailInput = document.getElementById('email');
            if (userEmail && emailInput) {
                emailInput.value = userEmail;
            }
        }

        // Profile Form Submit
        profileForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const profile = {
                firstName: document.getElementById('firstName')?.value || '',
                lastName: document.getElementById('lastName')?.value || '',
                email: document.getElementById('email')?.value || '',
                phone: document.getElementById('phone')?.value || '',
                city: document.getElementById('city')?.value || '',
                postcode: document.getElementById('postcode')?.value || '',
                address: document.getElementById('address')?.value || ''
            };

            localStorage.setItem('ff_user_profile', JSON.stringify(profile));

            // Show success message
            alert('Profile saved successfully!');
        });
    }

    // Redirect to login if on profile page and not logged in
    if (document.querySelector('.ff-profile-section')) {
        const isLoggedIn = localStorage.getItem('ff_logged_in') === 'true';
        if (!isLoggedIn) {
            window.location.href = 'login.html';
        }
    }

    // ========================================
    // FORGOT PASSWORD FORM HANDLER
    // ========================================
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = document.getElementById('email').value;

            if (email) {
                // Show the modal
                const emailSentModal = new bootstrap.Modal(document.getElementById('emailSentModal'));
                emailSentModal.show();
            }
        });
    }

    // ========================================
    // LOGIN FORM HANDLER - Handled by inline script on login.html
    // ========================================

    // ========================================
    // SHIPPING ADDRESS PAGE HANDLERS
    // ========================================

    // Check if we're on the shipping address page
    if (document.querySelector('.ff-shipping-address-section')) {
        const isLoggedIn = localStorage.getItem('ff_logged_in') === 'true';
        if (!isLoggedIn) {
            window.location.href = 'login.html';
        }

        let editingAddressId = null;
        let deletingAddressId = null;

        // Helper function to format address for display
        function formatAddressForDisplay(formData) {
            let addressParts = [];
            if (formData.streetAddress) addressParts.push(formData.streetAddress);
            if (formData.apartment) addressParts.push(formData.apartment);

            let locationParts = [];
            if (formData.city) locationParts.push(formData.city);
            if (formData.province) locationParts.push(formData.province);

            let fullAddress = addressParts.join(', ');
            if (locationParts.length > 0) {
                fullAddress += ' - ' + locationParts.join(', ');
            }
            if (formData.postcode) {
                fullAddress += ' / ' + formData.postcode;
            }

            return fullAddress;
        }

        // Helper function to attach event listeners to address card buttons
        function attachCardEventListeners(card) {
            card.querySelector('.ff-edit-address-btn').addEventListener('click', function () {
                const cardEl = this.closest('.ff-address-card');
                editingAddressId = cardEl.dataset.addressId;

                document.getElementById('addAddressModalLabel').textContent = 'Edit Shipping Address';
                document.querySelector('.ff-save-btn').textContent = 'Update Address';
                document.getElementById('fullName').value = cardEl.querySelector('.ff-address-name').textContent;

                const modal = new bootstrap.Modal(document.getElementById('addAddressModal'));
                modal.show();
            });

            card.querySelector('.ff-delete-address-btn').addEventListener('click', function () {
                const cardEl = this.closest('.ff-address-card');
                deletingAddressId = cardEl.dataset.addressId;
                const modal = new bootstrap.Modal(document.getElementById('deleteConfirmModal'));
                modal.show();
            });
        }

        // Edit Address Button Handler
        const editBtns = document.querySelectorAll('.ff-edit-address-btn');
        editBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                const card = this.closest('.ff-address-card');
                editingAddressId = card.dataset.addressId;

                // Update modal title and button
                document.getElementById('addAddressModalLabel').textContent = 'Edit Shipping Address';
                document.querySelector('.ff-save-btn').textContent = 'Update Address';

                // Fill form with current values
                document.getElementById('fullName').value = card.querySelector('.ff-address-name').textContent;

                // Show modal
                const modal = new bootstrap.Modal(document.getElementById('addAddressModal'));
                modal.show();
            });
        });

        // Delete Address Button Handler
        const deleteBtns = document.querySelectorAll('.ff-delete-address-btn');
        deleteBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                const card = this.closest('.ff-address-card');
                deletingAddressId = card.dataset.addressId;

                // Show confirmation modal
                const modal = new bootstrap.Modal(document.getElementById('deleteConfirmModal'));
                modal.show();
            });
        });

        // Confirm Delete Handler
        const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
        if (confirmDeleteBtn) {
            confirmDeleteBtn.addEventListener('click', function () {
                if (deletingAddressId) {
                    const card = document.querySelector('.ff-address-card[data-address-id="' + deletingAddressId + '"]');
                    if (card) {
                        card.style.animation = 'fadeOut 0.3s ease forwards';
                        setTimeout(() => {
                            card.remove();
                        }, 300);
                    }

                    // Close modal
                    const modal = bootstrap.Modal.getInstance(document.getElementById('deleteConfirmModal'));
                    modal.hide();
                    deletingAddressId = null;
                }
            });
        }

        // Add Address Modal - Reset on close
        const addAddressModal = document.getElementById('addAddressModal');
        if (addAddressModal) {
            addAddressModal.addEventListener('hidden.bs.modal', function () {
                document.getElementById('addAddressModalLabel').textContent = 'Shipping Address';
                document.querySelector('.ff-save-btn').textContent = 'Add Shipping Address';
                document.getElementById('addressForm').reset();
                editingAddressId = null;
            });
        }

        // Address Form Submit Handler
        const addressForm = document.getElementById('addressForm');
        if (addressForm) {
            addressForm.addEventListener('submit', function (e) {
                e.preventDefault();

                const formData = {
                    fullName: document.getElementById('fullName').value,
                    country: document.getElementById('country').value,
                    streetAddress: document.getElementById('streetAddress').value,
                    apartment: document.getElementById('apartment').value,
                    city: document.getElementById('city').value,
                    province: document.getElementById('province').value,
                    postcode: document.getElementById('postcode').value
                };

                const formattedAddress = formatAddressForDisplay(formData);

                // Get country and province text
                const countrySelect = document.getElementById('country');
                const provinceSelect = document.getElementById('province');
                const countryText = countrySelect.options[countrySelect.selectedIndex].text;
                const provinceText = provinceSelect.options[provinceSelect.selectedIndex].text;

                const displayAddress = formData.streetAddress +
                    (formData.apartment ? ', ' + formData.apartment : '') +
                    ' - ' + formData.city + ', ' + provinceText + ' / ' + formData.postcode;

                if (editingAddressId) {
                    // Update existing address
                    const card = document.querySelector('.ff-address-card[data-address-id="' + editingAddressId + '"]');
                    if (card) {
                        card.querySelector('.ff-address-name').textContent = formData.fullName;
                        card.querySelector('.ff-address-text').textContent = displayAddress;
                    }
                } else {
                    // Add new address
                    const newId = Date.now();
                    const newCard = document.createElement('div');
                    newCard.className = 'ff-address-card';
                    newCard.dataset.addressId = newId;
                    newCard.innerHTML =
                        '<div class="ff-address-card-body">' +
                        '<h4 class="ff-address-name">' + formData.fullName + '</h4>' +
                        '<p class="ff-address-text">' + displayAddress + '</p>' +
                        '<p class="ff-address-phone">' + countryText + '</p>' +
                        '</div>' +
                        '<div class="ff-address-card-actions">' +
                        '<button class="ff-delete-address-btn">Delete</button>' +
                        '<button class="ff-edit-address-btn">Edit</button>' +
                        '</div>';

                    // Insert before the add button
                    const addAction = document.querySelector('.ff-add-address-action');
                    addAction.parentNode.insertBefore(newCard, addAction);

                    // Add event listeners to new buttons
                    attachCardEventListeners(newCard);
                }

                // Close modal
                const modal = bootstrap.Modal.getInstance(document.getElementById('addAddressModal'));
                modal.hide();

                // Reset
                editingAddressId = null;
                addressForm.reset();
            });
        }
    }

});

// ========================================
// MY ORDERS PAGE HANDLER
// ========================================
document.addEventListener('DOMContentLoaded', function () {
    // Check if we're on the my-orders page
    if (document.querySelector('.ff-orders-section')) {
        const isLoggedIn = localStorage.getItem('ff_logged_in') === 'true';
        if (!isLoggedIn) {
            window.location.href = 'login.html';
        }
    }
});

// ========================================
// ORDER DETAIL PAGE HANDLER
// ========================================
document.addEventListener('DOMContentLoaded', function () {
    // Check if we're on the order detail page
    if (document.querySelector('.ff-order-detail-section')) {
        const isLoggedIn = localStorage.getItem('ff_logged_in') === 'true';
        if (!isLoggedIn) {
            window.location.href = 'login.html';
        }

        // Reorder button handler
        const reorderBtn = document.querySelector('.ff-reorder-btn');
        if (reorderBtn) {
            reorderBtn.addEventListener('click', function () {
                // Add items to cart and redirect
                alert('Items added to cart!');
                window.location.href = 'cart.html';
            });
        }
    }
});

// ========================================
// CHANGE PASSWORD PAGE HANDLER
// ========================================
document.addEventListener('DOMContentLoaded', function () {
    // Check if we're on the change password page
    if (document.querySelector('.ff-change-password-section')) {
        const isLoggedIn = localStorage.getItem('ff_logged_in') === 'true';
        if (!isLoggedIn) {
            window.location.href = 'login.html';
            return;
        }

        // Toggle password visibility
        const toggleBtns = document.querySelectorAll('.ff-toggle-password');
        toggleBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                const targetId = this.getAttribute('data-target');
                const input = document.getElementById(targetId);
                const icon = this.querySelector('i');

                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                    this.classList.add('active');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                    this.classList.remove('active');
                }
            });
        });

        // Form submission
        const changePasswordForm = document.getElementById('changePasswordForm');
        if (changePasswordForm) {
            changePasswordForm.addEventListener('submit', function (e) {
                e.preventDefault();

                const oldPassword = document.getElementById('oldPassword').value;
                const newPassword = document.getElementById('newPassword').value;
                const confirmPassword = document.getElementById('confirmPassword').value;

                // Validation
                if (newPassword.length < 6) {
                    alert('Password must be at least 6 characters long.');
                    return;
                }

                if (newPassword !== confirmPassword) {
                    alert('New password and confirm password do not match.');
                    return;
                }

                // Show success modal
                const successModal = new bootstrap.Modal(document.getElementById('passwordSuccessModal'));
                successModal.show();

                // Reset form
                changePasswordForm.reset();
            });
        }
    }
});

// ========================================
// CART PAGE - DELIVERY TABS HANDLER
// ========================================
document.addEventListener('DOMContentLoaded', function () {
    // Check if we're on the cart page
    if (document.querySelector('.ff-cart-section')) {
        // Delivery tabs switching
        const deliveryTabs = document.querySelectorAll('.ff-delivery-tab');
        const shipContent = document.getElementById('shipContent');
        const pickupContent = document.getElementById('pickupContent');

        if (deliveryTabs.length > 0) {
            deliveryTabs.forEach(tab => {
                tab.addEventListener('click', function () {
                    // Remove active from all tabs
                    deliveryTabs.forEach(t => t.classList.remove('active'));
                    // Add active to clicked tab
                    this.classList.add('active');

                    // Show/hide content
                    const tabType = this.getAttribute('data-tab');
                    if (tabType === 'ship') {
                        shipContent.style.display = 'block';
                        pickupContent.style.display = 'none';
                    } else {
                        shipContent.style.display = 'none';
                        pickupContent.style.display = 'block';
                    }
                });
            });
        }

        // Payment method selection
        const paymentMethods = document.querySelectorAll('.ff-payment-method');
        paymentMethods.forEach(method => {
            method.addEventListener('click', function () {
                paymentMethods.forEach(m => m.classList.remove('active'));
                this.classList.add('active');
                this.querySelector('input[type="radio"]').checked = true;
            });
        });
    }
});
