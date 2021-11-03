function App() {
  
  function Header() {
    return (
      <header>Fantasylist</header>
    )
  }

  function Navbar() {
    return (
      <nav>
        <ul>
          <li>Home</li>
          <li>Shops</li>
        </ul>
      </nav>
    )
  }

  function Search() {
    return (
      <form>
        <input />
      </form>
    )
  }

  function Shops() {
    return (
      <div>
        <p>Click on a shop to go to</p>
        {/*Multiple shop*/}
        <Shop />
      </div>
    )
  }

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Search />
      <Shops />
    </div>
  );
}

export default App;
