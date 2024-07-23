export function cartReducer(cart, action) {
    switch (action.type) {
        case 'ADD_CART':{
            const productInCartIndex = cart.findIndex(item => item.id === action.product.id)
            if (productInCartIndex >= 0) {
                const newCart = structuredClone(cart);
                newCart[productInCartIndex].quantity += 1
                return newCart
            }
            const newCart = [...cart, {...action.product, quantity: 1 }]
            return newCart
        }
        case 'DELETE_CART':{
            return []
        }
        case 'REMOVE_PRODUCT_CART':{
            return cart.filter(item => item.id !== action.id)
        }
        default:
            throw new Error('Accion no conocida')
    }
}