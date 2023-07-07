import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

    //Open-Close mobile menu. 
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
        const openMobileMenu = () => setIsMobileMenuOpen(true)
        const closeMobileMenu = () => setIsMobileMenuOpen(false)

    //Shopping Cart -- Increment quantity 
    const [count, setCount] = useState(0)

    //Shopping Cart -- Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    //Shopping Cart -- Order
    const [order, setOrder] = useState([])

    //Product Detail -- Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
        const openProductDetail = () => setIsProductDetailOpen(true)
        const closeProductDetail = () => setIsProductDetailOpen(false)

    //Product Detail -- Show product
    const [productToShow, setProductToShow] = useState({})

    //Checkout Side Menu -- Open/Close
    const [isCheckoutSideMenuOpen, setCheckoutSideMenuOpen] = useState(false)
        const openCheckoutSideMenu = () => setCheckoutSideMenuOpen(true)
        const closeCheckoutSideMenu = () => setCheckoutSideMenuOpen(false)

    //Get products
    const [items, setItems] = useState(null)
    
    //Filter items by title
    const [filteredItems, setFilteredItems] = useState(null)

    //Search products by title, category
    const [searchByTitle, setSearchByTitle] = useState(null)
    const [searchByCategory, setSearchByCategory] = useState(null)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))  
      }, [])

      const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      }

      const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
      }

      const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }
        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()) )
        }
        if (!searchType) {
            return items
        }
    }
      useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (searchByCategory && !searchByTitle) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByCategory && !searchByTitle) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))     
      }, [items, searchByTitle, searchByCategory])

    return (   
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow, 
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order, 
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory,           
            openMobileMenu,
            closeMobileMenu,
            isMobileMenuOpen,
        }} >
            { children }
        </ShoppingCartContext.Provider>     
    )

}