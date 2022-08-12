import React, { useRef } from 'react';
import Link from 'next/link';


export default function NavBar() {
  const menuTog = useRef();
  const navTog = useRef();
  const toggleMenu = () => {
    menuTog.current.classList.toggle('active');
    navTog.current.classList.toggle('active');
    console.log('clicked');

  };

  return (
    <header>
      <Link href="/" className="logo">
        <a>
        <img src="/assets/logo.jpg " alt=""></img>
        </a>
      </Link>
      <div ref={menuTog} className="toggle" onClick={toggleMenu}></div>
      <ul className="navigation" ref={navTog}>
        <li onClick={toggleMenu}>
          <Link href="/" >Inicio</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link href="/adopt">Adopta</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link href="/blogs">Blog</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link href="/contact">Ayuda</Link>
        </li>
      </ul>
    </header>
  );
}
