import { motion } from "framer-motion";

function ProductCard(props) {
  return (
    <div className="snap-start w-48 flex flex-col gap-5 cursor-pointer">
      <motion.div
        className="w-48 h-64 flex items-center justify-center bg-[#F8F9FA] rounded-md"
        whileHover={{ scale: 1.2 }}
      >
        <img src={props.img} alt={props.alt} />
      </motion.div>
      <h3 className="text-base text-[#3C4043] font-normal">{props.alt}</h3>
    </div>
  );
}

export default ProductCard;
