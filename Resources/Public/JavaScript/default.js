$.fn.sidenav = function(){
    var func = {
        open: function(elem){
            var menu_id = $('#' + elem.attr('data-activates'));
            menu_id.addClass('active');

            var overlay = '<div class="nav-overlay"></div>';
            $('body').append(overlay);
        },
        close: function(elem){},
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