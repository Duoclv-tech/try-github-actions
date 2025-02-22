import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My React App</h1>
        <p className="description">
          This is a sample project using GitHub Actions for CI/CD
        </p>
        <div className="button-group">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="App-link"
            href="https://github.com/features/actions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore GitHub Actions
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;