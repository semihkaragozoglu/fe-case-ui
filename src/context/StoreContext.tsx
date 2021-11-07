import React from "react";

import { Category } from "../components/FilterCategory";
import { Product } from "../components/ProductItem";

type State = {
  isLoading: boolean;
  products: object;
  categories: object;
  filter: object;
};

type Action = { type: string; payload: any };

export const initialState = {
  isLoading: true,
  products: [],
  categories: [],
  filter: {
    keyword: undefined,
    color: undefined,
    brand: undefined,
  },
};

const StoreContext = React.createContext(initialState);

function storeReducer(state: State, action: Action): State {
  switch (action.type) {
    case "INITIAL_SUCCESS": {
      return {
        ...state,
        products: action.payload.products,
        categories: action.payload.categories,
      };
    }

    case "SET_FILTER_SUCCESS": {
      let type;
      if (action.payload.title === "Renk") {
        type = "color";
      }
      if (action.payload.title === "Marka") {
        type = "brand";
      }
      return {
        ...state,
        filter: {
          ...state.filter,
          // @ts-ignore: Unreachable code error
          [type]:
          // @ts-ignore: Unreachable code error
            state.filter[type] !== action.payload.value
              ? action.payload.value
              : undefined,
        },
      };
    }

    default:
      return { ...state };
      break;
  }
}

function useStore() {
  const context = React.useContext(StoreContext);

  if (!context) {
    throw new Error(`error`);
  }

  // @ts-ignore: Unreachable code error
  const [state, dispatch] = context;

  const setInitialValues = (data: {
    categories: Category[];
    products: Product[];
  }) => {
    dispatch({ type: "INITIAL_SUCCESS", payload: data });
  };

  const setFilter = (data: {
    title: undefined | string;
    value: undefined | string;
  }) => {
    dispatch({ type: "SET_FILTER_SUCCESS", payload: data });
  };

  // const loginSuccess = (data) =>
  //   dispatch({ type: "LOGIN_SUCCESS", payload: data });

  // const loginFail = (data) => dispatch({ type: "LOGIN_FAIL", payload: data });

  // function login() {
  //   loginStart();
  //   //loading
  //   // api call
  //   setTimeout(() => {
  //     loginSuccess({ name: "semih", surname: "kg" });
  //   }, 5000);
  // }

  return {
    products: state.products,
    categories: state.categories,
    filter: state.filter,
    setInitialValues,
    setFilter,
  };
}

function StoreProvider(props: any) {
  const [state, dispatch] = React.useReducer(storeReducer, initialState);

  const value = React.useMemo(() => [state, dispatch], [state]);
  return <StoreContext.Provider value={value} {...props} />;
}

export { StoreProvider, useStore };
