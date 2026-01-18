import { useEffect, useState } from "react";
import CartModal from "./components/CartModal";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";


import "./App.css";


function App() {
  

  const [products , setProducts]=useState([]);

  const [cart , setCart]=useState([]);

  const [isCartOpen, setIsCartOpen]=useState(false);



  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>setProducts(data));
  })

const addToCart =(product)=>{
  const exists = cart.find((item) => item.id === product.id);

  if (exists) {
    alert("Item is already added to the cart")
  } else {
    // add the new item to the cart
    setCart([
      ...cart,
      product
    ])
}
}




const removeFromCart = (id) => {
setCart(cart.filter((item) => item.id !== id))}

  return (
    <div>
      <Navbar cartCount={cart.length} openCart={() => setIsCartOpen(true)} />
      <ProductList products={products} addToCart={addToCart} />

      {/* cart modal */}
      {isCartOpen && (
        <CartModal
          cart={cart}
          cartModal={() => setIsCartOpen(false)}
          removeFromCart={removeFromCart} />
      )}</div>)}



export default App;
