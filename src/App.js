import './App.css';
import InputText from './Componentes/InputText.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-div">
            <p>
              Lista de Quehaceres <br/>
            </p>
            <InputText/>
            <p>
              . <br/>
            </p>
        </div>
      </header>
    </div>
  );
}

export default App;
