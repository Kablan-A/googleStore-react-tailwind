import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import NewProducts from "./components/NewProducts";
import CollabData from "./components/CollabData";
import Collab from "./components/Collab";
import Offers from "./components/Offers";
import Categories from "./components/Categories";
import Offers2 from "./components/Offers2";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [windowW, setWindowW] = useState(window.innerWidth);

  useEffect(() => {
    function updateWidth() {
      setWindowW(window.innerWidth);
    }
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <div className="w-full">
      <Header />
      <Nav windowW={windowW} />
      <Hero windowW={windowW} />
      <NewProducts />
      <Collab {...CollabData.nba} />
      <Offers windowW={windowW} />
      <Categories />
      <Offers2 windowW={windowW} />
      <Collab {...CollabData.sustainability} />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
