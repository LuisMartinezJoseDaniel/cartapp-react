import { Product } from "../interfaces";
import { ICart } from "../interfaces/cart";

export interface CartState {
  cartItems: ICart[];
}
type CartActionType =
  | { type: "[Cart] - AddProductCart"; payload: Product }
  | { type: "[Cart] - UpdateProductCart"; payload: Product }
  | { type: "[Cart] - DeleteProductCart"; payload: number | string };

export const cartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  switch (action.type) {
    case "[Cart] - AddProductCart":
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            product: action.payload,
            quantity: 1,
            total: action.payload.price * 1,
          },
        ],
      };
    case "[Cart] - UpdateProductCart":
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.product.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }

          return item;
        }),
      };
    case "[Cart] - DeleteProductCart":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
