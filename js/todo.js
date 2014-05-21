///////////////////////////////////// MODEL-START /////////////////////////////////////
var Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    },
    validate: function (attributes) {
        if (attributes.title === undefined) {
            return "remeber to set title for your todo";
        }
        if (attributes.title === null || attributes.title === '') {
            return "Title can't be null or empty";
        }
    },
    initialize: function () {
        console.log('Model is initialized here.');
        this.on('change', function (e) {
            console.log('model changed' + e);
        });
        this.on('change:title', function (e) {
            console.log('model changed' + e);
        });
        this.on('invalid', function (model, error) {
            console.log(error);
        });
    },
    setTitle: function (t) {
        this.set({
            title: t
        });
    }
});
///////////////////////////////////// MODEL-END /////////////////////////////////////

var todo3 = new Todo();
todo3.set({ completed: true }, { validate: true });

var todo1 = new Todo();
console.log(JSON.stringify(todo1));

var todo2 = new Todo({
    title: 'Check all properties in console',
    completed: true
});
console.log(JSON.stringify(todo2));

var myTodo = new Todo({
    title: 'set through instanciation'
});
console.log(JSON.stringify(myTodo));

myTodo.set({ title: 'set throgh model.set().' });
console.log(JSON.stringify(myTodo));

myTodo.set({
    title: 'both attributes set throgh model.set().',
    completed: true
});
console.log(JSON.stringify(myTodo));

///////////////////////////////////// VIEW-START /////////////////////////////////////

var TodoView = Backbone.View.extend({
    tagName: 'li',
    todoTpl: _.template($("#item-template").html()),
    events: {
        'dblclick label': 'edit',
        'keypress .edit': 'updateOnEnter',
        'blur .edit': 'close'
    },
    initialize: function (options) {
        this.$el = $("#todo");
        this.options = options || {};
    },
    render: function () {
        this.$el.html(this.todoTpl(this.model.toJSON()));
        this.input = this.$('.edit');
        return this;
    },
    edit: function () {

    },
    close: function () {

    },
    updateOnEnter: function (e) {

    }
});

///////////////////////////////////// VIEW-END /////////////////////////////////////

var todoView = new TodoView({el: $("#todo"), model: todo2 });

console.log(todoView.el);

//$("#todo").html(todoView.el);

todoView.render();