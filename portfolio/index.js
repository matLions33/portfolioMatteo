
$(document).ready(function () {
    $('.navbar-toggler').click(function () {
      $('.navbar-collapse').toggle();
    });
  });

  $(document).ready(function(){
    // Seleziona il carousel di Bootstrap
    var carousel = $('.carousel');
  
    // Imposta lo scorrimento automatico del carousel a 4 secondi
    setInterval(function() {
      carousel.carousel('next');
    }, 4000);
  });




 function toggleDarkMode() {
  var body = document.querySelector('body');
  body.classList.toggle('dark-mode');
  
}
$( document ).ready(function() {
  $(".setsize").each(function() {
      $(this).height($(this).width());
  });
});
$(window).on('resize', function(){
  $(".setsize").each(function() {
      $(this).height($(this).width());
  });
});

const progressElements = document.querySelectorAll('.progress-radial');
progressElements.forEach((progressElement) => {
  const progressValue = progressElement.getAttribute('data-progress');
  const paragraphElement = progressElement.querySelector('.progress-text');
  paragraphElement.innerText = `${progressValue}%`;
});




$(window).scroll(function() {
  $(".progress-radial").each(function() {
    var progress = $(this).attr("data-progress");
    var percentage = parseInt(progress, 10) + "%";
    $(this).find(".overlay .progress-text").text(percentage);
    $(this).find(".overlay").css("clip", "rect(0px, 50px, 50px, 25px)");
    $(this).find(".overlay").animate({
      clip: "rect(0px, " + progress * 50 / 100 + "px, 50px, 25px)"
    }, {
      duration: 2000,
      easing: "swing"
    });
  });
});







document.addEventListener('DOMContentLoaded', function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        document.getElementById('testo').textContent = xhr.responseText;
      }
      else {
        console.log('Errore durante la richiesta del file');
      }
    }
  };
  xhr.open('GET', 'testo.html', true);
  xhr.send();
});

jQuery(document).ready(function() {
  jQuery('.skillbar').each(function() {
      jQuery(this).find('.skillbar-bar').animate({ width: jQuery(this).attr('data-percent') }, 3000);
  });
});