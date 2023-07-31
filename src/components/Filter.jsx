import { useState } from "react";


export function Filter ({setMax}) {
    const [inputMax, setInputMax] = useState('')

    const updateInput = (e) => {
        setInputMax(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setMax(inputMax)
    }
    return    <form className="filter-form" onSubmit={handleSubmit}>
        <label htmlFor="maxPrice">Max price</label>
        <input className="filter-input" name="maxPrice" placeholder="max price" value={inputMax} onChange={updateInput}></input>
        <button type="submit">Filter</button>
    </form>


}