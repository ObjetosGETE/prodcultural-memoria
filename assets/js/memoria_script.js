window.onload = (event) => {
    $('.tela_final').hide();

    let selected = 0;

    $('.start').click(function () {
        $('.tela_inicial').fadeOut()
    })

    function checkCards() {
        let card1 = $('.selected')[0]
        let card2 = $('.selected')[1]

        if (card1.classList[1] == card2.classList[1]) {
            $('.selected').addClass('correto');
            $('.correto').removeClass('selected');
        } else {
            // a classe checking serve pra proibir selecionar cartas 
            // enquanto o feedback esta ativo
            $('.card').addClass('checking');
            // $('.reveal-btn').addClass('checking');
            $('.selected').addClass('errado');
            setTimeout(function () {
                $('.card').removeClass('checking');
                // $('.reveal-btn').removeClass('checking');
                $('.selected').removeClass('errado');
                $('.selected').removeClass('selected');
            }, 1500)
        }

        if ($('.correto').length == 16) {
            $('.tela_final').fadeIn();
        }
    }

    $('.start-again').click(function(){
        resetCards()
        selected = 0;
        $('.tela_final').fadeOut();
        $('.correto').removeClass('correto')
        setTimeout(function(){$('.tela_inicial').fadeIn()}, 500);
    })

    function resetCards() {
        $('.selected').removeClass('selected');
    }

    // evento clique nos cards
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        card.addEventListener(
            'click',
            function () {
                card.classList.toggle('selected');
                selected++
                if (selected == 2) {
                    checkCards();
                    selected = 0;
                }
            }
        )
    }
}