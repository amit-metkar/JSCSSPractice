var Appointment = Backbone.Model.extend({});
var appointment = new Appointment({ title: "My Appointment" });
var AppointmentView = Backbone.View.extend({
    render: function () {
        var html = "<li>" + this.model.get('title') + "</li>";
        $(this.el).html(html);
    },
    model: appointment
});
//var appointmentView = new AppointmentView();

appointment.set('title', 'My Backbone Hurts');

AppointmentView.render();
$('#app').html(AppointmentView.el);
