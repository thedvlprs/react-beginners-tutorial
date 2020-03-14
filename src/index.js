import React from 'react';
import ReactDOM from 'react-dom';
import App from './Api'
import './index.css';


if (module.hot) {
    module.hot.accept();
}


ReactDOM.render(<App />, document.getElementById('root'));



