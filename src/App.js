import NumbersRow from './components/NumbersRow';
import React from 'react';
import './qwixx.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

              <div className="width90">
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
