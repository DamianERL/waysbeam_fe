import React from 'react'
import { Link } from 'react-router-dom'
import cssModules from "../../styles/nav.module.css"


export default function Navbar() {
  return (
    <>
    <nav className={cssModules.container}>
        <div>
            <Link to={"/"}>
            <img src='https://res.cloudinary.com/doqkbrvkq/image/upload/v1661842683/Icon_nxtk0f.svg' alt="" />
            </Link>
        </div>
        <div className={cssModules.auth}>
            {/* <button>
                Login
            </button>
            <button>
                Register
            </button> */}
            <img src="https://res.cloudinary.com/doqkbrvkq/image/upload/v1661842682/shopping-basket_1_1_widbpv.svg" alt="" />
            <div className={cssModules.imgprofil}>
            <img className={cssModules.imgprofil1 } src="https://res.cloudinary.com/doqkbrvkq/image/upload/v1661856699/taejune-kim-cafe_m6gndm.jpg" alt="" />
            </div>
        </div>
    </nav>
    </>
  )
}
