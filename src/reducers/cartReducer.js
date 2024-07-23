/**
 * Represents the initial state of the cart.
 * Retrieves the cart data from the local storage, or returns an empty array if no data is found.
 *
 * @type {Array}
 */
export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

/**
 * Updates the local storage with the provided state.
 *
 * @param {Object} state - The state object to be stored in local storage.
 */
const updateLocalStorage = (state) => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

/**
 * Reducer function for managing the shopping cart state.
 * @param {Array} cart - The current shopping cart state.
 * @param {Object} action - The action object that describes the state change.
 * @returns {Array} - The updated shopping cart state.
 * @throws {Error} - If the action type is not recognized.
 */
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

