import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch products from JSON file
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}products.json`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Calculate total cart items
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app">
      <header className="header">
        <h1>📦 EBay Store</h1>
        <button className="cart-btn" onClick={() => setShowCart(!showCart)}>
          🛒 Cart ({cartCount})
        </button>
      </header>

      <main className="main">
        {loading ? (
          <p>Loading products...</p>
        ) : showCart ? (
          <Cart
            cartItems={cart}
            onRemove={removeFromCart}
            onContinueShopping={() => setShowCart(false)}
          />
        ) : (
          <ProductList products={products} onAddToCart={addToCart} />
        )}
      </main>
    </div>
  );
}

export default App;
