import { ADD_TO_CART } from '../../constants/types'


export function addNewItem(item) {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}