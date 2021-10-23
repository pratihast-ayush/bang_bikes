

$.fn.equalHeights = function () {
  var max_height = 0;
  $(this).each(function () {
    max_height = Math.max($(this).height(), max_height);
  });
  $(this).each(function () {
    $(this).height(max_height);
  });
};

$(document).ready(function () {
  var line = $('#line');
  var div1 = $('#update-box');
  var div2 = $('#home');

  var x1 = div1.position().left + (div1.width()/2);
  var y1 = div1.position().top + (div1.height()/2);
  var x2 = div2.offset().left + (div2.width()/2);
  var y2 = div2.position().top + (div2.height()/2);
  console.log(x1);

  line.attr('x1', x1).attr('y1', y1).attr('x2', x2).attr('y2', y2);
  
  $('.shight').equalHeights();

  $('#update-box').click(function() {
    $('#remove-on-click').css("display", "none");
    $('.update-box').css("display", "block");
    $('#update-box').addClass("active");
    $('#update-box1').removeClass("active");
    $('#update-box2').removeClass("active");
    $('#update-box3').removeClass("active");
    $('#change-to-blue').css("background", "blue");


  });
  $('#update-box1').click(function() {
    $('#remove-on-click').css("display", "none");
    $('.update-box').css("display", "block");
    $('#update-box1').addClass("active");
    $('#update-box').removeClass("active");
    $('#update-box2').removeClass("active");
    $('#update-box3').removeClass("active");
    $('#change-to-blue').css("background", "blue");

  });
  $('#update-box2').click(function() {
    $('#remove-on-click').css("display", "none");
    $('.update-box').css("display", "block");
    $('#update-box2').addClass("active");
    $('#update-box').removeClass("active");
    $('#update-box1').removeClass("active");
    $('#update-box3').removeClass("active");
    $('#change-to-blue').css("background", "blue");
    $('#change-to-blue').css("background", "blue");

  });
  $('#update-box3').click(function() {
    $('#remove-on-click').css("display", "none");
    $('.update-box').css("display", "block");
    $('#update-box3').addClass("active");
    $('#update-box').removeClass("active");
    $('#update-box2').removeClass("active");
    $('#update-box1').removeClass("active");
    $('#change-to-blue').css("background", "blue");
    

  });
  
});

$(function () {
  $('input').on('change', function () {
    var input = $(this);
    if (input.val().length) {
      input.addClass('populated');
    } else {
      input.removeClass('populated');
    }
  });

  setTimeout(function () {
    $('#fname').trigger('focus');
  }, 500);
});

var counter = document.getElementById('counter');

var btn_team = document.getElementById('btn-offset');
var txt_bang = document.getElementById('bang_discount');

var i = 0, interval, countUpto = 39;

function start(duration) {
  i = 59;

  interval = setInterval(function () {
    if (i >= countUpto) {
      counter.innerText = i;
      i--;

    } else {
      clearInterval(interval);
      btn_team.style.display = "block";
      txt_bang.innerHTML = "Your BANG! saves you €20.00";
      txt_bang.style.color = "#fff";
      // alert('Count Completed.');
    }
  }, duration / countUpto);
}



$('.meet-screen').on('click', function (e) {
  $('.bang-serv-map').toggleClass("collapsed"); //you can list several class names 
  e.preventDefault();
});


$('.down-map').on('click', function (e) {
  $('.bang-serv-map').toggleClass("collapsed pressed"); //you can list several class names 
  e.preventDefault();
});


$('#btn').on('click', function (e) {
  $('.px-result').toggleClass("px-show"); //you can list several class names 
  e.preventDefault();
});

