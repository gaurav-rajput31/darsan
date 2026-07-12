/*==================================
BOOKING POPUP
==================================*/

document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("bookingModal");
    const overlay = document.querySelector(".booking-overlay");
    const closeBtn = document.querySelector(".close-popup");
    const form = document.getElementById("bookingForm");
    const success = document.querySelector(".success-popup");
    const successName = document.querySelector(".success-name");
    const openBtns = document.querySelectorAll(".open-booking");

    /*==========================
    Check Required Elements
    ==========================*/

    if (!modal) {
        console.error("bookingModal not found");
        return;
    }

    /*==========================
    OPEN
    ==========================*/

    function openPopup() {

        modal.classList.add("active");
        document.body.style.overflow = "hidden";

    }

    /*==========================
    CLOSE
    ==========================*/

    function closePopup() {

        modal.classList.remove("active");
        document.body.style.overflow = "";

    }

    /*==========================
    OPEN BUTTONS
    ==========================*/

    openBtns.forEach(btn => {

        btn.addEventListener("click", function (e) {

            e.preventDefault();

            openPopup();

        });

    });

    /*==========================
    CLOSE BUTTON
    ==========================*/

    if (closeBtn) {

        closeBtn.addEventListener("click", closePopup);

    }

    /*==========================
    OVERLAY
    ==========================*/

    if (overlay) {

        overlay.addEventListener("click", closePopup);

    }

    /*==========================
    ESC
    ==========================*/

    document.addEventListener("keydown", function (e) {

        if (e.key === "Escape") {

            closePopup();

        }

    });

    /*==========================
    FORM SUBMIT
    ==========================*/

    if (form && success && successName) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const nameInput = document.getElementById("name");

            const name = nameInput ? nameInput.value.trim() : "Guest";

            successName.textContent = name || "Guest";

            closePopup();

            success.classList.add("active");

            form.reset();

            setTimeout(function () {

                success.classList.remove("active");

            }, 4000);

        });

    }

    /*==========================
    SUCCESS CLICK
    ==========================*/

    if (success) {

        success.addEventListener("click", function () {

            success.classList.remove("active");

        });

    }

});