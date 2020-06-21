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
    popup_write_us.classList.toggle("popup-on");
    popup_write_us.classList.toggle("modal-show");
    fname.removeAttribute("required");
    femail.removeAttribute("required");
    fmessage.removeAttribute("required");
    console.log(fname)
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
    popup_write_us.classList.remove("modal-error");
    popup_write_us.classList.remove("modal-show");
    popup_write_us.classList.remove("popup-on");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup_write_us.classList.contains("popup-on")) {
        evt.preventDefault();
        popup_write_us.classList.add("remove-show");
        popup_write_us.classList.remove("modal-error");
        popup_write_us.classList.remove("popup-on");
      }
    }
  });

  form_write_us.addEventListener("submit", function (evt) {
    if (!fname.value || !femail.value || !fmessage.value) {
      evt.preventDefault();
      popup_write_us.classList.remove("modal-error");
      form_write_us.offsetWidth = form_write_us.offsetWidth;
      popup_write_us.classList.add("modal-error");
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
    popup_map.classList.toggle("popup-on");
    popup_map.classList.toggle("modal-show");
    button_close_popup_map.focus();
  });

  button_close_popup_map.addEventListener("click", function () {
    popup_map.classList.remove("modal-show");
    popup_map.classList.remove("popup-on");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup_map.classList.contains("popup-on")) {
        evt.preventDefault();
        popup_map.classList.remove("modal-show");
        popup_map.classList.remove("popup-on");
      }
    }
  });

  //Первый слайдер
  var button_right = document.querySelector(".management-slider-promo .right-arrow-button");
  var button_left = document.querySelector(".management-slider-promo .left-arrow-button");
  var slide = document.querySelectorAll(".slide-promo");
  var menegment_first_slider = document.querySelector(".management-slider-promo");
  var round_button = document.querySelectorAll(".management-slider-promo-round .button");
  var zone_round_button = document.querySelector(".management-slider-promo-round");
  var nslide = 1;
  var slide_adress = slide.item(nslide);
  var round_adress = round_button.item(nslide);

  slide.forEach(
    function (slide) {
      slide.classList.remove("slide-current");
    });

  slide_adress.classList.add("slide-current");
  round_adress.classList.add("current");
  menegment_first_slider.classList.remove("management-slider-promo-off");

  button_right.addEventListener("click", function () {
    slide_adress.classList.remove("slide-current");
    round_adress.classList.remove("current");
    nslide = nslide + 1;
    if (slide.item(nslide)) {
      slide_adress = slide.item(nslide);
      round_adress = round_button.item(nslide);
    } else { nslide = 0; slide_adress = slide.item(nslide); round_adress = round_button.item(nslide); }
    slide_adress.classList.add("slide-current");
    round_adress.classList.add("current");
    console.log(slide_adress);
    console.log(nslide);
    console.log(round_adress);
  });

  button_left.addEventListener("click", function () {
    slide_adress.classList.remove("slide-current");
    round_adress.classList.remove("current");
    nslide = nslide - 1;
    if (slide.item(nslide)) {
      slide_adress = slide.item(nslide);
      round_adress = round_button.item(nslide);
    } else { nslide = slide.length - 1; slide_adress = slide.item(nslide); round_adress = round_button.item(nslide); }
    slide_adress.classList.add("slide-current");
    round_adress.classList.add("current");
    console.log(slide_adress);
    console.log(nslide);
  });

  zone_round_button.addEventListener("click", function (evt) {
    var target_click_slide = evt.target;
    if (target_click_slide.classList.contains("button")) {
      if (!target_click_slide.classList.contains("current")) {
        slide_adress.classList.remove("slide-current");
        round_adress.classList.remove("current");
        target_click_slide.classList.add("current");
        var after_current = document.querySelectorAll(".management-slider-promo-round .current ~ .button");
        nslide = slide.length - after_current.length - 1;
        slide_adress = slide.item(nslide);
        slide_adress.classList.add("slide-current");
        round_adress = round_button.item(nslide);
      }
    }
  });


  // Второй слайдер.
  var buttons_slider = document.querySelectorAll(".buttons-slider-service .button-slider-service");
  var slides_slider = document.querySelectorAll(".slides-service .slide-service");
  var menegment_second_slider = document.querySelector(".buttons-slider-service");
  var position = 0;
  var active_button = buttons_slider.item(position);
  var active_slide = slides_slider.item(position);

  slides_slider.forEach(
    function (slides_slider) {
      slides_slider.classList.remove("slide-current");
    });

  menegment_second_slider.classList.remove("buttons-slider-service-off");
  active_slide.classList.add("slide-current")
  active_button.classList.add("button-current")

  menegment_second_slider.addEventListener("click", function (evt) {
    var target_click_slide2 = evt.target;
    if (target_click_slide2.classList.contains("button-slider-service")) {
      console.log("запуск");
      if (!target_click_slide2.classList.contains("button-current")) {
        active_slide.classList.remove("slide-current");
        active_button.classList.remove("button-current");
        target_click_slide2.classList.add("button-current");
        position = 0;
        for (var i = 0; !buttons_slider.item(i).classList.contains("button-current"); i++) {
          position = 1 + i;
        };
        active_slide = slides_slider.item(position);
        active_slide.classList.add("slide-current");
        active_button = buttons_slider.item(position);
      }
    }
  });
}
//модальное окно в корзине.

button_buy.addEventListener("click", function (evt) {
  console.log("клик в бай");
  var target_click = evt.target;
  if (target_click.classList.contains("button-buy")) {
    evt.preventDefault();
    if (!message_buy.classList.contains("popup-on")) {
      message_buy.classList.add("popup-on");
      message_buy.classList.add("modal-show");
    }
    button_close_message_buy.focus();
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (message_buy.classList.contains("popup-on")) {
      evt.preventDefault();
      message_buy.classList.remove("modal-show");
      message_buy.classList.remove("popup-on");
    }
  }
});

button_close_message_buy.addEventListener("click", function () {
  message_buy.classList.remove("modal-show");
  message_buy.classList.remove("popup-on");
}); 