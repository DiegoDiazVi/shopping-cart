export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

const updateLocalStorage = (state) => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export function cartReducer(cart, action) {
    switch (action.type) {
        case 'ADD_CART':{
            const productInCartIndex = cart.findIndex(item => item.id === action.product.id)
            if (productInCartIndex >= 0) {
                const newCart = structuredClone(cart);
                newCart[productInCartIndex].quantity += 1
                updateLocalStorage(newCart)
                return newCart
            }
            const newCart = [...cart, {...action.product, quantity: 1 }]
            updateLocalStorage(newCart)
            return newCart
        }
        case 'DELETE_CART':{
            updateLocalStorage([])
            return []
        }
        case 'REMOVE_PRODUCT_CART':{
            const newCartWithoutProduct = cart.filter(item => item.id !== action.id)
            updateLocalStorage(newCartWithoutProduct)
            return newCartWithoutProduct
        }
        default:
            throw new Error('Accion no conocida')
    }
}

