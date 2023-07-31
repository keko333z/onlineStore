import { Item } from "./Item";
import allProducts from "../products.json"
import { useEffect, useState } from "react";
import { Filter } from "./Filter";


export function Home(){
    const [products, setProducts] = useState([])
    const [maxPrice, setMaxPrice] = useState('0')
    
    const setMax = (p) => {
        setMaxPrice(p)
    }

    useEffect(()=>{
        (maxPrice.length > 1) ? setProducts(allProducts.products.filter(p => parseInt(p.price) <= parseInt(maxPrice))) :
        setProducts(allProducts.products)
    }, [maxPrice])
    console.log(maxPrice)
    return <div className="home-container">

        <Filter setMax={setMax}/>
        <div className="home-grid">
        
        
        
        {products ? products?.map(product => 
            <Item key={product.productId} product={product}/>
        ) : "Loading..."}
        
    </div>
    </div>
}