window.onload = function () {
  var isHidden = 1;
  window.addEventListener('scroll', (event) => {
    if (scrollY < 500) {
      if (scrollY > 430) {
        var g = 1 - (1/70 * (500 - scrollY))
        var s = (255/70 * (500 - scrollY))
        $(".header__bar").css("background-color", `rgba(255, 255, 255, ${g})`);
        $(".header__bar").css("color", `rgb(${s}, ${s}, ${s})`);
        $("#header__logo-img").css("opacity", `${1-g}`);
      } else {
        $(".header__bar").css("background-color", "rgba(255, 255, 255, 0)");
        $(".header__bar").css("color", "rgb(255, 255, 255)");
        $("#header__logo-img").css("opacity", "1");
      }
    } else {
      $(".header__bar").css("background-color", "rgb(255, 255, 255)");
      $(".header__bar").css("color", "rgb(0, 0, 0)");
      $("#header__logo-img").css("opacity", "0");
    }

    if (scrollY > 0 && isHidden == 1) {
      $("#buttonArea").css("transform", "translateX(0px)");
      $("#buttonArea").css("opacity", "1");
      isHidden = 0;
    }
  });

}
