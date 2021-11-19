import styles from "../styles/Navbar.module.css";
import { TiDocumentText } from "react-icons/ti";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/logo.jpg";
// function myFunction() {
//   const x = document.getElementById("myLink");

export default function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <Image
          src={Logo}
          alt="ASF Logo"
          width={50}
          height={50}
          placeholder="blur"
        />
        <h1 className={styles.titletext}>Maison d'hotes</h1>

       
        <button  class="dropbtn" ><TiDocumentText className={styles.iconmenu}/> </button>
        <div class="dropdown-content">
        <Link  href="/blog">
          <a className={styles.link}>BLOG</a>
        </Link>
        {""}
        <br/>
        <Link href="/api/:id" replace>
          <a className={styles.link}>ID-ROOMS</a>
        </Link>
        </div>
      </div>
    </>
  );
}
