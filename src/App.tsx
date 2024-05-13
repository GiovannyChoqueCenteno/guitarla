import Header from "./components/Header"
import Guitar from "./components/Guitar"
import { db } from "./data/db"
import { useCart } from "./hooks/useCart"

const App = () => {
  
     const {cart,addToCart,increaseQuantity,decreaseQuantity,removeFromCart,isEmpty,cartTotal} =useCart()
    
  return (
    <>
    <Header 
        cart={cart} 
        removeFromCart={removeFromCart}  
        increaseQuantity={increaseQuantity} 
        decreaseQuantity={decreaseQuantity}
        isEmpty ={isEmpty}
        cartTotal={cartTotal}
        />
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

            <div className="row mt-5">
            {db.map(guitar =>
            <Guitar  key={guitar.id} guitar={guitar} addToCart={addToCart}/>
                )}
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
</>

  )
}

export default App