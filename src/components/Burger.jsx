import { motion } from "framer-motion";

function Burger(props) {
  return (
    <motion.div
      whileHover={props.isShown && { transform: "rotatez(180deg)" }}
      transition={0.8}
      onClick={props.handleClick}
      className="w-6 cursor-pointer flex flex-col gap-1 z-10"
    >
      <span className={`menu--line ${props.isShown && "line1"}`}></span>
      <span className={`menu--line ${props.isShown && "line2"}`}></span>
      <span className={`menu--line ${props.isShown && "line3"}`}></span>
    </motion.div>
  );
}

export default Burger;
