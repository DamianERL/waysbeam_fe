import React from 'react'
import Navbar from '../components/navbar/Navbar'
import css from '../styles/addPro.module.css'

export default function AddProduct() {
  return (
    <>
    <Navbar/>
    <section className={css.container}>
      <div className={css.wrap}>
      <h1 className={css.text21}>Add Product</h1>
        <input
        className={css.input1}
        placeholder='Name'
         type="text" />
        <input
        className={css.input1}
        placeholder='Stock'
         type="text" />
        <input
        className={css.input1}
        placeholder='Price'
         type="text" />
        <input
        className={css.input2}
        placeholder='Description Product'
         type="text" />
        <input type="file" hidden id='addproduct'/>
        <label
        htmlFor="addproduct"
        className={css.input1 }
        >
        </label>
        <button className={css.btn}>Add Product</button>
        </div>
      <div className={css.wrap2}>
        <img className={css.img} src="" alt="" />
      </div>
    </section>
    </>
  )
}
