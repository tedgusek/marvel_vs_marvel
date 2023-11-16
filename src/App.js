import logo from './Marvel_Logo.png';
import CharacterList from './components/characterList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id='marvelLogoWrapper'><img id='marvelLogo' src={logo} alt="logo" />VS<img id='marvelLogo' src={logo} alt="logo" /></div>
        <br/>
        <div id='mvm'>
          <CharacterList/>
          <div> VS </div>
          <div>Marvel Component 2</div>
        </div>
      </header>
    </div>
  );
}

export default App;
