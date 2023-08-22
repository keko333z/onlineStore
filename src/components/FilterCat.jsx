


export function FilterCat ({setCat, cat}) {
    

   
   
    return  <div className="cat-select"> 
                <label htmlFor="category">Category</label>
                
                <select  value={cat} 
                        onChange={e => setCat(e.target.value)} >
                    <option value={"all"} >All</option>
                    <option value={"men's clothing"} >men's clothing</option>
                    <option value={"women's clothing"}>women's clothing</option>
                    <option value={"electronics"} >electronics</option>
                </select>
                
            </div>
        
  


}