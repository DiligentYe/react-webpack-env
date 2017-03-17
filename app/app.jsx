import React from 'react';
import ReactDOM, {render} from 'react-dom';
import Deskmark from './deskmark.jsx';

// require('../node_modules/bootstrap/dist/css/bootstrap-theme.css');
require('../build/index.scss');


var root = document.createElement('div');
root.className='wrapper';
document.body.appendChild(root);

render(<Deskmark/>, root);


