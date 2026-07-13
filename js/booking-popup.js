/*==================================
BOOKING POPUP
==================================*/

window.initBookingPopup = function () {

    const modal = document.getElementById("bookingModal");
    const overlay = modal ? modal.querySelector(".booking-overlay") : null;
    const closeBtn = modal ? modal.querySelector(".close-popup") : null;
    const form = document.getElementById("bookingForm");
    const success = document.querySelector(".success-popup");
    const successName = document.querySelector(".success-name");
    const openBtns = document.querySelectorAll(".open-booking");

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

        btn.onclick = function (e) {

            e.preventDefault();
            openPopup();

        };

    });

    /*==========================
    CLOSE
    ==========================*/

    if (closeBtn) {

        closeBtn.onclick = closePopup;

    }

    if (overlay) {

        overlay.onclick = closePopup;

    }

    /*==========================
    ESC
    ==========================*/

    document.onkeydown = function (e) {

        if (e.key === "Escape") {

            closePopup();

        }

    };

    /*==========================
    SUBMIT
    ==========================*/

    if (form && success && successName) {

        form.onsubmit = function (e) {

            e.preventDefault();

            const name =
                document.getElementById("name").value.trim() || "Guest";

            successName.textContent = name;

            closePopup();

            success.classList.add("active");

            form.reset();

            setTimeout(() => {

                success.classList.remove("active");

            }, 4000);

        };

    }

    /*==========================
    SUCCESS CLOSE
    ==========================*/

    if (success) {

        success.onclick = function () {

            success.classList.remove("active");

        };

    }

};