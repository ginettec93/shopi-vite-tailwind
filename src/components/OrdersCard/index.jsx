import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props 
    return (
        <div className='flex justify-between items-center mb-2 border border-black w-80 p-4 rounded-lg mt-4'>
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                <span className='font-light'>03.04.22</span>
                <span className='font-light'>{totalProducts} products</span>
                </p>
                </div> 
                <p className='flex items-center gap-2'>
                <span className='font-medium text-2xl'>${totalPrice}</span>
                <ChevronRightIcon className='w-6 h-6 text-black cursor-pointer' />
                </p>                           
            </div>
    )
}

export default OrdersCard