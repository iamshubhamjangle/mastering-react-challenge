function App() {
  return (
    <div className="App">
      <h1>You would love ❤</h1>
      <TrueMumbaiker />
      <FakeMumbaiker />
    </div>
  );
}

export default App;

function TrueMumbaiker() {
  return <img src="/images/Vada_Pav.png" alt="Vada Pav" />;
}

function FakeMumbaiker() {
  return <img src="/images/Momos.png" alt="Momos" />;
}
