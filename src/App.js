import Header from './Header'; //Include Header
import Footer from './Footer';
import AllProducts from './AllProducts'
import SingleProduct from './SingleProduct';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/CrazyGrowShop">
        <Header></Header>
          <Routes>
            <Route path="/" element={<AllProducts />} />
            <Route path="/producto" element={<SingleProduct />} />
          </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;