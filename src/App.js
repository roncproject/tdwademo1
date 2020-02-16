import React, {useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Info from './components/info/info';
import Data from './components/data/data';
import MyChart from './components/mychart/mychart';
//import { render } from 'react-dom';


const App = () => {
  let [tempSymbol, setTempSymbol] = useState('F');
  
  return(
    <main>


      <Info tempSymbol={tempSymbol} setTempSymbol={() => setTempSymbol(tempSymbol === 'T' ? 'C' : 'T')} />
      <MyChart/>
           

    </main>

//<Data/>
//<Info tempSymbol={tempSymbol} setTempSymbol={() => setTempSymbol(tempSymbol === 'T' ? 'C' : 'T')} />
);
}
//render(<App />, document.getElementById('root'));
// function App() {
//   return (
//     <main>
//       Hello
//       </main>
//     //<div className="App">
//     //  <header className="App-header">
//     //    <img src={logo} className="App-logo" alt="logo" />
//     //    <p>
//     //      Show me Finance 
//     //    </p>
//     //    <a
//     //      className="App-link"
//      //     href="https://reactjs.org"
//      //     target="_blank"
//     //      rel="noopener noreferrer"
//     //    >
//     //      Toxic Debt Web App DEMO 1
//     //    </a>
//     //  </header>
//     //</div>
//   );
// }

export default App;
