var clickHandler = function () {
  console.log("click");
};

// тук ще подадем на addEventListener не нашата функция - clickHandler,
// а резултата от нея (в случая - undefined), а самата функция clickHandler() ще бъде извикана моментално:
document.body.addEventListener("click", clickHandler());
