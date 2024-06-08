import logo from "../images/googleLogo.jpg";

function NavLinks(props) {
  const listStyle = props.mobile ? "nav--list-mobile" : "nav--list-desk";
  const listItemStyle = props.mobile
    ? "nav--list-item-mobile"
    : "nav--list-item-desk";

  return (
    <ul className={`nav--list ${listStyle}`}>
      <li className="self-center cursor-pointer">
        <img src={logo} alt="Google Logo" className="h-6" />
      </li>
      <li className={listItemStyle}>Phones</li>
      <li className={listItemStyle}>Earbuds</li>
      <li className={listItemStyle}>Watches</li>
      <li className={listItemStyle}>Smart Home</li>
      <li className={listItemStyle}>Laptops</li>
      <li className={listItemStyle}>Accessories</li>
      <li className={listItemStyle}>Subscriptions</li>
      <li className={listItemStyle}>Offers</li>
    </ul>
  );
}

export default NavLinks;
