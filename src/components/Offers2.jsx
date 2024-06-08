import OfferCard from "./OfferCard";
import MoreProducts2 from "./MoreProducts2";

function Offers2(props) {
  return (
    <div className="p-5 bg-white flex gap-3 sm:gap-5 my-24 justify-center">
      {MoreProducts2.map((product, index) => (
        <OfferCard
          windowW={props.windowW}
          key={index}
          alt={product.alt}
          img={product.img}
          description={product.description}
          bg={product.bg}
          animDirect={product.animDirect}
          animDelay={product.animDelay}
          btnTxt={product.btnTxt}
        />
      ))}
    </div>
  );
}

export default Offers2;
