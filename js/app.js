$(function() {
    $('#nav-toggle').click(function() {
        if($('#app').css('margin-left') == '230px') {
            $('#sidenav').css('margin-left', '-230px');
            $('#app').css('margin-left', '0px');
        }else {
            $('#sidenav').css('margin-left', '0px');
            $('#app').css('margin-left', '230px');
        }
    });
});