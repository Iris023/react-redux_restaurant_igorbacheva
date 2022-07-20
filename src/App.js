
import './App.css';
import { Cart } from './Components/CartComponent/Cart';
import { Dishes } from './Components/DishesComponent/Dishes';
import  AllCategories  from './Components/FilterComponent/AllCategories';

function App() {
  return (
    <div className="App">
      <div className="block">
        <AllCategories />
        <Cart />
      </div>
      <div className="block">
        <Dishes />
      </div>
    </div>
  );
}

export default App;
