import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <nav className="bg-purple-800 text-white">
      <ul className="px-2 py-4 flex space-x-3">
        <li>Home</li>
        <li>About</li>
        <li>Categoleous</li>
        <li>Contact-us</li>
      </ul>
    </nav>
  );
}

export default App;
