import logo from './logo.svg';
import './App.css';
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Register from "./register/register";
import Routes from "./components/routes"

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {

  const unmount = () => {
    var root = document.getElementById("overlay");
    root.parentNode.removeChild(root)
  }
  
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
    </div>
  );
}

export default App;
