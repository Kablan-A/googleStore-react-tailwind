import NavLinks from "./NavLinks";

function NavMobile(props) {
  return (
    <div
      id="mobileNav"
      className="w-full h-screen fixed top-0 right-[-100%] flex transition-all"
    >
      <div
        className="w-1/2 bg-gray-600 opacity-50"
        onClick={props.handleClick}
      ></div>
      <div className="w-1/2 flex items-center justify-center bg-white">
        <NavLinks mobile={true} />
      </div>
    </div>
  );
}

export default NavMobile;
