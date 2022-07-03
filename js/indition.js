//volgende functies uitvoeren wanneer men scrolled over de pagina.
$(document).ready(function() {

    $('#btnAccept').on('click', function() {
        $('.alert').hide();
    });


    $('#cookie').on('hover', function() {
        $('.alert').removeClass('btn-outline-info');
        $('.alert').addClass('btn-info');
    })
    $('#cookie').on('click', function() {
        $('.alert').slideDown();
    })

    // indien je meer social media wil toevoegen (bijvoorbeeld twitter) kan je onderstaande code toevoegen voor op gsm.
    // if ($(window).width() < 400) {
    //     $("#facebook").removeClass("fa-2x");
    //     $("#twitter").removeClass("fa-2x");
    //     $("#instagram").removeClass("fa-2x");
    // } 
    // else {
    //     $("#facebook").addClass("fa-2x");
    //     $("#twitter").addClass("fa-2x");
    //     $("#instagram").addClass("fa-2x");
    // }


    //smooth scrollen
    let scrollLink = $('.scrollen');
    scrollLink.click(function(e) {
        //default handeling stoppen.
        e.preventDefault();
        //zelf animatie toevoegen, in dit geval scrollen. de .hash zoekt naar # van de nav balk die gelinkt is naar de html lokatie van die #
        $('body,html').animate({ scrollTop: $(this.hash).offset().top - 100 }, 1000)
    })

    //volgende functies uitvoeren wanneer men scrolled over de pagina.
    $(window).scroll(function() {

        //locatie waar de scrollbar momenteel is.                
        let scrollbarLocatie = $(this).scrollTop();

        //elk element van de navbar ( $('.scrollen') ) veranderen naar 'active'
        scrollLink.each(function() {
            //.hash = om attributen te zoeken met een # teken. .offset().top = om te kijken hoe ver van de top van de pagine deze locatie is
            var sectionOffset = $(this.hash).offset().top - 130;

            if (sectionOffset <= scrollbarLocatie) {
                //active class toeveoegen
                $(this).parent().addClass('active');
                //active class van de parents en siblings weghalen. 
                $(this).parent().siblings().removeClass('active');
            }
        })
    })

    // formulier validatie
    $('#first_form').submit(function(e) {
        e.preventDefault();
        var first_name = $('#first_name').val();
        var last_name = $('#last_name').val();
        var email = $('#email').val();
        var text = $('#textarea').val();

        $(".error").remove();

        if (first_name.length < 1) {
            $('#first_name').after('<span class="error">Voornaam is verplicht.</span>');
        }
        if ($.isNumeric(first_name)) {
            $('#first_name').after('<span class="error">Voornaam kan geen nummer zijn.</span>');
        }
        if (last_name.length < 1) {
            $('#last_name').after('<span class="error">Familienaam is verplicht.</span>');
        }
        if ($.isNumeric(last_name)) {
            $('#last_name').after('<span class="error">Familienaam kan geen nummer zijn.</span>');
        }
        if (email.length < 1) {
            $('#email').after('<span class="error">Email is verplicht</span>');
        } else {
            var regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
            var validEmail = regEx.test(email);
            if (!validEmail) {
                $('#email').after('<span class="error">Email adres is ongeldig.</span>');
            }
        }
        if (text.length < 1) {
            $('#textarea').after('<span class="error">Bericht is verplicht.</span>');
        }
        if (text.length > 50) {
            $('#textarea').after('<span class="error">Bericht is te lang, max. 50 karakters</span>');
        }
    });
})