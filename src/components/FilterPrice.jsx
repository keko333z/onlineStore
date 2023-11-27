


export function FilterPrice ({setMax, max}) {
    

    const updateInput = (e) => {
        
        setMax(e.target.value)
    }
   
    return    <form className="filter-form" >
        <label htmlFor="maxPrice">Max price</label>
        <input className="filter-input" name="maxPrice" placeholder="max price" value={max} onChange={updateInput}></input>
    </form>


}