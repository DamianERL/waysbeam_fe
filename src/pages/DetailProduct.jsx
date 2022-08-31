import React from 'react'
import Rupiah from "rupiah-format";
import {useParams} from 'react-router-dom'
import products from '../dummy/product'
import Navbar from '../components/navbar/Navbar'
import cssModules from '../styles/detail.module.css';
export default function DetailProduct() {
  //filter
  const params = useParams();
  console.log(params)
  const data = products[parseInt(params.id-1)]
  return (
    <>
    <Navbar/>
    <section className={cssModules.container}>
      <div>
        <img  className={cssModules.imgp} src={data.image} alt="" />
      </div>
        <div className={cssModules.wrap}>
        <p className={cssModules.title}>{data.title}</p>
        <p className={cssModules.text}>Stock: {data.stock}</p>
        <p className={cssModules.text}>{data.desc}</p>
        <p className={cssModules.price}>{Rupiah.convert(data.price)}</p>
        <button className={cssModules.btn} >Add cart</button>
        </div>
    </section>
    </>
  )
}
