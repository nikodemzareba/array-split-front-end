import { useState } from 'react';
import './App.css';

function App() {

  // Function to divide array into N groups
  function groupArrayElements(arr, N) {
    const size = Math.floor(arr.length / N);
    const remainder = arr.length % N;

    let groups = [];
    let start = 0;
    for (let i = 0; i < N; i++) {
      let end = (i < remainder) ? start + size + 1 : start + size;
      groups.push(arr.slice(start, end));
      start = end;
    }
    
    return groups;
  }

  const [result, setResult] = useState(null);

  if (!result) {
    setResult(groupArrayElements([1, 2, 3, 4, 5], 3));
  }

  return (
    <div className="App">
      <div className="Container">
        <h1 className="Header">Result:</h1>
        <p className="Output">{ JSON.stringify(result) }</p>
      </div>
    </div>
  );
}

export default App;
