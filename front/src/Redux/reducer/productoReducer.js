import { CLEAR_ERRORS, ALL_PRODUCTS_FAIL, ALL_PRODUCTS_REQUEST ,ALL_PRODUCTS_SUCCESS } from "../constants/productoConstants"

export const productosReducer = (state = {productos: []} ,action) => {

    switch(action.type){

        case ALL_PRODUCTS_REQUEST:
            return{
                loading:true,
                productos: []
            }

        case ALL_PRODUCTS_SUCCESS:
            return{
                loading:false,
                cantidad : action.payload.cantidad,
                productos: action.payload.allProductos,
            }

        case ALL_PRODUCTS_FAIL:
            return{
                loading:false,
                error: action.payload
            }
            
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }

        default: 
            return state;
    }
}