import "./App.css";
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
    </main>

    <footer>

    </footer>
    </>
  )
}