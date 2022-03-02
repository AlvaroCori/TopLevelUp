import logo from './logo.svg';
import './App.css';
function title(mainImageUrl)
{
  return (
    <div>
        <img src={mainImageUrl}></img>
        
          <p>La siguiente app comienza aca.</p>
        </div>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <body>
        <h1>PRIMERA APP DE PRUEBA</h1>
        <div>{title("https://i.redd.it/olqp7fj5svs51.jpg")}</div>   
      </body>
    </div>
  );
}

export default App;
