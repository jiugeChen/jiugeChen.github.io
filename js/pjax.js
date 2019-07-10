init();

$(document).pjax('a:not(.fancybox):not([target="_blank"])', '#l_pjax', {
    fragment: '#l_pjax',
    timeout: 5000,
});
$(document).on('pjax:start', function () {
    NProgress.start();
});


$(document).on('pjax:send', function () {
});


$(document).on('pjax:complete', function () {
    pjax_init();
    if ($('#l_mathjax').length) {
        $.getScript(CONFIG.mathjax_cdn, function () {
            MathJax.Hub.Typeset();
        });
    }
    $.getScript(CONFIG.poem_api);
    NProgress.done();
});