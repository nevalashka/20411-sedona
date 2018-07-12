var searchForm = document.querySelector(".search-date");
var searchOpenBtn = document.querySelector(".search-hotel");
var arrival = searchForm.querySelector("input[name=date-arrival]");
var departure = searchForm.querySelector("input[name=date-departure]");
var adults = searchForm.querySelector("input[name=adults]");
var kids = searchForm.querySelector("input[name=kids]");
var adultsPlusBtn = searchForm.querySelector('.adults-plus');
var kidsPlusBtn = searchForm.querySelector('.kids-plus');
var adultsMinusBtn = searchForm.querySelector('.adults-minus');
var kidsMinusBtn = searchForm.querySelector('.kids-minus');

searchForm.classList.add("search-form-hide");

searchOpenBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchForm.classList.toggle("search-form-hide");
  searchForm.classList.add("search-form-show");
  searchForm.classList.remove("search-form-error");
  if (localStorage.getItem('adults')) {
    adults.value = localStorage.getItem('adults');
  }
  if (localStorage.getItem('kids')) {
    kids.value = localStorage.getItem('kids');
  }
  arrival.focus();
});

searchForm.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adults.value || !kids.value) {
    evt.preventDefault();
    searchForm.classList.remove("search-form-error");
    searchForm.classList.add("search-form-error");
  }
});

adults.addEventListener('change', function () {
  localStorage.setItem('adults', adults.value)
});

kids.addEventListener('change', function () {
  localStorage.setItem('kids', kids.value)
});

adultsPlusBtn.addEventListener('click', function () {
  adults.value = +adults.value + 1;
  localStorage.setItem('adults', adults.value)
});

kidsPlusBtn.addEventListener('click', function () {
  kids.value = +kids.value + 1;
  localStorage.setItem('kids', kids.value)
});

adultsMinusBtn.addEventListener('click', function () {
  if (adults.value > 0) {
    adults.value = +adults.value - 1;
    localStorage.setItem('adults', adults.value)
  }
});

kidsMinusBtn.addEventListener('click', function () {
  if (kids.value > 0) {
    kids.value = +kids.value - 1;
    localStorage.setItem('kids', kids.value)
  }
});
