
$(document).ready(function () {
    //preset
    $("#addNombre").val("Fran");
    $("#addApellidos").val("López");

    //row counter
    var i = 1;

    function add() {
        var n = $("#addNombre").val();
        var a = $("#addApellidos").val();

        var row = "<div class='erow'><span>" + i++ + "</span><span>" + n + "</span><span>" + a + "</span></div>";
        $(row).appendTo($("#DataContentZone"));
    }

    $("#btnAdd").click(add);


});
