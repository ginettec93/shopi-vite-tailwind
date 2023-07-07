import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { NavLink } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'

const MobileMenu = () => {
    const context = useContext(ShoppingCartContext)
    

        return (
            <aside className={`${context.isMobileMenuOpen ? 'flex' : 'hidden'} flex-col fixed top-20 left-0 w-full h-auto text-md px-6 py-6 mb-3 bg-white border border-black`}>
            <div>
                <ul>
                <li className='flex justify-between'>
                    <NavLink to='/' 
                    onClick= {() => {context.setSearchByCategory(context?.closeMobileMenu())}}>
                        All
                    </NavLink>
                    <div onClick={()=> {context?.closeMobileMenu()}}>
                        <XMarkIcon className='w-6 h-6 text-black bg-white cursor-pointer' />
                    </div>
                </li>
                <li>
                    <NavLink to='/clothes'  
                    onClick={() => context.setSearchByCategory('clothes', context?.closeMobileMenu())}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics' 
                    onClick={() => context.setSearchByCategory('electronics', context?.closeMobileMenu())}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures'  
                    onClick={() => context.setSearchByCategory('furnitures', context?.closeMobileMenu())}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys' 
                    onClick={() => context.setSearchByCategory('toys', context?.closeMobileMenu())}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others' 
                    onClick={() => context.setSearchByCategory('others', context?.closeMobileMenu())}>
                        Others
                    </NavLink>
                </li>
        </ul>
        <ul className='mt-6'>
        <li className='font-light'>
                    ginettecarrizo@gmail.com
                </li>
                <li>
                    <NavLink to='/my-orders' onClick={()=>{context?.closeMobileMenu()}}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account' onClick={()=>{context?.closeMobileMenu()}}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in' onClick={()=>{context?.closeMobileMenu()}}>
                        Sign Out
                    </NavLink>
                </li>
        </ul>
    </div>
    </aside>
        )
    }

export default MobileMenu