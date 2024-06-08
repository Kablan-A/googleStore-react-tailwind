import CategoriesData from "./CategoriesData";
import CategoryCard from "./CategoryCard";
import { motion } from "framer-motion";
import fadeIn from "../variants";

function Categories() {
  return (
    <div className="flex flex-col items-center p-5 bg-white">
      <motion.h3
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className="mb-10 text-3xl text-[#3C4043]"
      >
        Shop by category.
      </motion.h3>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row gap-5">
        {CategoriesData.map((category, index) => (
          <CategoryCard
            key={index}
            img={category.img}
            alt={category.alt}
            animDirect={category.animDirect}
            animDelay={category.animDelay}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;
