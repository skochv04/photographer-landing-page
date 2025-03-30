// $(document).ready(function () {
//    $('.burger').click(function (event) {
//       $('.burger').toggleClass('active');
//    });
// });

$(document).ready(function () {
   $('.burger').click(function (event) {
      $('.navtext-vertical, .burger').toggleClass('active-menu');
   });
});

/* *****for fullscreen***** */
function ibg() {

   $.each($('.ibg'), function (index, val) {
      if ($(this).find('img').length > 0) {
         $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
      }
   });
}

ibg();

const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function (e) {
   e.preventDefault();
   popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
   popUp.classList.remove('active');
})