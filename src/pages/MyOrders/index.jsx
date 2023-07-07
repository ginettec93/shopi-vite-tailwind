import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../components/Layout'
import OrdersCard from '../../components/OrdersCard'

function MyOrders() {
  const context = useContext(ShoppingCartContext)

  return (
    <>
      <Layout>
      <div className='flex items-center justify-center w-80 relative'>         
          <h1 className='font-medium text-xl'>My Orders</h1>
        </div>
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}  >
              <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts} />
            </Link>  
          ) )
        }      
      </Layout>
    </>
  )
}

export default MyOrders;