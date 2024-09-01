$(document).ready(function() {
    $("#tam").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".one").filter(function() {
            $(this).toggle($(this).find("#item").text().toLowerCase().indexOf(value) > -1);
        });
    });
});
