import Products from "./Products";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import fadeIn from "../variants";

function NewProducts() {
  return (
    <div className="section py-12 flex flex-col gap-24">
      <motion.p
        variants={fadeIn("up", 0.1)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="text-base 2xl:text-lg text-[#3C4043] font-normal self-center"
      >
        Sneak a peek. For you or for them.
      </motion.p>

      {/* Slider */}
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="ml-[8vw] slider snap-mandatory snap-x flex gap-5"
      >
        {Products.map((product, index) => (
          <ProductCard key={index} img={product.img} alt={product.alt} />
        ))}
      </motion.div>

      <motion.hr
        variants={fadeIn("right", 0.1)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="ml-[8vw] h-[2px] bg-[#80868B] w-auto"
      />
    </div>
  );
}

export default NewProducts;
