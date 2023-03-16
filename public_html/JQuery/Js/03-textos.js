$(document).ready(function() {
    checkLinks();
    $('#add_button').removeAttr('disabled').click(function(){
         $('ul').prepend('<li><a href="'+$('#add_link').val()+'"></a></li>');
        $('#add_link').val('');
        checkLinks();     
    });

});

function checkLinks () {
        $('a').each(function(index) {
        var that = $(this);
        var enlace =that.attr("href");
        that.attr('target','_blank');
        
        that.text(enlace);
    });
}
