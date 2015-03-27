$.fn.sidenav = function(){
    var func = {
        open: function(elem){
            var attr = elem.attr('data-activates');
            var menu_id = $('#' + attr);
            menu_id.addClass('active');

            var overlay = $("<div class='nav-overlay' data-closed='" + attr +"'' />");
            $('body').append(overlay);
            setTimeout(function(){
                overlay.addClass('active');
            }, 10);

            overlay.click(function(){
                var $that = $(this);
                var menu = $that.attr('data-closed');
                func.close($('#' + menu), $that);
            })
        },
        close: function(elem, cont){
            cont.removeClass('active');
            setTimeout(function(){
                cont.remove();
            }, 500)

            elem.removeClass('active');
        },
        init: function(elem){}
    }
    return this.each(function(){
        var $that = $(this);

        $that.click(function(e){
            e.preventDefault();
            var button = $(this);
            func.open(button);
        });
    });
}

$(document).ready(function(){
    $('.toggle-sidenav').sidenav();
});