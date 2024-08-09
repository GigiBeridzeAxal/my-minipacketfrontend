import Image from "next/image";
import Header from "./components/Header";
import Products from "./components/Products";
import About from "./components/About";
import Miwodeba from "./components/Miwodeba";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <>
   <Header></Header>
   <Products></Products>
   <Miwodeba></Miwodeba>
   <About></About>
   <Contacts></Contacts>
   <Footer></Footer>
   </>
  );
}
