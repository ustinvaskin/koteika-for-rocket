import React from 'react';
import Header from './components/header'
import AfterHeader from './components/afterHeader'
import Cards from './components/cards'
import Aside from './components/aside'
function App() {
  return (
    <div className="App">
      <div class="container">
        <Header />
        <br />
        <br />
        <br />
        <br />
        <AfterHeader />
        <div class="container">
          <div class="columns">
            <div class="column">
              <Aside />
            </div>
            <div class="column ">
              <Cards />
              {/* Need to figur out hoe to sort cards in an array -> props */}
            </div>
            <div class="column ">
              <Cards />
            </div>
            <div class="column ">
              <Cards />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
