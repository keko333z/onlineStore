import { Item } from "./Item";
import { useEffect, useState } from "react";
import { FilterPrice } from "./FilterPrice";
import { FilterCat } from "./FilterCat";


export function Home(){
    const [products, setProducts] = useState([])
    const [maxPrice, setMaxPrice] = useState('0')
    const [cat, setCat] = useState('all')
    
    const setMax = (p) => {
        setMaxPrice(p)
    }

    const clearFilters = () => {
        setCat('all')
        setMaxPrice('0')
    }
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                ( cat === 'all') ?
                (maxPrice.length > 1) ? setProducts(json.filter(p => (parseInt(p.price) <= parseInt(maxPrice))&&(p.category!=="jewelery"))) :
                setProducts(json.filter(p=>p.category!=="jewelery"))
                :
                (maxPrice.length > 1) ? setProducts(json.filter(p => (parseInt(p.price) <= parseInt(maxPrice))&&(p.category === cat))) :
                setProducts(json.filter(p=>p.category === cat))
                
            }) 
    }, [maxPrice, cat])
   

 
        
    
    return <div className="home-container">
        <div className="filters-div">
        <FilterPrice setMax={setMax} max={maxPrice}/>
        <FilterCat setCat={setCat} cat={cat}></FilterCat>
        <button onClick={clearFilters} className="clear-button">Clear filters</button>
        </div>
        <div className="home-grid">
        
        
        
        {products ? products?.slice(0,18).map(product => 
            <Item key={product.id} product={product}/>
        ) : "Loading..."}
        
    </div>
    </div>
}