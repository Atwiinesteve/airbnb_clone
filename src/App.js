// Importing components
import Navbar from '../src/components/Navbar';
import PricesBar from '../src/components/PriceBar';
import IconsMenu from '../src/components/IconsMenu';

// Importing styles
import './App.css';


function App() {

  return (
    <div className="main--container">

      {/* Prices Top bar */}
      <PricesBar />
      
      {/* Navigation Bar */}
      <Navbar />

      {/* Icons Menu */}
      <IconsMenu />

    </div>
  );

}

export default App;
