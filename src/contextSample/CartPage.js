import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

function CartPage() {


    const { cart, setCart } = useContext(CartContext)

    let totalPrice = 0;

    cart.forEach((item) => {
        totalPrice = totalPrice + (item.unitPrice * item.quantity)
    })


    const emptyCart = () => {
        setCart([]);
    }

    const removeProduct = (id) => {

        let newCart = cart.filter(q => q.id != id);

        setCart([...newCart])
    }

    return (
        <>
        <h1>Cart Total Price - {totalPrice.toFixed(2)}</h1>
            <ul>
                {
                    cart.map((item, key) => {

                        return (<li key={key}>
                            {item.name} -- Quantity: {item.quantity} -- Price: {item.unitPrice.toFixed(2)} -- Total {(item.unitPrice * item.quantity).toFixed(2)}
                            <button onClick={() => removeProduct(item.id)}>Remove Product</button>
                        </li>)

                    })
                }
            </ul>
            <button onClick={() => emptyCart()}>Empty Cart</button>


        </>
    )
}

export default CartPage
