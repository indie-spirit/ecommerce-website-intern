import './App.css';
import ProductTile from './components/product/ProductTile'

function App() {
  return (
    <div className="App">
      <p>E Commerce Website</p>
      <ProductTile 
        imageSrc="/assets/products/pencil.webp"
        title="DOMS Pencil | Pack of 10"
        price="29.99"
      />
    </div>
  );
}

export default App;
