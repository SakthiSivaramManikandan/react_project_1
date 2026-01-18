function CartModal({cart, cartModal, removeFromCart}) {

    return (
        <div>
            <h2>Cart Items</h2>

           
            {cart.length === 0 && <p>No items in the cart</p>}

          

            {cart.map((item) => (
                <div>
                    <img src={item.image} />
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <button onClick={() => removeFromCart(item.id)}>
                        Remove
                    </button>
                </div>
            ))}

         
            <button onClick={cartModal}>Close</button>

        </div>

    )
}

export default CartModal