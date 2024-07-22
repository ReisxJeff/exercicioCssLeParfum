$(document).ready(function(){
    $('#carossel-img').slick({
        autoplay:true
    })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('.perfumes').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    

    $('#telefone').mask('(00)00000-0000',{
        placeholder: '(00)00000-0000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagen: {
                required: false
            },
            perfmeInterese: {
                required: false
            }

        },
        messages: {
        nome: 'Insira seu nome, por favor',
        email: 'Insira um endereço de e-mail válido, por favor',
        telefone: 'Insira seu telefone, por favor'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento,validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }                  
        }
    })

    $('.perfumes button').click(function(){
        const destino = $('#contato')
        const peerfume = $(this).parent().find('h3').text();

        $('#perfumeInteresse').val(peerfume);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})