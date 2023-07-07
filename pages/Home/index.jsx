import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'
import '../Home/styles.css'

function Home() {

  const context = useContext(ShoppingCartContext)

  const renderView = ()  => {
    if (context.filteredItems?.length > 0) {
          return (
            context.filteredItems?.map(item => (
            <Card key={item.id}  data={item} />
              ))) 
            } else {
          return (
            <h1 className='text-center text-xl'> Sorry! No matches were found </h1>
          )
        }}
  
      return (
      <Layout>
      <div className='flex flex-col items-center justify-center w-80 relative py-2 mb-4'>         
          <h1 className='text-center font-medium text-xl mb-2'>Exclusive Products</h1>
          <input type="text" 
          placeholder='Search products' 
          className='text-center w-80 border border-black rounded-lg py-2 focus:outline-none'
          onChange={(event) => context.setSearchByTitle(event.target.value)}/>
        </div>
        <div className='flex flex-wrap justify-center gap-4 w-full max-w-screen-lg cards-container'>
        {renderView()}
        </div> 
        <ProductDetail />
      </Layout>   
  )
}

export default Home