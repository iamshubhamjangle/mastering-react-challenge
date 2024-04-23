function App() {
  return (
    <div>
      <h3>Day 5: API Request & Passing Data</h3>
      <button>Fetch Data</button>
      <Post />
    </div>
  );
}

export default App;

function Post() {
  return (
    <div class="card">
      <div class="img-container">
        <img
          src="https://images.unsplash.com/photo-1610932793632-6ba00bdffee8?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA2NzkwMDh8&ixlib=rb-4.0.3&q=85"
          width="336"
          alt=""
        />
      </div>
      <h1>Embracing Minimalism</h1>
      <p>
        From minimalist sculptures to minimalist paintings, this blog will
        inspire you to appreciate the beauty that lies in simplicity.
      </p>
    </div>
  );
}
