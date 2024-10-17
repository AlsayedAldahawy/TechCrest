import { createContext, useEffect } from "react";
import { useState } from 'react';
import axios from "axios";

export const ProductsContext=createContext();

export const ProductsProvider=({children})=>{
const [products,setProducts]=useState([]);


const updateProducts=(newProducts)=>{
setProducts(newProducts);
}; 

useEffect(()=>{
 axios.get("http://localhost:5000/products").then((response)=>{
const backendData=response.data;
const frontendData=backendData.map((item)=>{
    return {
        ...item,
        _id:item._id,
        title: item.title,
        image1: item.image1,
    };
});
    setProducts(frontendData);
});
},[]);
 
return(
<ProductsContext.Provider value={{products,updateProducts}}>
{children}
</ProductsContext.Provider>
);
};
export default ProductsProvider;