import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { NavLink } from 'react-router-dom'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Bars4Icon } from '@heroicons/react/24/solid'
import '../Navbar/styles.css'

const Navbar = () => {
    const context = useContext(ShoppingCartContext)

    const activeStyle = 'underline underline-offset-4'
   
    return (
        <nav className='bg-white flex justify-between items-center fixed z-10 w-full top-0 py-5 px-8 text-sm font-light'>
            <div onClick={()=> {context?.openMobileMenu()}} className='menu-icon inactive'>
                <Bars4Icon className='relative w-12 h-12 text-black bg-white cursor-pointer' />
            </div>          
            <ul className='flex items-center gap-3'>
                <li className='font-bold text-lg navbar-mobile-title'>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' 
                    onClick= {() => context.setSearchByCategory()}
                    className='navbar-items'>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'  
                    onClick={() => context.setSearchByCategory('clothes')}
                    className='navbar-items'>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics' 
                    onClick={() => context.setSearchByCategory('electronics')} 
                    className='navbar-items'>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures'  
                    onClick={() => context.setSearchByCategory('furnitures')}
                    className='navbar-items'>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys' 
                    onClick={() => context.setSearchByCategory('toys')}
                    className='navbar-items'>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others' 
                    onClick={() => context.setSearchByCategory('others')}
                    className='navbar-items'>
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-3'>
                <li className='navbar-items font-light'>
                    ginettecarrizo@gmail.com
                </li>
                <li>
                    <NavLink to='/my-orders'  className='navbar-items'>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'  className='navbar-items'>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'  className='navbar-items'>
                        Sign Out
                    </NavLink>
                </li>
                <li className='flex items-center shopping-cart-mobile-icon'>
                    <NavLink to='/'>
                    <ShoppingCartIcon className='h-6 w-6 text-black cursor-pointer' />                 
                    </NavLink>
                    <div>{context.cartProducts.length}</div> 
                </li>
            </ul>
        </nav>
    )
}

export default Navbar