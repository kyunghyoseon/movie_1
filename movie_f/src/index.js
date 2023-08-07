import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootNode = document.getElementById('root');

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.createRoot(rootNode).render(<App />);
