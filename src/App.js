import Navbar from './Navbar';
import Home from './Home';

function App() {

  return (
    <div className="App">
    <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

// In above, we have to use "className" vs. just "class" because class is a reserved keyword in JS. The "className" is converted to just "class".

export default App;
