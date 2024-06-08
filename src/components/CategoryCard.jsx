import { motion } from "framer-motion";
import fadeIn from "../variants";

function CategoryCard(props) {
  return (
    <motion.div
      variants={fadeIn(props.animDirect, props.animDelay)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col gap-3 sm:gap-6 items-center"
    >
      <img src={props.img} alt={props.alt} />
      <h4 className="text-normal text-sm 2xl:text-lg text-[#1967D2] cursor-pointer">
        {props.alt}
      </h4>
    </motion.div>
  );
}

export default CategoryCard;
