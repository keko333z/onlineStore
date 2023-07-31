import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { Cart } from './Cart'

export function Header(){

   

    return <div className="header">
        
            <Link to={'/'} style={{color: 'black', decoration: 'none', fontSize: '48px', marginTop: '30px'}}>e-Commerce</Link>
            <Cart />   
             
        </div>
}