 
import './App.css';
import City from './components/city';
import Navbar from './components/navbar';
import Weathercards from './components/weathercards';

function App() {
  return (
    <div className="App">
       <Navbar />
       <City />
       <Weathercards />


       
    </div>
  );
}

export default App;
