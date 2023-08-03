import { Item } from "./Item";
import alProducts from "../products.json"
import { useEffect, useState } from "react";
import { Filter } from "./Filter";


export function Home(){
    const [products, setProducts] = useState([])
    const [maxPrice, setMaxPrice] = useState('0')
    
    
    const setMax = (p) => {
        setMaxPrice(p)
    }
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                (maxPrice.length > 1) ? setProducts(json.filter(p => (parseInt(p.price) <= parseInt(maxPrice))&&(p.category!=="jewelery"))) :
                setProducts(json.filter(p=>p.category!=="jewelery"))
                
            }) 
    }, [maxPrice])
   

 
        
    
    return <div className="home-container">

        <Filter setMax={setMax}/>
        <div className="home-grid">
        
        
        
        {products ? products?.slice(0,18).map(product => 
            <Item key={product.id} product={product}/>
        ) : "Loading..."}
        
    </div>
    </div>
}