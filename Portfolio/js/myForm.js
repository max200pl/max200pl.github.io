/*Modal form validate for jQuery.validator */

$(document).ready(function () {
     $("#myform").validate({
          rules: {
               // проверка input c name="name"  
               name: {
                    required: true, // обязательное пле ввода 
                    minlength: 3 // минимальное количество символ 3
               },

               // проверка input c name="name" 
               email: {
                    required: true, // обязательное пле ввода
                    email: true // проверка на правильный ввод email

               }

          },
          // в созданном label выводим название ошибки  
          messages: {
               name: {
                    required: "Please specify your name",
                    minlength: jQuery.validator.format("At least {0} characters required!")
               },
               email: {
                    required: "We need your email address to contact you",
                    email: "Your email address must be in the format of name@domain.com"
               }
          },

          ignoreTitle: true, //игнорирование 


          onkeyup: function () {
               this.checkForm();
               if (this.valid()) { // checks form for validity
                    $("#btn-form").addClass("light").attr("disabled", false); //Button enable if all fields valid
               } else {
                    $("#btn-form").removeClass("light").attr("disabled", true); //button will disbale if any field not valid
               }
          }

     }

     );

     /*===================E-mail Ajax Send=========================*/
     $("#myform").submit(function (event) { //Change
          event.preventDefault();

          var th = $(this);

          setTimeout(function () {
               $(".modal").removeClass("show");
               $("body").removeClass("no-scroll");
          }, 1000);


          $.ajax({
               type: "POST",
               url: "mail.php",          // путь  php файла 
               data: th.serialize()     // .serialize() возвращает строку пригодную для передачи через URL строку
          }).done(function () {

               setTimeout(function () {
                    let allInputs = $(':input');
                    // Done Functions
                    //обнуление формы при правильной отправке
                    allInputs.removeClass("valid");
                    th.trigger("reset");
               }, 1000);

               $("#modal-success").css("display", "flex");
               $("#modal-success")
                    .animate({
                         opacity: "1",
                         top: "20%"
                    }, 2000, "linear").animate({
                         opacity: "0",
                         top: "-10%"
                    }, 2000, "linear");
          });
          return false;
     });
});



