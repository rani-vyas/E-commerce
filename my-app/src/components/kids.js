import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProductById } from "../slice/productSlice";
import { addtoCart } from "../slice/cartSlice";
import './kids.css'
export default function KidsClothes(){
            const data = useSelector(state => state.Product.data)
            const dispatch = useDispatch()
           
            useEffect(()=>{
             dispatch(fetchProductById({}))
            },[])
            const handleAddToCart = (product) => {
             dispatch(addtoCart(product));
             console.log(product)
           };
    return(
        <>
            <h1 id="h1-id" style={{textAlign:'center'}}>KIDS FASHION</h1>
            {data.map((item,index)=>
                <div className="card" key={index} style={{width:'50%', border:'1px solid black'}}>
                   
                    <img src={item.image} className="top&tees" alt="Denim Jeans" style={{width:"100%",border:'1px solid black'}}/>
                    <div style={{fontStyle:'italic',fontSize:'1rem'}}>
                        <h5>{item.name}</h5>
                        <h5>{item.description}</h5>
                        <h5>{item.price}</h5>
                    </div>
                        <p><button onClick={()=>handleAddToCart(item)} style={{textDecoration:'none'}}><Link to='/cart'>Add Cart</Link></button></p>
                        
                        {/*<p><button type="button" style={{width:'10%', padding:'10px', textDecoration:'none',
                         backgroundColor:'white', float:'left'}} onClick={AddToWishlist}><Link to='/wishlist' style={{textDecoration:'none'}}>&#128159;</Link></button></p>*/}
                </div>
            )}      
        </>
    );
}