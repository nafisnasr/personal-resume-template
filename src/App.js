import Header from "./components/Header/Header"
import Main from "./components/Main/Main";
import Features from "./components/Features/Features";
import Portfolio from "./components/Portfolio/Portfolio";
import ProgressBox from "./components/ProgressBox/ProgressBox";
import Prices from "./components/Prices/Prices";
import Blog from "./components/Blog/Blog";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Features />
      <Portfolio />
      <ProgressBox/>
      <Prices/>
      <Blog />
      <ContactUs />
      <Footer/>
    </>
  );
}


