import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../slice/categorySlice";
import logoutSlice from "../slice/logoutSlice";



export const Home = () => {
  const data = useSelector(state => state.categories?.data || [])
   // console.log(data)
    const dispatch = useDispatch()
    
    useEffect(()=>{
      dispatch(fetchUserById())
    },[])
   // dispatch(fetchUserById())
  
  return (
    <>
    <div className="Main_Container">
      
        <div className="mid-one">
            {/*<h1 style={{backgroundColor:'white', color:'black'}}>𝐹𝒶𝓈𝒽𝒾𝑜𝓃𝐹𝓇𝑒𝓃𝓏𝓎!</h1>*/}
            <button className="btn-1"><Link to='/logout' style={{textDecoration: 'none', color:'black',fontSize:'1rem'}}>LogOut</Link></button>
          <button className="btn-1"><Link to='/login' style={{textDecoration: 'none', color:'black',fontSize:'1rem'}}>LogIn</Link></button>
          <button className="btn-1"><Link to='/register' style={{textDecoration: 'none', color:'black',fontSize:'1rem'}}>Register</Link></button>
          <button className="btn-1"><Link to ='/product' style={{textDecoration: 'none', color:'black'}}> Product </Link> </button>
          <button className="btn-1"><Link to ='/Categories' style={{textDecoration: 'none', color:'black'}}>Category</Link></button>
          <button className="btn-1"><Link to='/orders' style={{textDecoration :'none',color:'black'}}>Orders</Link></button>
          <button className="btn-1" style={{textDecoration:'none' , color:'black'}}>Home</button>
  
        </div>
   {/*search bar */}
    <div className="header" style={{ borderRadius:'15px'}}>
    <h1 style={{backgroundColor:'white', color:'black'}}>𝐹𝒶𝓈𝒽𝒾𝑜𝓃𝐹𝓇𝑒𝓃𝓏𝓎!</h1>
       
            <button type="button" className="cart-btn"style={{marginright:'10%',borderRadius:'5px'}}><Link to="/cart" style={{textDecoration: 'none',color:'black' }}>&#x1F6D2;</Link></button>
            <button type="button" className="cart-btn"style={{marginRight:'10%',borderRadius:'5px'}}><Link to='/wishlist' style={{textDecoration: 'none'}}>&#128159;</Link></button>
        </div>        

<div className="Img_Container">
 
                 { data.map((item,index)=>
              <div className="image-div" key={index}>
                <img
                  src={item.image}            
                  className="img-fluid"
                  alt="Responsive image"
                  />
                <button type="button" className="btn">
                  <Link to='/womens' style={{ textDecoration: 'none', color: 'black'}}>
                  {item.name}  
              </Link>
            </button>
              </div>
                
                  )}
  
        </div>
        <div className="footer-div">
        <div className="aboutus-div">
          <h3>ABOUT</h3>
        <Link to="/about" style={{color:'white',textDecoration:'none'}}><h6>About us</h6></Link>
        <Link to="/contact" style={{color:"white",textDecoration:'none'}}><h6>Contact us</h6></Link>
        <Link to="/about" style={{color:'white',textDecoration:'none'}}><h6>Carrers</h6></Link>
        <Link to="/about" style={{color:'white',textDecoration:'none'}}><h6>ff story</h6></Link>
        <Link to="/about" style={{color:'white',textDecoration:'none'}}><h6>ff wholesale</h6></Link> 
        </div>
        <div className="aboutus-div">
          <h3>HELP</h3>
         <Link to="/help" style={{textDecoration: 'none' , color:"white"}}><h6>Payments</h6></Link>
         <Link to="/help" style={{textDecoration: 'none' , color:"white"}}><h6>Refund&Cancellation</h6></Link>
         <Link to="/help" style={{textDecoration: 'none' , color:"white"}}><h6>shipping</h6></Link>
        </div>
        <div className="aboutus-div">
          <h3>SOCIAL</h3>
          <Link to='twitter' style={{textDecoration:'none', color:'white'}}><h6>Twitter</h6></Link>
          <Link to='twitter' style={{textDecoration:'none', color:'white'}}><h6>YouTube</h6></Link>
          <Link to='twitter' style={{textDecoration:'none', color:'white'}}><h6>facebook</h6></Link>
        </div>
        <div className="aboutus-div">
          <h4>Mail Us</h4>
          <p>Flipkart Internet Private Limited,Buildings Alyssa, Begonia &Clove Embassy Tech Village,Outer Ring Road, Devarabeesanahalli Village,Bengaluru, 560103,Karnataka, India</p>
        </div>
        <div className="aboutus-div">
          <h5>Registered Office Address:</h5>
          <p>Flipkart Internet Private Limited,Buildings Alyssa, Begonia &Clove Embassy Tech Village,Outer Ring Road, Devarabeesanahalli Village,Bengaluru, 560103,Karnataka, India CIN : U51109KA2012PTC066107 Telephone:<Link style={{textDecoration:'none'}}>+91 1234567890</Link></p>
        </div>

      </div>
      
      </div>
      
  </>
)
}
