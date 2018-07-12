var searchOpen = document.querySelector(".search-hotel");
var searchOpen = document.querySelector(".search-open-btn");
var searchForm =  document.querySelector(".search-date");
if (searchOpen) {
  if (searchForm) {
    searchForm.classList.add("search-form-hide");
  };
  searchOpen.addEventListener("click", function (event) {
    event.preventDefault();
    searchForm.classList.toggle("search-form-hide");
    searchForm.classList.toggle("search-form-show");
  });
};