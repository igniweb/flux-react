# Flux / React

https://github.com/facebook/flux/examples/flux-todomvc

## Install & run

    npm install
    npm start

And open index.html in a browser

## Boilerplates

### React components

```javascript
var React = require('react');

var Component = React.createClass({

    render: function () {
        return (
            <div id="component">
            </div>
        );
    },

    _onEvent: function (event) {
        //
    }

});

module.exports = Component;
```
