import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../components/Layout'
import OrderCard from '../../components/OrderCard'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = context.order?.length - 1

  return (
    <>
     <Layout>
        <div className='flex items-center justify-center w-80 relative py-6'>
          <Link to='/my-orders'>
              <ChevronLeftIcon className='w-6 h-6 text-black cursor-pointer absolute left-0' />
          </Link>         
          <h1 className='font-medium text-xl'>My Order</h1>
        </div>
        <div className='flex flex-col w-80'>
        {
            context.order?.[index]?.products.map(product => (
                <OrderCard 
                key={product.id} 
                id={product.id} 
                title={product.title} 
                price={product.price} 
                imageUrl={product.images} 
                />
            ))
        }
        </div>
      </Layout>
    </>
  )
}

export default MyOrder;