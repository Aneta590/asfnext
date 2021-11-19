import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <Head>
          <title>Maison d'hotes</title>
        </Head>
      </div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
