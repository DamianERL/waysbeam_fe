import React from 'react'
import css from '../styles/cart.module.css'
import Navbar from '../components/navbar//Navbar'

export default function Cart() {
  return (
    <>
    <Navbar/>
    <container className={css.container}>
      <h1 className={css.text1}>My Cart</h1>
        <h1  className={css.text2}>Review Your Order</h1>
        <div  className={css.bigwrap}>
      <section  className={css.wrap1}>
        <div className={css.left}>
          <img className={css.imgproduct} src="https://res.cloudinary.com/doqkbrvkq/image/upload/v1661841352/Rectangle_4_1_vphaaw.png" alt="" />
          <ul className={css.wraptext}>
            <li  className={css.text3}>GueTemala Beans</li>
            <li> 
            <strong className={css.text5}>-</strong>
            <strong className={css.text4}>1</strong>
            <strong className={css.text5}>+</strong>
            </li>
          </ul>
        </div>
        <div className={css.rightorder}>
          <p className={css.text6}>Rp.3.000.000</p>
          <img src="https://res.cloudinary.com/doqkbrvkq/image/upload/v1661974422/Group_adcp9g.svg" alt="" />
        </div>
      </section>
      <section className={css.wrap2}>
        <div className={css.right}>
          <div className={css.leftpay}>
            <p className={css.text6}>sub total</p>
            <p className={css.text6}>qty</p>
          </div>
          <div className={css.rightpay1}>
            <p className={css.text6}>300.900</p>
            <p className={css.text6}>2</p>
          </div>
        </div>
        <div className={css.rightpay}>
          <p className={css.text7}>
          Total
          </p>
          <p className={css.text8}>
            300.900
          </p>
        </div>
      </section>
        </div>
    </container>
    </>
  )
}
