import MoreProducts from "./MoreProducts";
import OfferCard from "./OfferCard";

/*
  To make a grid with 3 blocks on row1 and 2 on row 2:
    1. grid-cols-6: grid with 6 columns
    2. col-span-2: for row 1. means that a block's span is equal to 2 columns
    3. col-span-3: for row 2. means that a block's span is equal to 3 columns
*/

function Offers(props) {
  return (
    <div className="p-5 bg-white my-24">
      <div className="w-full h-full flex items-center justify-center">
        <div className="grid grid-cols-6 gap-3 md:gap-5">
          {MoreProducts.map((product, index) => (
            <OfferCard
              key={index}
              windowW={props.windowW}
              alt={product.alt}
              img={product.img}
              description={product.description}
              bg={product.bg}
              colSpan={product.colSpan}
              animDirect={product.animDirect}
              animDelay={product.animDelay}
              btnTxt={product.btnTxt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Offers;
