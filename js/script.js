$(function(){
    $('a[href^=#]').click(function(){
        var adjust = 0;
        var speed = 400;
        var href= $(this).attr('href');
        var target = $(href == '#' || href == '' ? 'html' : href);
        
        var windowWidth = $(window).width();
        var windowSm = 1024;
        var position = target.offset().top + adjust - $('.l-header').height();
        if (windowWidth <= windowSm) {
            var position = target.offset().top + adjust;
        }
        $('body, html, .wrapper').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});

$(function() {
    $('.js-faq').on('click', function () {
        $(this).next().slideToggle(300);
    });
});

(() => {
    const item = document.querySelectorAll('.js-inview');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('is-inview');
                // ターゲット要素の監視を停止
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '-10% 0px'
    });

    item.forEach(item => {
        observer.observe(item);
    });
})();