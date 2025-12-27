import React from "react";

const ProductsContext = React.createContext({
    products: [],
    toggleFav: (id) => {}
});

export default ProductsContext;
