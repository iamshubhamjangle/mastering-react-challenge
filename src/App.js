import { useState } from "react";

function App() {
  const [items, setItem] = useState([]);
  const [input, setInput] = useState("");

  const handleClick = () => {
    setItem((prev) => [...prev, input]);
    // alert("Button was clicked");
  };

  return (
    <div className="App">
      <h3>Day 3: Event handling and State management</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        placeholder="Enter Item Name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Create</button>
    </div>
  );
}

export default App;
