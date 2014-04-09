$(document).ready(function () {

    $("#jquery").box({ "height": "300px" });
    $("#javascript").box({ "height": "300px" }).hide();

    $("#jqueryCollapsed").box({ "height": "30px" }).hide();
    $("#javascriptCollapsed").box({ "height": "30px" }).hide();

    $("#jqup").box({ "height": "30px", "border-top-width": "0px", "float": "left" });
    $("#jsup").box({ "height": "30px", "border-top-width": "0px", "float": "left" }).hide();

    $("#jquery #btntrigger").click(function () {
        $.event.trigger({
            type: "TextAvailable",
            eventData: $("#jquery #txtText").val()
        });
    });

    $(document).on("TextAvailable", function (evt) {
        var text = "<li>" + evt.eventData + "</li>";
        $("#jquery ul").prepend(text);
    });

    $("#btnjs").click(function () {
        $("#javascript").show("fast");
        $("#jsup").show();
        $(this).attr("disabled", "false");
    });

    $("#javascript #btntrigger").click(function () {
        var event = new CustomEvent("TextAvailable1", { "detail": { "message": $("#javascript #txtText").val()} });
        document.dispatchEvent(event);
    });

    document.addEventListener("TextAvailable1", function (e) {
        var text = "<li>" + e.detail.message + "</li>";
        $("#javascript ul").prepend(text);
    });

    $("#jqueryCollapsed #btnDown").click(function () {
        $("#jqueryCollapsed").hide();
        $("#jquery").css({ "height": "30px" }).show();
        $("#jqup").show();
        $("#jquery").animate({ height: "300px", opacity: 100 }, { queue: false, duration: 500 });
    });

    $("#javascriptCollapsed #btnDown").click(function () {
        $("#javascriptCollapsed").hide();
        $("#javascript").css({ "height": "30px", "opacity": "0.5" }).show();
        $("#jsup").show();
        $("#javascript").animate({ height: "300px", opacity: 100 }, { queue: false, duration: 500 });
    });

    $("#jqup #btnUp").click(function () {
        $("#jquery").animate({ height: "0px", opacity: 0 }, { queue: false, duration: 500, complete: function () {
            $("#jquery").hide();
            $("#jqup").hide();
            $("#jqueryCollapsed").show();
        }
        });
    });

    $("#jsup #btnUp").click(function () {
        $("#javascript").animate({ height: "0px", opacity: 0 }, { queue: false, duration: 500, complete: function () {
            $("#javascript").hide();
            $("#jsup").hide();
            $("#javascriptCollapsed").show();
        }
        });
    });

    //Drawer code
    $("#Div1").box({ "height": "300px" });
    $("#Div2").box({ "height": "30px", "border-top-width": "0px", "float": "left" });

    $("#Div1").kendoMobileDrawer({
        container: "#Div2"
    });

    $("#Button2").click(function () {
        $("#Div1").data("kendoMobileDrawer").hide();
        window.setInterval(function () { $("#Div1").data("kendoMobileDrawer").show(); }, 5000);
    });
    //Drawer code
});