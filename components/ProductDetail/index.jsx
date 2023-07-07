import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import '../../components/ProductDetail/styles.css'
import { XMarkIcon } from '@heroicons/react/24/solid'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    
    return (
        <aside className= {` ${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div onClick={() => context.closeProductDetail()}>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer'/>
                </div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-60 rounded-lg' src={context.productToShow.images ? context.productToShow.images[0]: ''} alt={context.productToShow.title} />
                <p className='flex flex-col'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-md'>{context.productToShow.description}</span>
                </p>           
            </figure>         
        </aside>
    )
}

export default ProductDetail