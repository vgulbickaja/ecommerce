import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Navbar } from "./Components/Navbar";
import { ShopContextProvider } from "./Context/ShopContextProvider";
import { Cart } from "./Pages/Cart/Cart";
import { Shop } from "./Pages/Shop/Shop";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
