import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" flex h-full">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
