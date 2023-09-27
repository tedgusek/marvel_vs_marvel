import logo from './Marvel_Logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id='marvelLogo'><img id='marvelLogo' src={logo} alt="logo" />VS<img id='marvelLogo' src={logo} alt="logo" /></div>
        <br/>
        <div id='mvm'>
          <div>Marvel Component 1</div>
          <div> VS </div>
          <div>Marvel Component 2</div>
        </div>
        <p>
          first commit Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
