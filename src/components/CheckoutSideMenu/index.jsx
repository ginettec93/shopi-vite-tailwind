import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'
import { totalPrice } from '../../utils'
import OrderCard from '../../components/OrderCard'
import '../../components/CheckoutSideMenu/styles.css'
import { XMarkIcon } from '@heroicons/react/24/solid'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '04.12.22', 
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice:  totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
    }

    return (
        <aside className= {` ${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} my-order flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>My Order</h2>
            <div onClick={() => context.closeCheckoutSideMenu()}>
                <XMarkIcon className='h-6 w-6 text-black cursor-pointer'/>
            </div>
        </div> 
        <div className='px-6 overflow-y-scroll flex-1'>
        {
            context.cartProducts.map(product => (
                <OrderCard key={product.id} id={product.id} title={product.title} price={product.price} imageUrl={product.images} handleDelete={handleDelete} />
            ))
        }
        </div>
        <div className='px-6'>
            <p className='flex justify-between items-center'>
                <span className='font-light'>Total:</span>
                <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
            </p>
            <Link to='/my-orders/last'>
                <button className='bg-black text-white py-3 w-full rounded-lg mt-3 mb-6' onClick={() => handleCheckout()}>Checkout</button>
            </Link>        
        </div>
    </aside>
    )
}

export default CheckoutSideMenu