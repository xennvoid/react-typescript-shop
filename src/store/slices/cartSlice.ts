import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../'
import { IProduct } from '../../types/product'

export interface IProductWithQuantity extends IProduct {
    quantity: number
}

interface CartState {
    items: IProductWithQuantity[],
}

const initialState: CartState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<{ item: IProduct, quantity: number }>) {
            const findItem = state.items.find(item => item.id === action.payload.item.id)
            if (findItem)
                state.items = state.items.map(item => {
                    if (item.id === findItem.id)
                        return { ...findItem, quantity: item.quantity + action.payload.quantity }
                    return item
                })
            else
                state.items.push({ ...action.payload.item, quantity: action.payload.quantity })
        },
        changeCartProductQuantity(state, action: PayloadAction<{ item: IProduct, quantity: number }>) {
            const findItem = state.items.find(item => item.id === action.payload.item.id)
            if (findItem)
                findItem.quantity = action.payload.quantity
        },
        removeFromCart(state, action: PayloadAction<number>) {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
    }
})

export const { addToCart, changeCartProductQuantity, removeFromCart } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCartItems = (state: RootState) => state.cart.items
export const selectCartItemsLength = (state: RootState) => state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
export const selectCartAmount = (state: RootState) => state.cart.items.reduce((acc, item) => acc + (item.discounted_price || item.price) * item.quantity, 0)


export default cartSlice.reducer