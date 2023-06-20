import React from "react";
import Image from "next/image";
import style from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className={style.desktopNav}>
        <div className={style.desktopLeft}>
          <Link href='/'><Image src="logo.svg" height="50" width="90" alt="logo"></Image></Link>
        </div>
        <div className={style.desktopRight}>
          <ul>
            <li><Link className={style.link} href='/'>Home</Link></li>
            <li><Link className={style.link} href='/about'>About Us</Link></li>
            <li>Partner With Us</li>
            <li>Blog</li>
            <div className={style.btn}>
              <button>Download ZET</button>
            </div>
          </ul>
        </div>
        <div className={style.right}>
          <Image src="menu.svg" height="28" width="28" alt="menu"></Image>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
