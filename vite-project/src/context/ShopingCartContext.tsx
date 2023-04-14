import {
  Children,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import ShoppingCart from "../components/ShoppingCart";

interface ShopingCartContextProps {
  children: ReactNode;
}
interface ShopingCartContext {
  getItemQuantity: (id: number) => {};
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartItem: CartItem[];
  cartQuantity: number;
  openCart: () => void;
  closeCart: () => void;
}

interface CartItem {
  id: number;
  quantity: number;
}

const ShoppingCartContext = createContext({} as ShopingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShopingCartContextProps) {
  const [cartItem, setCartItem] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(true);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsClose(false);
  const cartQuantity = cartItem.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getItemQuantity(id: number) {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItem((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCartQuantity(id: number) {
    setCartItem((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItem((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItem,
        cartQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
