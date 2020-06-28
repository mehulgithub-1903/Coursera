$(document).ready(function() {
    $('#mycarousel').carousel({interval: 500});
    $('#carouselButton').click(function() {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }

        else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    })

    $("#reserveTableButton").click(function(){
      $("#reserveTableModal").modal('show');
      });
      $("#modalReserveCancel").click(function(){
      $("#reserveTableModal").modal('hide');
      });
      $("#loginButton").click(function(){
      $("#loginModal").modal('show');
      });
      $("#modalLoginCancel").click(function(){
      $("#loginModal").modal('hide');
      });
      $("#cross").click(function(){
      $("#reserveTableModal").modal('hide');
      });
      $("#closeModalButton").click(function(){
      $("#loginModal").modal('hide');
      });
})