//dependencies
import React from 'react'
import Rupiah from "rupiah-format";
import productD from '../dummy/product'
import { Link } from "react-router-dom";
import { useState,useContext } from 'react';

//component
import {UserContext} from '../context/UserContext'
import Navbar from '../components/navbar/Navbar'
import cssModules from '../styles/landingPage.module.css'

export default function LandingPage() {
    //userdata
    const [state] = useContext(UserContext);

//modal login
const [show,setShow] =useState(false)
const handleClick = () => setShow(true)
  return (
    <>
    <Navbar setShow={setShow} show={show}/>
    <section>
        <div className={cssModules.heroSection}>
          <img  src="https://res.cloudinary.com/doqkbrvkq/image/upload/v1661841358/Jumbotron_js2fee.svg" alt="" />
        </div>
    </section>
    <section>
        <div className={cssModules.product} >
            {productD.map((item,index) => (
                <div key={index} className={cssModules.card1}>
                   <div className={cssModules.cardProduct}>
                    <Link
                    to={ 
                        state.isLogin === true ? `/detail-product/${item.id}`:""
                    } onClick={state.isLogin === false ? handleClick:""}
                    >
                    <img className={cssModules.imageProduct} src={item.image} alt=""/>
                    </Link>
                    </div>
                    <div className={cssModules.wrapProduct}>
                    <p className={cssModules.titlep}>
                        {item.title}</p>
                    <p className={cssModules.pricep}>
                        {Rupiah.convert(item.price) }</p>
                    <p className={cssModules.stockp}>
                        {item.stock}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
    </>
  )
}
