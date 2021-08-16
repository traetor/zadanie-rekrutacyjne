function sierotki(){

    $('p, span, h1, h2, h3, h4, h5').not('.svgIcon').each(function(){
        if($(this).length > 0) {
            var $html = $(this).html();
            $html = $html.replace(/(\s)([\S])[\s]+/g, "$1$2&nbsp;");
            $html = $html.replace(/(\s)([^<][\S]{1})[\s]+/g,"$1$2&nbsp;");
            $html = $html.replace(/(\s)([\S])([\s])([\S])([\s])+/g,"$1$2 $4 ");
            //$html = $html.replace(/(\s)([\S])[\s]+/g,"$1$2 ");
            $html = $html.replace(/(\s)([^<][\S]{2})[\s]+/g,"$1$2&nbsp;");
            $(this).empty().html($html);
        }
    });
}

export { sierotki };