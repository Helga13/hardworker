$(document).ready(function() {
       
    //Если контент меньше высоты окна
    
    if ($(document).height() <= $(window).height())
  $(".footer_bg").addClass("navbar-fixed-bottom");
    
    // Фиксация меню при уменьшении ширины экрана

// Переключение аккордеонов
    
//    $('.panel-heading').click(function(){ 
//        if ( $('.panel-collapse').hasClass('in')){    
//           $('.collapse_btn').removeClass('collapse_btn_bottom');
//        }
//        $(this).find('a').addClass('collapse_btn_bottom'); 
//			
//	});
    
	// Категории (выпадающий список)
    
$(function() {
  $(".js-example-placeholder-single").select2({
        placeholder: "Категория",
      allowClear: true
  });
});
    
        $(function() {
  $(".js-example-placeholder-single_reg").select2({
        placeholder: "",
      allowClear: true
  });
});
       
    //Календарь
    
$(function() {
   
    $("#date_index").datepicker({ 
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'] , 
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
         firstDay: 1,
        dateFormat: 'dd-mm-yy'
    });   
  });
    
    
    $(function() {
   
    $("#date").datepicker({ 
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'] , 
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        firstDay: 1,
        dateFormat: 'dd-mm-yy'
    });   
  });
    
    $(function() {
    $("#date_reg").datepicker({ 
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'] , 
        monthNamesShort:['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        firstDay: 1,
        dateFormat: 'dd-mm-yy',
        changeMonth: true,
        changeYear: true,
        yearRange: '1947:2010'
    });   
  });
    

 $(function() {
 $("#my-input").simpleSlider({highlight: true,
snap: true});
     $("[data-slider]")
    .each(function () {
      var input = $(this);
      $("<span>")
        .addClass("output")
      .css("color" , "#9a9a9a")
        .insertAfter($(this));
    })
    .bind("slider:ready slider:changed", function (event, data) {
      $(this)
        .nextAll(".output:first")
          .html(data.value.toFixed(0) +' 000' +' руб.');
       $(".start_val").hide();
     });
        
     
});
    
    //Lightbox
    
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
		event.preventDefault();
		$(this).ekkoLightbox();
	}); 
    
    // Required field for typing in add_vacancy
    
    $(function() {
        $('.form_vacancy').validate({
            rules: {
                    project_name: {
                    required: true
                },
                    categories: {
                    required: true
                },
                    password: {
                    required: true
                },
                    repeat_password: {
                    equalTo: "#input_password"
                }
            },
            
            messages: {
                    project_name: {
                    required: "Пожалуйста, заполните название проекта"
                },
                    categories: {
                    required: "Пожалуйста, заполните категорию"
                }   
            }
        });
    });
    
    // Required field for typing in registration
    
    $(function() {
        $('.registration_block').validate({
            
            rules: {
                    password: {
                    required: true
                },
                    repeat_password: {
                    equalTo: "#input_password",
                    
                }
            },
            messages: {
                    password: {
                    required: "Пожалуйста, введите пароль "
                },
                    repeat_password: {
                    equalTo: ""
                }   
            }  
        });
        
    });
    

    
    
});

 