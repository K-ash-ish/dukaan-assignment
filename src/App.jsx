import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="border-2 border-black flex h-full">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
