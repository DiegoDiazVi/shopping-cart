export function cartReducer(cart, action) {
    switch (action.type) {
        case 'ADD_CART':{
                const newCart = [...cart, { quantity: 1}]
                return newCart
            }
        case 'DELETE_CART':{
            const newCart = []
            return newCart
        }
        default:
            throw new Error('Accion no conocida')
    }
}