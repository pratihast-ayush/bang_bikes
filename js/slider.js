function slideUp(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "all .3s ease-in-out";
  elem.style.height = "100%";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  }

  function slideDown(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "all .3s ease-in-out";
    elem.style.height = "0px";
  }