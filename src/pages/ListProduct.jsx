import React from 'react'
import Navbar from '../components/navbar/Navbar'
import css from '../styles/list.module.css'
import data from '../dummy/list'
import Rupiah from 'rupiah-format'
export default function ListProduct() {
  return (
    <>
    <Navbar/>
    <section  className={css.container}>
      <div>
        <h1  className={css.text1}>Income transaction</h1>
      </div>
      <div>
        <table className={css.wrap}>
          <thead>
          <tr>
            <th className={css.td}>No</th>
            <th className={css.td}>Image</th>
            <th className={css.td}>Name</th>
            <th className={css.td}>Stock</th>
            <th className={css.td}>Price</th>
            <th className={css.td}>Description</th>
            <th className={css.td}>Action</th>
          </tr>
          </thead>
          <tbody>
          {data?.map((item,index)=>(
            <tr>
              <td className={css.tr}>{index + 1}</td>
              <td className={css.tr}> <img  className={css.img} src={item.image} alt="" /></td>
              <td className={css.tr}>{item.name}</td>
              <td className={css.tr}>{item.stock}</td>
              <td className={css.tr}>{Rupiah.convert(item.price)}</td>
              <td className={css.tr}>{item.desc}</td>
              <td className={css.action}>
              <button className={css.btn}>Delete</button>
              <button className={css.btn}>Update</button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </section>
    </>
  )
}
