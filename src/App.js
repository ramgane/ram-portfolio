import { Toaster } from 'react-hot-toast';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Toaster />
      <Home />
    </Router>
  );
}

export default App;
