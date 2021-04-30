import logo from './logo.svg';
import './App.css';
import UserTable from './components/UserTable/UserTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<UserTable />
      </header>
    </div>
  );
}

export default App;
