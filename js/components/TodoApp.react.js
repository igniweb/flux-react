var TodosStore = require('../stores/TodosStore');

function getTodoState() {
    return {
        allTodos: TodosStore.getAll(),
        areAllComplete: TodosStore.areAllComplete()
    };
}

var TodoApp = React.createClass({

    getInitialState: function () {
        return getTodoState();
    }

});
