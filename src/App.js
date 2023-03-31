import './App.css';
import { Markprompt } from "markprompt"

function App() {
  return (
    <div className="main">
      <h1>The Codacy Oracle</h1>
      <Markprompt
        projectKey="4xFIDV7Nt4eNr1gXvNTKZS1bXavzEkDj"
        model="gpt-4"
        placeholder="What do you want to learn today?"
      />
    </div>
  );
}

export default App;
