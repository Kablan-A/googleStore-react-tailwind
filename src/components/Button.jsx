import { motion } from "framer-motion";

function Button(props) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className={`${props.btnStyle} ${props.hasBorder && "btn--border"}`}
    >
      {props.txt}
    </motion.button>
  );
}

export default Button;
