import React from 'react';
import ReactDOM from 'react-dom';
require('./index.css');

class App extends React.Component{

    render(){
        return (
            <div>
                <h1>True</h1>
            </div>
        )
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
