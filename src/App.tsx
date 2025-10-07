import "./App.css";
import Article from "./components/article/page";
import Navbar from "./components/navbar/page";
import Products from "./components/products/page";

export default function App(){
  return(
    <>
    <header>
      <Navbar/>
    </header>

    <main>
      <Products/>
      <Article/>
    </main>

    <footer>

    </footer>
    </>
  )
}