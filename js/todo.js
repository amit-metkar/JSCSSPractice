var Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    },
    initialize: function () {
        console.log('Model is initialized here.');
        this.on('change', function (e) {
            console.log('model changed' + e);
        });
        this.on('change:title', function (e) {
            console.log('model changed' + e);
        });
    },
    setTitle: function (t) {
        this.set({
            title: t
        });
    }
});

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

var TodoView = Backbone.View.extend({
    tagName: 'li',
    todoTpl: _.template($("#item-template").html()),
    events: {
        'dblclick label': 'edit',
        'keypress .edit': 'updateOnEnter',
        'blur .edit': 'close'
    },
    initialize: function () {
        this.$el = $("#todo");
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

var todoView = new TodoView({ model: todo2 });