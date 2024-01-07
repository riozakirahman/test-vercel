import "./App.css";

function App() {
  const fetchData = async () => {
    console.log(`${process.env.REACT_APP_API_URL}`);
    const response = await fetch(`${process.env.REACT_APP_API_URL}/`);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <button onClick={fetchData}>Fetch</button>
    </div>
  );
}

export default App;
