import React from 'react';
import ReactDOM from 'react-dom/client';
import Widget from './Widget.jsx';


const App = () => (
  <div>
    <h1>Remote App Ana Sayfa</h1>
    <Widget />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
