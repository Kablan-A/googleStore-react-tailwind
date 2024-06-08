import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCircleQuestion,
  faCartShopping,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./NavLinks";
import Burger from "./Burger";
import NavMobile from "./NavMobile";
import { useState } from "react";

function Nav(props) {
  const [toShow, setToShow] = useState(false);

  function showNav() {
    setToShow((prev) => {
      const curr = !prev;
      const nav = document.getElementById("mobileNav");
      nav.style.right = curr ? "0" : "-100%";
      return curr;
    });
  }

  return (
    <nav className="z-40 sticky top-0 flex items-center justify-between h-14 px-5 bg-white">
      {props.windowW < 1024 ? (
        <>
          <Burger isShown={toShow} handleClick={showNav} />
          <NavMobile handleClick={showNav} />
        </>
      ) : (
        <NavLinks mobile={false} />
      )}

      <div className="nav--list">
        <FontAwesomeIcon icon={faSearch} className="cursor-pointer" />
        <FontAwesomeIcon icon={faCircleQuestion} className="cursor-pointer" />
        <FontAwesomeIcon icon={faCartShopping} className="cursor-pointer" />
        <FontAwesomeIcon icon={faCircleUser} className="cursor-pointer" />
      </div>
    </nav>
  );
}

export default Nav;
