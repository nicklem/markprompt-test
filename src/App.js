import './App.css';
import { Markprompt } from "markprompt"

function App() {
  return (
    <div className="main">
      <h1>The Codacy Oracle</h1>
      <p>Ask away!</p>
      <Markprompt
        projectKey="4xFIDV7Nt4eNr1gXvNTKZS1bXavzEkDj"
        model="gpt-4"
      />
    </div>
  );
}

export default App;
