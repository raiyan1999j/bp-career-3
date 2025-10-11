import "./App.css";
import Article from "./components/article/page";
import Footer from "./components/footer/page";
import Navbar from "./components/navbar/page";
import Products from "./components/products/page";

export default function App(){
  return(
    <>
    <header>
      <Navbar/>
    </header>

    <main className="mt-[var(--nav-height,0px)]">
      <Products/>
      <Article/>
    </main>

    <footer className="xl:mb-0 md:mb-0 mb-15">
      <Footer/>
    </footer>
    </>
  )
}