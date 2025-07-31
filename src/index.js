import React from 'react';
import ReactDOM from 'react-dom/client';
import Widget from './Widget.jsx';
import Footer from './components/Footer.jsx';


const App = () => (
  <div>
    <Widget />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
