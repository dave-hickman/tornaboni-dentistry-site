import "./styling/App.css";
import Contact from "./components/Contact";
import Images from "./components/Images";

function App() {
  return (
    <>
      <div className="title-container">
        <h1>Studio Dentistico</h1>
        <h2>Tornaboni</h2>
      </div>
      <Contact />
      <Images />
    </>
  );
}

export default App;
