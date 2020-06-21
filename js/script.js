var button_write_us = document.querySelector(".contact .design-button");
var button_map = document.querySelector(".contact .map");
var button_buy = document.querySelector(".event-target");
var popup_write_us = document.querySelector(".write-us");
var popup_map = document.querySelector(".popup-map");
var message_buy = document.querySelector(".message-buy");
var button_close_write_us = document.querySelector(".write-us .button-close");
var button_close_popup_map = document.querySelector(".popup-map .button-close");
var button_close_message_buy = document.querySelector(".message-buy .button-close");
var type_page = document.querySelector(".page-body")
var fname = document.querySelector(".write-us li:first-child .input");
var femail = document.querySelector(".write-us li:nth-child(2) .input");
var fmessage = document.querySelector(".write-us li:nth-child(3) .input");
var form_write_us = document.querySelector(".form-write-us");

if (type_page.classList.contains("index-page")) {

    // модальное окно "напишите нам"

    var isStorageSupport = true;
    var storage_name = "";
    var storage_email = "";


    try {
        storage_name = localStorage.getItem("formname");
    } catch (err) {
        isStorageSupport = false;
    }

    try {
        storage_email = localStorage.getItem("formemail");
    } catch (err) {
    }

    button_write_us.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup_write_us.classList.remove("popup-off");
        if (storage_name) {
            fname.value = storage_name;
            if (storage_email) {
                femail.value = storage_email;
                fmessage.focus();
            } else { femail.focus(); }
        } else {
            fname.focus();
        }
    });

    button_close_write_us.addEventListener("click", function () {
        popup_write_us.classList.add("popup-off");
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (!popup_write_us.classList.contains("popup-off")) {
                evt.preventDefault();
                popup_write_us.classList.add("popup-off");
            }
        }
    });

    form_write_us.addEventListener("submit", function (evt) {
        if (!fname.value || !femail.value || !fmessage) {
            evt.preventDefault();
        };
        if (isStorageSupport) {
            if (fname.value) {
                localStorage.setItem("formname", fname.value);
            };
            if (femail.value) {
                localStorage.setItem("formemail", femail.value);
            };
        }

    });

    // модальное окно с картой

    button_map.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup_map.classList.toggle("popup-off");
        button_close_popup_map.focus();
    });

    button_close_popup_map.addEventListener("click", function () {
        popup_map.classList.add("popup-off");
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (!popup_map.classList.contains("popup-off")) {
                evt.preventDefault();
                popup_map.classList.add("popup-off");
            }
        }
    });
}

//модальное окно в корзине.

button_buy.addEventListener("click", function (evt) {
    let target_click = evt.target;
    if (target_click.classList.contains("button-buy")) {
        evt.preventDefault();
        message_buy.classList.remove("popup-off");
        button_close_message_buy.focus();
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (!message_buy.classList.contains("popup-off")) {
            evt.preventDefault();
            message_buy.classList.add("popup-off");
        }
    }
});

button_close_message_buy.addEventListener("click", function () {
    message_buy.classList.add("popup-off");
}); 