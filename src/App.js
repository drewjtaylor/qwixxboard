import NumbersRow from './components/numbersrow';
import React from 'react';
import './qwixx.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
          <div className="container">
              <div className="bg-red">
                  <NumbersRow />
              </div>
              <div className="bg-yellow">
                  <NumbersRow />
              </div>
              <div className="bg-green">
                  <NumbersRow />
              </div>
              <div className="bg-blue">
                  <NumbersRow />
              </div>
          </div>
    </div>
  );
}

export default App;
