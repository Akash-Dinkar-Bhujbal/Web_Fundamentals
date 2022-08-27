$(document).ready(
    function () {
        $("#b1").click(
            function () {
                var val1 = parseInt($("#t1").val());
                var val2 = parseInt($("#t2").val());
                var add = val1 + val2;
                $("#para").text("Addition is: " + add);
            }

        );

        $("#b2").click(function f2() {
            var val1 = parseInt($("#t1").val());
            var val2 = parseInt($("#t2").val());
            var sub = val1 - val2;
            $("#para").text("Subtraction is: " + sub);
        }
        );

    }
);