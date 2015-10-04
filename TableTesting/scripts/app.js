


$(document).ready(function () {
    var i = 1;
    function add() {
        var n = $("#addNombre").val();
        var a = $("#addApellidos").val();

        var row = "<tr><td>"+ i++ +"</td><td>" + n + "</td><td>" + a + "</td></tr>";

        $("#DataContentZone").append(row);
    }


    $("#btnAdd").click(add);


});
