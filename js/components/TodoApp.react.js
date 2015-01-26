var React = require('react');
var TodosStore = require('../stores/TodosStore');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var MainSection = require('./Footer.react');

function getTodoState() {
    return {
        allTodos: TodosStore.getAll(),
        areAllComplete: TodosStore.areAllComplete()
    };
}

var TodoApp = React.createClass({

    getInitialState: function () {
        return getTodoState();
    },

    componentDidMount: function () {
        TodosStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        TodosStore.removeChangeListener(this._onChange);
    },

    render: function () {
        return (
            <div>
                <Header />
                <MainSection allTodos={this.state.allTodos} areAllComplete={this.state.areAllComplete} />
                <Footer allTodos={this.state.allTodos} />
            </div>
        );
    },

    _onChange: function () {
        this.setState(getTodoState());
    }

});

module.exports = TodoApp;
